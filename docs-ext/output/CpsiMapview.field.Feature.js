Ext.data.JsonP.CpsiMapview_field_Feature({"tagname":"class","name":"CpsiMapview.field.Feature","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Feature.js","href":"Feature.html#CpsiMapview-field-Feature"}],"aliases":{"data":["field.feature"]},"alternateClassNames":[],"extends":"Ext.data.field.Field","mixins":[],"requires":[],"uses":[],"members":[{"name":"allowNull","tagname":"property","owner":"CpsiMapview.field.Feature","id":"property-allowNull","meta":{"private":true}},{"name":"persist","tagname":"property","owner":"CpsiMapview.field.Feature","id":"property-persist","meta":{"private":true}},{"name":"convert","tagname":"method","owner":"CpsiMapview.field.Feature","id":"method-convert","meta":{}},{"name":"createSelectStyle","tagname":"method","owner":"CpsiMapview.field.Feature","id":"method-createSelectStyle","meta":{"template":true}},{"name":"createStyle","tagname":"method","owner":"CpsiMapview.field.Feature","id":"method-createStyle","meta":{"template":true}}],"code_type":"ext_define","id":"class-CpsiMapview.field.Feature","short_doc":"A custom field for linking OpenLayers features\nThe field handles loading GeoJSON from a web service into a store asso...","component":false,"superclasses":["Ext.data.field.Field"],"subclasses":["CpsiMapview.field.Line","CpsiMapview.field.Point","CpsiMapview.field.Polygon"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.field.Field<div class='subclass '><strong>CpsiMapview.field.Feature</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/CpsiMapview.field.Line' rel='CpsiMapview.field.Line' class='docClass'>CpsiMapview.field.Line</a></div><div class='dependency'><a href='#!/api/CpsiMapview.field.Point' rel='CpsiMapview.field.Point' class='docClass'>CpsiMapview.field.Point</a></div><div class='dependency'><a href='#!/api/CpsiMapview.field.Polygon' rel='CpsiMapview.field.Polygon' class='docClass'>CpsiMapview.field.Polygon</a></div><h4>Files</h4><div class='dependency'><a href='source/Feature.html#CpsiMapview-field-Feature' target='_blank'>Feature.js</a></div></pre><div class='doc-contents'><p>A custom field for linking OpenLayers features\nThe field handles loading GeoJSON from a web service into a store associated with the field.\nThe field value itself will be set to an array of OpenLayers features.\nThe field value is set both in the convert function below, and also by\n<a href=\"#!/api/CpsiMapview.model.FeatureStoreMixin\" rel=\"CpsiMapview.model.FeatureStoreMixin\" class=\"docClass\">CpsiMapview.model.FeatureStoreMixin</a> with the <code>add</code>, <code>clear</code>, and <code>remove</code>\nlisteners on the FeatureStore. This triggers any field validation which may be\nset.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-allowNull' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.field.Feature'>CpsiMapview.field.Feature</span><br/><a href='source/Feature.html#CpsiMapview-field-Feature-property-allowNull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.field.Feature-property-allowNull' class='name expandable'>allowNull</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-persist' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.field.Feature'>CpsiMapview.field.Feature</span><br/><a href='source/Feature.html#CpsiMapview-field-Feature-property-persist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.field.Feature-property-persist' class='name expandable'>persist</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>ensure the data is sent to the server\nhttps://docs.sencha.com/extjs/6.7.0/modern/Ext.data.field.Field.html#cfg-persist ...</div><div class='long'><p>ensure the data is sent to the server\nhttps://docs.sencha.com/extjs/6.7.0/modern/Ext.data.field.Field.html#cfg-persist</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-convert' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.field.Feature'>CpsiMapview.field.Feature</span><br/><a href='source/Feature.html#CpsiMapview-field-Feature-method-convert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.field.Feature-method-convert' class='name expandable'>convert</a>( <span class='pre'>data, rec</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Load GeoJSON features into the field's feature store ...</div><div class='long'><p>Load GeoJSON features into the field's feature store</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createSelectStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.field.Feature'>CpsiMapview.field.Feature</span><br/><a href='source/Feature.html#CpsiMapview-field-Feature-method-createSelectStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.field.Feature-method-createSelectStyle' class='name expandable'>createSelectStyle</a>( <span class='pre'></span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Create a selection style for the layer associated with the feature field ...</div><div class='long'><p>Create a selection style for the layer associated with the feature field</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-createStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.field.Feature'>CpsiMapview.field.Feature</span><br/><a href='source/Feature.html#CpsiMapview-field-Feature-method-createStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.field.Feature-method-createStyle' class='name expandable'>createStyle</a>( <span class='pre'></span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Create a default style for the layer associated with the feature field ...</div><div class='long'><p>Create a default style for the layer associated with the feature field</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div></div></div></div></div>","meta":{}});