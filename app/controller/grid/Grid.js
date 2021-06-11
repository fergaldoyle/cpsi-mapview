/**
 * This class is the controller for the cpsi mapview WFS
 * generic grid class
 *
 */
Ext.define('CpsiMapview.controller.grid.Grid', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cmv_grid',

    requires: [
        'Ext.menu.Menu',
        'Ext.grid.filters.Filters',
        'BasiGX.util.Layer',
        'CpsiMapview.util.WmsFilter',
        'GeoExt.util.OGCFilter'
    ],

    /**
     * The currently active spatial filter for the layer.
     *
     * @cfg {Ext.util.Filter} spatialFilter
     */
    spatialFilter: null,

    /**
     * Zoom the map to the selected feature with a buffer
     *
     * @param {ol.Feature} feature
     * @param {ol.Map} map
     * @private
     */
    zoomToFeature: function (feature, map) {

        var me = this;

        var geom = feature.getGeometry();

        // check for null features
        if (!geom) {
            return;
        }

        // TODO check for feature type when zooming
        var extent = geom.getExtent();
        var view = me.getView();
        // as this is a point then buffer it by the extentBuffer property
        extent = ol.extent.buffer(extent, view.extentBuffer);
        //map.getView().fit(extent, map.getSize());

        var mapView = map.getView();

        var resolution = mapView.getResolutionForExtent(extent);
        var zoom = mapView.getZoomForResolution(resolution);
        var center = ol.extent.getCenter(extent);
        var duration = 2000;

        mapView.animate({
            center: center,
            duration: duration
        });

        mapView.animate(
            {
                zoom: zoom - 1,
                duration: duration / 2
            }, {
                zoom: zoom,
                duration: duration / 2
            }
        );
    },

    /**
     * Open a row-level context-menu with a Zoom to Feature option
     * @private
     */
    onItemContextMenu: function (grid, record, item, index, e) {
        var me = this;
        var vm = me.getViewModel();
        var map = vm.get('map');
        var isSpatial = vm.get('isSpatialGrid');

        // currently there is only one context-menu tool
        // and it is spatial-related
        // if more tools are added then remove this guard
        if (!isSpatial) {
            return;
        }

        var contextMenu = Ext.create('Ext.menu.Menu', {
            defaults: {
                clickHideDelay: 1
            },
            items: [{
                text: 'Zoom to Feature',
                hidden: !isSpatial,
                handler: function () {
                    me.zoomToFeature(record.getFeature(), map);
                }
            }],
            listeners: {
                hide: {
                    fn: function (menu) {
                        menu.destroy();
                    }
                }
            }
        });

        e.stopEvent();
        contextMenu.showAt(e.getXY());
    },

    /**
     * Find a layer in the map based on its unique and custom layerKey
     * property
     *
     * @param {string} key
     * @private
     */
    getLayerByKey: function (key) {
        var layers = BasiGX.util.Layer.getLayersBy('layerKey', key);

        if (layers && layers.length === 1) {
            return layers[0];
        }
    },

    /**
     * Update any associated layer tree node to indicate that the layer is filtered or unfiltered
     * @param {any} layer
     * @param {any} filters
     */
    updateLayerNodeUI: function (layer, filters) {

        // Get a reference to the layer trees
        var treePanels = Ext.ComponentQuery.query('cmv_layertree');
        if (treePanels.length === 1) {
            // we will only ever have one layer tree for an application
            var treePanel = treePanels[0];
            var node = treePanel.getNodeForLayer(layer);
            if (node) {
                if (Ext.isEmpty(filters)) {
                    node.set('glyph', null);
                    node.removeCls('cpsi-tree-node-filtered');
                } else {
                    node.set('glyph', 'f0b0@FontAwesome');
                    node.addCls('cpsi-tree-node-filtered');
                }
                node.triggerUIUpdate();
            }
        }
    },

    /**
     * Applies both attribute and spatial filters to
     * any associated WMS and vector layer and forces a reload of both
     *
     * @private
     */
    updateAssociatedLayers: function () {

        var me = this;
        var grid = me.getView();
        var viewModel = me.getViewModel();

        var store = grid.getStore();
        var filters = Ext.clone(store.getFilters().items); // otherwise the actual grid filters are modified
        var wmsLayer = me.getLayerByKey(viewModel.get('wmsLayerKey'));

        if (me.spatialFilter) {
            filters.push(me.spatialFilter);
        }

        if (me.idFilter) {
            filters.push(me.idFilter);
        }

        if (wmsLayer) {
            var wmsSource = wmsLayer.getSource();
            var wmsParams = wmsSource.getParams();

            // save the current filter string
            var originalFilterString = wmsParams.FILTER || '';

            // set any new filter
            if (filters.length > 0) {
                wmsParams.FILTER = GeoExt.util.OGCFilter.getOgcFilterFromExtJsFilter(filters, 'wms', 'and', '1.1.0');
            } else {
                wmsParams.FILTER = ''; // ensure the filter is reset if no filters are set
            }

            // ensure there is a filter for every layer listed in the WMS request (required by MapServer)
            var wmsFilterUtil = CpsiMapview.util.WmsFilter;
            var wmsFilterString = wmsFilterUtil.getWmsFilterString(wmsLayer);


            if (originalFilterString !== wmsFilterString) {
                wmsSource.updateParams({
                    FILTER: wmsFilterString,
                    cacheBuster: Math.random()
                });
            }
            // keep a reference to the raw filters so they can be applied to the vector layer
            // when switching - see LayerFactory
            wmsSource.set('additionalFilters', filters);
            me.updateLayerNodeUI(wmsLayer, filters);
        }

        var vectorLayer = me.getLayerByKey(viewModel.get('vectorLayerKey'));

        if (vectorLayer) {
            var vectorSource = vectorLayer.getSource();
            vectorSource.set('additionalFilters', filters);
            vectorSource.clear();
            vectorSource.refresh();
            me.updateLayerNodeUI(vectorLayer, filters);
        }

    },

    /**
     * Apply any spatial filter to the store request, and convert all
     * ExtJS filters to WFS filters.
     * Also set a loading mask on the grid.
     *
     * @private
     */
    onWfsStoreBeforeLoad: function (store, params) {

        // handle the loadMask ourselves due to various issues around data binding and reconfiguring stores
        // https://www.sencha.com/forum/showthread.php?299670-ExtJS-5.1.0-LoadMask-missing-on-grids-with-bound-store&p=1116109#post1116109
        // https://www.sencha.com/forum/showthread.php?301458-Loading-mask-not-setting-for-bound-store-loaded-in-ViewController.init
        var me = this;

        var view = me.getView();
        view.setEmptyText('');
        view.setLoading();

        var filters = Ext.clone(store.getFilters().items);

        if (me.spatialFilter) {
            filters.push(me.spatialFilter);
        }

        // create the WFS filter based on either grid filters or spatial filter or both
        var wfsGetFeatureFilter = GeoExt.util.OGCFilter.getOgcWfsFilterFromExtJsFilter(filters, 'And', '2.0.0');

        // check if we have an addition feature ID filter and rework OGC filter accordingly
        if (me.idFilter) {
            // get OGC filter bodies for grid filters and spatial filter
            var standardOgcFilterBodies = [];
            Ext.each(filters, function (filter) {
                var filterBody = GeoExt.util.OGCFilter.getOgcFilterBodyFromExtJsFilterObject(filter, '2.0.0');
                standardOgcFilterBodies.push(filterBody);
            });

            // combine grid filters and spatial filter with AND (as filter body)
            var allOgcFilters = [];
            if (standardOgcFilterBodies.length > 0) {
                var standardOgcFilter = GeoExt.util.OGCFilter.combineFilterBodies(standardOgcFilterBodies, 'And', false, '2.0.0');
                allOgcFilters.push(standardOgcFilter);
            }

            // create filter body for addition feature ID filter (as filter body)
            var idOgcFilterBody = GeoExt.util.OGCFilter.getOgcFilterBodyFromExtJsFilterObject(me.idFilter, '2.0.0');
            allOgcFilters.push(idOgcFilterBody);

            // transform the filter bodies to one filter object
            wfsGetFeatureFilter = GeoExt.util.OGCFilter.combineFilters(allOgcFilters, 'Or', false, '2.0.0');
        }

        if (wfsGetFeatureFilter) {
            params.filter = wfsGetFeatureFilter;
        }
    },

    /**
     * Hide the loading mask when the store has loaded
     *
     * @private
     */
    onWfsStoreAfterLoad: function (store, features, success) {

        var grid = this.getView();
        var emptyText = '';

        // display a message if the WFS request fails
        if (success === false) {
            emptyText = 'An error occurred loading the data. ';
            if (store.pageSize === null) {
                emptyText += 'Please check "Page Records" to reduce the amount of records returned';
            }
        }

        grid.setEmptyText(emptyText);
        grid.setLoading(false);
    },

    /**
     * Store the spatial filter as a property of this class
     * then force a reload of the grid store with the new filter
     * Finally apply all filters to any associated layers.
     *
     * @param {Ext.util.Filter} spatialFilter
     * @private
     */
    onSpatialFilter: function (spatialFilter) {

        var me = this;
        me.spatialFilter = spatialFilter;

        // force a reload of the grid store
        var grid = me.getView();
        var store = grid.getStore();

        // clear any paging parameters as these will no longer apply
        // once the spatial filter has been applied
        store.currentPage = 1;

        store.loadWfs();


        this.updateAssociatedLayers();
    },

    /**
     * Sets an ExtJS "in" filter for feature IDs which has to be applied to the
     * underlying WFS request.
     *
     * @param {Ext.util.Filter} idFilter Filter object with FIDs
     */
    onIdFilterSet: function (idFilter) {
        var me = this;
        me.idFilter = idFilter;

        // force a reload of the grid store
        var grid = me.getView();
        var store = grid.getStore();

        // clear any paging parameters as these will no longer apply
        // once the spatial filter has been applied
        store.currentPage = 1;

        store.loadWfs();


        this.updateAssociatedLayers();
    },


    /**
     * If there is an edit / view window for individual records
     * in the grid then open it with this function
     *
     * @param {Ext.grid.View} grid
     * @param {Ext.data.Model} record
     * @private
     */
    onRowDblClick: function (grid, record) {

        var me = this;
        var vm = me.getViewModel();
        var associatedEditWindow = vm.get('associatedEditWindow');
        var associatedEditModel = vm.get('associatedEditModel');

        // get a reference to the model class so we can use the
        // static .load function without creating a new empty model
        var modelPrototype = Ext.ClassManager.get(associatedEditModel);

        if (associatedEditWindow && modelPrototype) {

            // if the record is already open in a window then simply bring that window to the front
            var recId = record.getId();
            var windowXType = Ext.ClassManager.get(associatedEditWindow).prototype.getXType();
            var existingWindows = Ext.ComponentQuery.query(windowXType);
            var rec, recordWindow;

            Ext.each(existingWindows, function (w) {
                rec = w.getViewModel().get('currentRecord');
                if (rec.getId() == recId) {
                    recordWindow = w;
                    return false;
                }
            });

            if (recordWindow) {
                // if the window is minimised make sure it is restored
                if (recordWindow.isMinimized) {
                    recordWindow.show();
                }
                Ext.WindowManager.bringToFront(recordWindow);
            } else {
                // load the record into a new window
                grid.mask('Loading Record...');
                modelPrototype.load(recId, {
                    success: function (rec) {
                        var win = Ext.create(associatedEditWindow);
                        var vm = win.getViewModel();
                        vm.set('currentRecord', rec);
                        win.show();
                    },
                    callback: function () {
                        grid.unmask();
                    },
                    scope: this
                });
            }
        }
    },
    /**
     * Enable and disable paging for the grid.
     * Disabling paging allows all records to be loaded into the
     * grid for an Excel export. Enabling paging improves load
     * performance.
     *
     * @private
     */
    togglePaging: function (checkBox, checked) {

        var me = this;
        var grid = me.getView();

        var pagingToolbar = grid.down('gx_wfspaging_toolbar');
        pagingToolbar.setDisabled(!checked);

        var store = grid.getStore();

        // save the initial store parameters
        if (!me.originalPageSize) {
            me.originalPageSize = store.pageSize;
        }

        var originalHeight = grid.getHeight();

        if (checked) {
            store.pageSize = me.originalPageSize;
            store.startIndex = 0; // reset each time // me.startIndex;
        } else {
            store.pageSize = null;
            store.currentPage = 1;
            store.startIndex = 0;
            // avoid the grid resizing to fill up the whole screen
            // set it to the height before paging was deactivated
            grid.setHeight(originalHeight);
        }

        store.loadWfs();
    },

    /**
     * Export the current records in the grid to Excel
     *
     * @private
     */
    exportToExcel: function () {

        var me = this;
        var grid = me.getView();

        if (!grid.saveDocumentAs) {
            Ext.Msg.alert('Not Supported',
                'The Excel export is not supported in this version of the system', Ext.emptyFn);
            return;
        }

        var originalMsg = grid.loadMask.msg;
        grid.setLoading('Exporting to Excel...');

        // later in an event listeners
        grid.saveDocumentAs({
            type: 'xlsx',
            title: grid.exportTitle,
            fileName: grid.exportFileName
        }).then(function () {
            grid.setLoading(false);
            grid.loadMask.msg = originalMsg;
        });
    },

    /**
     * Whenever columns are shown or hidden update
     * the WFS propertyName so only data to
     * be displayed is returned. The idProperty will
     * always be returned even if the column is hidden.
     */
    getVisibleColumns: function () {

        var me = this;
        var grid = me.getView();
        var store = grid.getStore();

        var visibleColumnNames, idProperty;

        if (!store.isEmptyStore) {
            visibleColumnNames = Ext.Array.pluck(grid.getVisibleColumns(), 'dataIndex');
            idProperty = store.model.prototype.idField.name;

            // add the idProperty as the first item in the list
            // if not already in list
            if (visibleColumnNames.indexOf(idProperty) === -1) {
                visibleColumnNames.unshift(idProperty);
            }
            // remove any null columns which may have been created by
            // selection checkboxes for example
            visibleColumnNames = Ext.Array.clean(visibleColumnNames);
            store.propertyName = visibleColumnNames.join(',');
        }
    },

    onColumnHide: function () {
        this.getVisibleColumns();
    },

    onColumnsReconfigure: function () {
        this.getVisibleColumns();
    },

    onColumnShow: function (ct, column) {

        var me = this;
        var grid = me.getView();
        var store = grid.getStore();

        me.getVisibleColumns();
        var idProperty = store.model.prototype.idField.name;

        if (column.dataIndex !== idProperty) {
            // when a new column is displayed
            // query the server again to retrieve the data
            // idProperty will always be loaded so no need to reload in this case
            store.reload();
        }
    },

    /**
     * Hide and show the map layer with the grid
     * Although the layer has no styling we need to hide
     * any selections which are visible
     */
    toggleLayerVisibility: function (show) {

        var me = this;
        var grid = me.getView();
        var store = grid.getStore();

        var layer = me.getOlLayer();
        if (store.isEmptyStore !== true && layer) {
            layer.setVisible(show);
        }
    },

    /**
     * Returns the layer of the grid.
     *
     * @returns {ol.layer.Base} The grid's layer
     */
    getOlLayer: function() {
        var me = this;
        var viewModel = me.getViewModel();
        var wmsLayerKey = viewModel.get('wmsLayerKey');
        var vectorLayerKey = viewModel.get('vectorLayerKey');
        var layer;
        if (wmsLayerKey) {
            layer = me.getLayerByKey(wmsLayerKey);
        } else if (vectorLayerKey) {
            layer = me.getLayerByKey(vectorLayerKey);
        }
        return layer;
    },

    /**
     * Template method for Ext.Component that
     * can be overridden
     */
    onShow: function () {
        this.toggleLayerVisibility(true);
    },

    /**
     * Clear any sorters on the store
     */
    onClearSort: function () {
        var me = this;
        var grid = me.getView();
        var store = grid.getStore();
        store.getSorters().clear();
        store.reload();
    },

    /**
     * Clear both the grid filters and any spatial filter.
     * This will cause the store to reload.
     *
     * @private
     */
    clearFilters: function () {
        var me = this;
        var view = me.getView();
        me.spatialFilter = null;
        me.idFilter = null;
        view.getPlugin('gridfilters').clearFilters();

        var spatialQueryButton = view.down('cmv_spatial_query_button');
        if (spatialQueryButton !== null) {
            spatialQueryButton.fireEvent('clearAssociatedPermanentLayer');
            spatialQueryButton.toggle(false);
        }
        var featureSelectionButton = view.down('cmv_feature_selection_button');
        if (featureSelectionButton !== null) {
            featureSelectionButton.toggle(false);
        }

        view.fireEvent('cmv-clear-filters');
    },

    /**
     * Resets all filters without reloading the store.
     * In case a direct reload of the store is needed use #clearFilters.
     */
    resetFilters: function () {
        var me = this;
        var grid = me.getView();
        var store = grid.getStore();

        // instead of grid.clearFilters() it does not force a reload
        store.filters.clear();
        me.spatialFilter = null;
        me.idFilter = null;
    },

    /**
     * If any models associated with the grid are edited
     * (for example in a child form) then automatically update
     * the grid and associated layers
     *
     * @private
     */
    addChildModelListener: function () {

        var me = this;
        var vm = me.getViewModel();
        var associatedEditModel = vm.get('associatedEditModel');

        if (associatedEditModel) {
            var modelPrototype = Ext.ClassManager.get(associatedEditModel);
            Ext.util.Observable.observe(modelPrototype, {
                modelsaved: function () {
                    var grid = me.getView();
                    var store = grid.getStore();
                    store.loadWfs();
                    me.updateAssociatedLayers();
                }
            });
        }
    },

    /**
     * @private
     */
    initViewModel: function (viewModel) {
        var me = this;

        me.applyStoreToGrid(viewModel);
        me.activatePresetFilterButton(viewModel);
    },

    /**
     * Dynamically apply a store to the grid based on the gridStoreType
     * config option. Also set the hidden grid vector layer to be associated
     * with the cmv_spatial_query_button
     *
     * @param {Ext.app.ViewModel } viewModel The ViewModel
     */
    applyStoreToGrid: function (viewModel) {
        var me = this;

        me.addChildModelListener();

        var gridStoreType = viewModel.get('gridStoreType');
        var layerName = viewModel.get('gridLayerName');
        var vectorLayerKey = viewModel.get('vectorLayerKey');

        // TODO check why we can't simply add a {'queryLayerName'} binding in
        // the grid view - already created ?
        var spatialQueryButton = viewModel.getView().down('cmv_spatial_query_button');
        spatialQueryButton.setQueryLayerName(layerName);
        spatialQueryButton.setVectorLayerKey(layerName); // this name will have _spatialfilter appended to it

        var featureSelectionButton = viewModel.getView().down('cmv_feature_selection_button');
        featureSelectionButton.setVectorLayerKey(vectorLayerKey);

        // dynamically create the store based on the config setting

        var stores = {
            gridstore: {
                type: gridStoreType,
                map: '{map}',
                createLayer: true,
                style: null, // hide WFS features unless selected - they are visible as part of the WMS
                listeners: {
                    'gx-wfsstoreload-beforeload': 'onWfsStoreBeforeLoad',
                    'gx-wfsstoreload': 'onWfsStoreAfterLoad'
                }
            }
        };

        viewModel.setStores(stores);
    },

    /**
     * Activated the "preset filter" button if the layer
     * has the respective properties.
     *
     * @param {Ext.app.ViewModel } viewModel The ViewModel
     */
    activatePresetFilterButton: function (viewModel) {
        var me = this;

        // check if layer has preset grid Filters
        // if yes, we activate the respective button
        var layer = me.getOlLayer();
        if (layer && layer.get('gridFilters')) {
            viewModel.set('usePresetFilters', true);
        }
    },

    /**
     * Applies preset filters from the configuration
     * to the grid.
     */
    applyPresetFilters: function () {
        var me = this;

        var layer = me.getOlLayer();
        var gridFilters = layer.get('gridFilters');

        if (!gridFilters || !Ext.isArray(gridFilters)) {
            return;
        }

        var grid = me.getView();
        if (!grid) {
            return;
        }

        var columnManager = grid.getColumnManager();
        if (!columnManager) {
            return;
        }

        // loop through all provided preset filter definitions
        Ext.each(gridFilters, function (filterDef) {
            if (!filterDef || !Ext.isObject(filterDef)) {
                return;
            }

            var columnName = filterDef.property;
            var value = filterDef.value;
            var operator = filterDef.operator;

            if (!columnName || !value || !operator) {
                Ext.log.warn('Preset filter is not properly defined.');
                Ext.log.warn(filterDef);
                return;
            }

            var column = columnManager.getHeaderByDataIndex(columnName);
            if (!column || !column.filter || !column.filter.type) {
                return;
            }
            var columnType = column.filter.type;

            switch (columnType) {
                case 'string':
                    // only equal is supported for string
                    if (operator !== '=') {
                        Ext.log.warn('No valid operator provided.');
                        return;
                    }
                    column.filter.setValue(value);
                    break;
                case 'number':
                    var filterValue = me.createNumberFilterValue(
                        operator,
                        value
                    );
                    if (!filterValue) {
                        return;
                    }

                    column.filter.setValue(filterValue);
                    break;
                case 'list':
                    // we need to apply the initial config again,
                    // because otherwise the store with the list-choices
                    // gets lost
                    var newFilter = Ext.clone(column.initialConfig.filter);

                    if (operator != 'in'){
                        Ext.log.warn('No valid operator provided.');
                        return;
                    }

                    // now we apply the oparator and the value
                    newFilter.operator = operator;
                    newFilter.value = value;

                    var plugin = grid.getPlugin('gridfilters');
                    plugin.addFilter(newFilter);
                    break;
                default:
                    break;
            }
        }

        );
    },

    /**
     * Create a value object needed for number filters.
     *
     * @param {string} operator The userdefined operator. Allowed values: '=', '<' and '>'
     * @param {number} value The numerical value to compare
     * @returns {Object} The value object for the filter
     */
    createNumberFilterValue: function(operator, value){
        // translate user defined operators into operators
        // that are compatible with number filters
        var operatorMapping = {
            '=': 'eq',
            '>': 'gt',
            '<': 'lt'
        };
        var filterOperator = operatorMapping[operator];
        if (!filterOperator) {
            Ext.log.warn('No valid operator provided.');
            return;
        }

        // the value for number filters are objects like '{eq: 42}'
        // we need to create them from the original value and the operator
        var filterValue = {};
        filterValue[filterOperator] = value;
        return filterValue;
    }
});
