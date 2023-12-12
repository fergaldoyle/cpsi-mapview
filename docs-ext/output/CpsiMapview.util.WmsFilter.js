Ext.data.JsonP.CpsiMapview_util_WmsFilter({"tagname":"class","name":"CpsiMapview.util.WmsFilter","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"WmsFilter.js","href":"WmsFilter.html#CpsiMapview-util-WmsFilter"}],"aliases":{},"alternateClassNames":["WmsFilterUtil"],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"getWmsFilterString","tagname":"method","owner":"CpsiMapview.util.WmsFilter","id":"method-getWmsFilterString","meta":{}},{"name":"getWmsFilters","tagname":"method","owner":"CpsiMapview.util.WmsFilter","id":"method-getWmsFilters","meta":{}},{"name":"getWmsParams","tagname":"method","owner":"CpsiMapview.util.WmsFilter","id":"method-getWmsParams","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-CpsiMapview.util.WmsFilter","short_doc":"Util class for working with WMS filters. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>WmsFilterUtil</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>CpsiMapview.util.WmsFilter</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/WmsFilter.html#CpsiMapview-util-WmsFilter' target='_blank'>WmsFilter.js</a></div></pre><div class='doc-contents'><p>Util class for working with WMS filters.\nThese are a vendor-specific parameter for WMS supported by MapServer\nunder https://mapserver.org/development/rfc/ms-rfc-118.html\nIt also relies on https://github.com/MapServer/MapServer/pull/6139 to\ncorrectly implement duplicated layer names in a WMS request with filters</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getWmsFilterString' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.util.WmsFilter'>CpsiMapview.util.WmsFilter</span><br/><a href='source/WmsFilter.html#CpsiMapview-util-WmsFilter-method-getWmsFilterString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.util.WmsFilter-method-getWmsFilterString' class='name expandable'>getWmsFilterString</a>( <span class='pre'>wmsParams</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Executed when this menu item is clicked. ...</div><div class='long'><p>Executed when this menu item is clicked.\nForces redraw of the connected layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>wmsParams</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getWmsFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.util.WmsFilter'>CpsiMapview.util.WmsFilter</span><br/><a href='source/WmsFilter.html#CpsiMapview-util-WmsFilter-method-getWmsFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.util.WmsFilter-method-getWmsFilters' class='name expandable'>getWmsFilters</a>( <span class='pre'>wmsParams</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return an array of filter objects from a WMS Params object ...</div><div class='long'><p>Return an array of filter objects from a WMS Params object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>wmsParams</span> : any<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getWmsParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.util.WmsFilter'>CpsiMapview.util.WmsFilter</span><br/><a href='source/WmsFilter.html#CpsiMapview-util-WmsFilter-method-getWmsParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.util.WmsFilter-method-getWmsParams' class='name expandable'>getWmsParams</a>( <span class='pre'>layer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the parameters to be sent to the server as a JS object\nSupports getting parameters from WMS layers or vector tile...</div><div class='long'><p>Get the parameters to be sent to the server as a JS object\nSupports getting parameters from WMS layers or vector tile\nlayers which store WMS parameters in a URL template</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : any<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});