/**
 * Panel with filtering tools for the layer tree.
 *
 * @class CpsiMapview.view.from.LayerTreeFilter
 */
Ext.define('CpsiMapview.view.form.LayerTreeFilter', {
    extend: 'Ext.form.FieldSet',

    xtype: 'cmv_layertreefilter',

    requires: [
        'CpsiMapview.controller.form.LayerTreeFilter'
    ],

    controller: 'cmv_layertreefilter',

    config: {
        /**
         * If baselayers shall be filtered by text filter.
         */
        doFilterBaseLayers: true
    },

    /**
     * The ID of the filter created by the text field.
     */
    TEXT_FILTER_ID: 'cpsi-tree-layer-text-filter',

    /**
     * The ID of the filter created by the checkbox.
     */
    VISIBLE_LAYER_FILTER_ID: 'cpsi-tree-visible-layer-filter',

    /**
     * The ID of the filter to hide empty groups.
     */
    HIDE_EMPTY_GROUPS_FILTER_ID: 'cpsi-tree-hide-empty-groups',

    items: [{
        xtype: 'textfield',
        emptyText: 'Search for layers',
        hideTrigger: true,
        anchor: '100%',
        maxWidth: 250,
        triggers: {
            clearTreeFilterText: {
                cls: 'x-form-clear-trigger',
                handler: 'clearText'
            }
        },
        listeners: {
            change: 'onSearch'
        }
    },
    {
        xtype: 'checkboxfield',
        boxLabel: 'Show Visible',
        listeners: {
            change: 'filterVisibleLayers'
        }
    }],

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        var mapPanel = CpsiMapview.view.main.Map.guess();

        mapPanel.on('cmv-init-layersadded', function () {
            var tree = Ext.ComponentQuery.query('cmv_layertree')[0];
            if (!tree) {
                return;
            }

            tree.on('cmv-init-layertree', function() {
                var store = tree.getStore();
                if (!store) {
                    return;
                }
                var emptyGroupFilter = Ext.util.Filter({
                    id: me.HIDE_EMPTY_GROUPS_FILTER_ID,
                    filterFn: function (node) {
                        if (node.hasChildNodes()) {
                            var keep = false;
                            node.cascade(function (cascadeNode) {
                                // search for any descending node that is checked
                                if (!cascadeNode.hasChildNodes() && cascadeNode.get('checked')) {
                                    keep = true;
                                }
                            });
                            return keep;
                        } else {
                            return true;
                        }
                    }
                });

                store.addFilter(emptyGroupFilter);
            });
        });
    }
});
