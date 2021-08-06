Ext.define('CpsiMapview.controller.addWms.AddWmsFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cmv_add_wms_form',

    onWmsAdd: function (olLayer) {
        var me = this;
        var map = BasiGX.util.Map.getMapComponent().getMap();

        if (me.layerGroup === undefined) {

            // create a new layer group to hold the external layers
            me.layerGroup = new ol.layer.Group({
                name: me.getView().layerGroupName,
                collapsed: false
            });

            // add the external group layer to the layerTreeRoot
            // so it appears in the layer tree
            var layerTreeRoot = map.get('layerTreeRoot');
            layerTreeRoot.getLayers().push(me.layerGroup);

            setTimeout(function () {
                var layerTrees = Ext.ComponentQuery.query('cmv_layertree');
                layerTrees.forEach(function (layerTree) {
                    var node = layerTree.getNodeForLayer(me.layerGroup);
                    node.expand();
                });
            }, 0);
        }

        olLayer.set('refreshLayerOption', true);
        olLayer.set('opacitySlider', true);

        // now add the external layer to the external layers group
        map.removeLayer(olLayer);
        me.layerGroup.getLayers().push(olLayer);
    }
});
