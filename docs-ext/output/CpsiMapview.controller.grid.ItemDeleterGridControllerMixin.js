Ext.data.JsonP.CpsiMapview_controller_grid_ItemDeleterGridControllerMixin({"tagname":"class","name":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ItemDeleterGridControllerMixin.js","href":"ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Mixin","mixins":[],"requires":[],"uses":[],"members":[{"name":"beforeDelete","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-beforeDelete","meta":{"private":true}},{"name":"onDeleteRowClick","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onDeleteRowClick","meta":{"private":true}},{"name":"onRowDelete","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onRowDelete","meta":{}},{"name":"onRowDeleteCallback","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onRowDeleteCallback","meta":{"private":true}},{"name":"onRowDeleteCancelled","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onRowDeleteCancelled","meta":{}},{"name":"onRowDeleteFail","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onRowDeleteFail","meta":{"private":true}},{"name":"onRowDeleteSuccess","tagname":"method","owner":"CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","id":"method-onRowDeleteSuccess","meta":{"private":true}}],"code_type":"ext_define","id":"class-CpsiMapview.controller.grid.ItemDeleterGridControllerMixin","short_doc":"To be mixed in to the controller of a grid which uses ItemDeleter\n Can be provided with the following custom handlers...","component":false,"superclasses":["Ext.Mixin"],"subclasses":[],"mixedInto":["CpsiMapview.view.fileupload.FileGridController"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Mixin<div class='subclass '><strong>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/CpsiMapview.view.fileupload.FileGridController' rel='CpsiMapview.view.fileupload.FileGridController' class='docClass'>CpsiMapview.view.fileupload.FileGridController</a></div><h4>Files</h4><div class='dependency'><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin' target='_blank'>ItemDeleterGridControllerMixin.js</a></div></pre><div class='doc-contents'><p>To be mixed in to the controller of a grid which uses ItemDeleter\n Can be provided with the following custom handlers</p>\n\n<ul>\n<li><p>beforeDelete          => if returns \"false\" deletion is aborted, runs BEFORE the user is asked for confirmation</p></li>\n<li><p>onRowDelete           => the actual deletion implementation, if the user confirms</p></li>\n<li>onRowDeleteCancelled  => in case we want to do something when the user doesn't confirm or beforeDelete returns false</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-beforeDelete' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-beforeDelete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-beforeDelete' class='name expandable'>beforeDelete</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onDeleteRowClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onDeleteRowClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onDeleteRowClick' class='name expandable'>onDeleteRowClick</a>( <span class='pre'>tableView, rowIndex, colIndex, item, e, record, tableRow</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tableView</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>colIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>tableRow</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onRowDelete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onRowDelete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onRowDelete' class='name expandable'>onRowDelete</a>( <span class='pre'>tableView, rowIndex, colIndex, item, e, record</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function to run when a user selects to delete a row. ...</div><div class='long'><p>Function to run when a user selects to delete a row. Override this as required.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tableView</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>colIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onRowDeleteCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onRowDeleteCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onRowDeleteCallback' class='name expandable'>onRowDeleteCallback</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onRowDeleteCancelled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onRowDeleteCancelled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onRowDeleteCancelled' class='name expandable'>onRowDeleteCancelled</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function to run when delete is cancelled by the user or by business logic. ...</div><div class='long'><p>Function to run when delete is cancelled by the user or by business logic. Override this as required.</p>\n</div></div></div><div id='method-onRowDeleteFail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onRowDeleteFail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onRowDeleteFail' class='name expandable'>onRowDeleteFail</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onRowDeleteSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.grid.ItemDeleterGridControllerMixin'>CpsiMapview.controller.grid.ItemDeleterGridControllerMixin</span><br/><a href='source/ItemDeleterGridControllerMixin.html#CpsiMapview-controller-grid-ItemDeleterGridControllerMixin-method-onRowDeleteSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.grid.ItemDeleterGridControllerMixin-method-onRowDeleteSuccess' class='name expandable'>onRowDeleteSuccess</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});