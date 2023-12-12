Ext.data.JsonP.CpsiMapview_controller_window_MinimizableWindow({"tagname":"class","name":"CpsiMapview.controller.window.MinimizableWindow","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MinimizableWindow.js","href":"MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow"}],"aliases":{"controller":["cmv_minimizable_window"]},"alternateClassNames":[],"extends":"Ext.app.ViewController","mixins":["CpsiMapview.form.HelpMixin"],"requires":[],"uses":[],"members":[{"name":"buildHelpUrl","tagname":"method","owner":"CpsiMapview.form.HelpMixin","id":"method-buildHelpUrl","meta":{"private":true}},{"name":"getMinimizeToolbar","tagname":"method","owner":"CpsiMapview.controller.window.MinimizableWindow","id":"method-getMinimizeToolbar","meta":{}},{"name":"onClose","tagname":"method","owner":"CpsiMapview.controller.window.MinimizableWindow","id":"method-onClose","meta":{}},{"name":"onHelp","tagname":"method","owner":"CpsiMapview.form.HelpMixin","id":"method-onHelp","meta":{}},{"name":"onHide","tagname":"method","owner":"CpsiMapview.controller.window.MinimizableWindow","id":"method-onHide","meta":{}},{"name":"onMinimize","tagname":"method","owner":"CpsiMapview.controller.window.MinimizableWindow","id":"method-onMinimize","meta":{}},{"name":"onShow","tagname":"method","owner":"CpsiMapview.controller.window.MinimizableWindow","id":"method-onShow","meta":{}}],"code_type":"ext_define","id":"class-CpsiMapview.controller.window.MinimizableWindow","component":false,"superclasses":["Ext.app.ViewController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.ViewController<div class='subclass '><strong>CpsiMapview.controller.window.MinimizableWindow</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='docClass'>CpsiMapview.form.HelpMixin</a></div><h4>Files</h4><div class='dependency'><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow' target='_blank'>MinimizableWindow.js</a></div></pre><div class='doc-contents'><p>This class is the controller for the MinimizableWindow.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildHelpUrl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='defined-in docClass'>CpsiMapview.form.HelpMixin</a><br/><a href='source/HelpMixin.html#CpsiMapview-form-HelpMixin-method-buildHelpUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.form.HelpMixin-method-buildHelpUrl' class='name expandable'>buildHelpUrl</a>( <span class='pre'>helpUrl, rootUrl</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Build a URL based on root and page fragments ...</div><div class='long'><p>Build a URL based on root and page fragments</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>helpUrl</span> : String<div class='sub-desc'><p>A full URL or a relative link within the documentation</p>\n</div></li><li><span class='pre'>rootUrl</span> : String<div class='sub-desc'><p>A root/base URL for the documentation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Full URL to the help page</p>\n</div></li></ul></div></div></div><div id='method-getMinimizeToolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.window.MinimizableWindow'>CpsiMapview.controller.window.MinimizableWindow</span><br/><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow-method-getMinimizeToolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.window.MinimizableWindow-method-getMinimizeToolbar' class='name expandable'>getMinimizeToolbar</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Helper function to get the right MinimizedWindows toolbar. ...</div><div class='long'><p>Helper function to get the right MinimizedWindows toolbar.\nIf defined, returns me.getView().minimizeTo, else checks for\nany MinimizedWindows toolbar and returns first match. If no\ntoolbar found, returns undefined</p>\n</div></div></div><div id='method-onClose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.window.MinimizableWindow'>CpsiMapview.controller.window.MinimizableWindow</span><br/><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow-method-onClose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.window.MinimizableWindow-method-onClose' class='name expandable'>onClose</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger the windowClosed to remove any associated toolbar\nbutton if the window is closed ...</div><div class='long'><p>Trigger the windowClosed to remove any associated toolbar\nbutton if the window is closed</p>\n</div></div></div><div id='method-onHelp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='defined-in docClass'>CpsiMapview.form.HelpMixin</a><br/><a href='source/HelpMixin.html#CpsiMapview-form-HelpMixin-method-onHelp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.form.HelpMixin-method-onHelp' class='name expandable'>onHelp</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens any associated helpUrl in a new browser tab\nIf the URL does not start with 'http' then an application\nrootHelpU...</div><div class='long'><p>Opens any associated helpUrl in a new browser tab\nIf the URL does not start with 'http' then an application\nrootHelpUrl is appended to the URL if present</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Full URL to the help page*</p>\n</div></li></ul></div></div></div><div id='method-onHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.window.MinimizableWindow'>CpsiMapview.controller.window.MinimizableWindow</span><br/><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow-method-onHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.window.MinimizableWindow-method-onHide' class='name expandable'>onHide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Placeholder function for adding in a hook when the window is hidden ...</div><div class='long'><p>Placeholder function for adding in a hook when the window is hidden</p>\n</div></div></div><div id='method-onMinimize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.window.MinimizableWindow'>CpsiMapview.controller.window.MinimizableWindow</span><br/><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow-method-onMinimize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.window.MinimizableWindow-method-onMinimize' class='name expandable'>onMinimize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the window invisible and calls the addMinimizedWindow event\nof the related MinimizedWindows toolbar. ...</div><div class='long'><p>Sets the window invisible and calls the addMinimizedWindow event\nof the related MinimizedWindows toolbar.</p>\n</div></div></div><div id='method-onShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.window.MinimizableWindow'>CpsiMapview.controller.window.MinimizableWindow</span><br/><a href='source/MinimizableWindow.html#CpsiMapview-controller-window-MinimizableWindow-method-onShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.window.MinimizableWindow-method-onShow' class='name expandable'>onShow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires the restoreFromWindow event if window is currently minimized ...</div><div class='long'><p>Fires the restoreFromWindow event if window is currently minimized</p>\n</div></div></div></div></div></div></div>","meta":{}});