/* start module: index */
$pyjs['loaded_modules']['index'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['index']['__was_initialized__']) return $pyjs['loaded_modules']['index'];
	var $m = $pyjs['loaded_modules']['index'];
	$m['__repr__'] = function() { return '<module: index>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'index';
	$m['__name__'] = __mod_name__;


	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['StyleSheetCssFile'] = $p['___import___']('pyjamas.ui.CSS.StyleSheetCssFile', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['I2CPanel'] = $p['___import___']('I2CPanel.I2CPanel', null, null, false);
	$m['OccupancyCheckPanel'] = $p['___import___']('OccupancyCheckPanel.OccupancyCheckPanel', null, null, false);
	$m['SCurveRunPanel'] = $p['___import___']('SCurveRunPanel.SCurveRunPanel', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['Client'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'index';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var selectionPanel;
			$m['StyleSheetCssFile']('styleSheet.css');
			self['TEXT_WAITING'] = 'Waiting for response...';
			self['TEXT_ERROR'] = 'Server Error';
			self['status'] = $m['Label']();
			self['remote_server'] = (typeof GlibControlService == "undefined"?$m['GlibControlService']:GlibControlService)();
			self['I2CPanel'] = $m['I2CPanel']($p['getattr'](self, 'remote_server'));
			self['SCurveRunPanel'] = $m['SCurveRunPanel']($p['getattr'](self, 'remote_server'));
			self['OccupancyCheckPanel'] = $m['OccupancyCheckPanel']($p['getattr'](self, 'remote_server'));
			self['mainPanel'] = $m['DockPanel']();
			self['mainPanel']['add']($pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'titleStyle'}, 'CBC Test Stand (v1.1)']), $p['getattr']($m['DockPanel'], 'NORTH'));
			selectionPanel = $m['VerticalPanel']();
			self['activePanelButton'] = null;
			self['activePanel'] = null;
			self['registersButton'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'areaStyle'}, 'I2C Registers']);
			self['occupanciesButton'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'areaStyle'}, 'Test Occupancies']);
			self['scurveButton'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'areaStyle'}, 'S-Curve Run']);
			self['registersButton']['addClickListener'](self);
			self['scurveButton']['addClickListener'](self);
			self['occupanciesButton']['addClickListener'](self);
			selectionPanel['add']($p['getattr'](self, 'registersButton'));
			selectionPanel['add']($p['getattr'](self, 'occupanciesButton'));
			selectionPanel['add']($p['getattr'](self, 'scurveButton'));
			self['mainPanel']['add'](selectionPanel, $p['getattr']($m['DockPanel'], 'WEST'));
			self['mainPanel']['add']($p['getattr'](self, 'status'), $p['getattr']($m['DockPanel'], 'SOUTH'));
			$m['RootPanel']()['add']($p['getattr'](self, 'mainPanel'));
			self['setNewMainPanel']($p['getattr'](self, 'registersButton'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add5,$add2,$add3,$pyjs_try_err,$add6,$add7,$add4,error,$add8,$add1;
			try {
				self['setNewMainPanel'](sender);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					error = $pyjs_try_err;
					self['status']['setText']($p['__op_add']($add7=$p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1="Client exception was thrown: '",$add2=$p['str']($p['getattr'](error, '__class__'))),$add4="'='"),$add6=$p['str'](error)),$add8="'"));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('setNewMainPanel', function(panelButton) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panelButton = arguments[1];
			}

			if ($p['bool']($p['op_eq'](panelButton, $p['getattr'](self, 'activePanelButton')))) {
				return null;
			}
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'activePanelButton'), null))) {
				self['activePanelButton']['setStyleName']('areaStyle');
			}
			self['activePanelButton'] = panelButton;
			self['activePanelButton']['setStyleName']('selectedAreaStyle');
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'activePanel'), null))) {
				self['mainPanel']['remove'](self['activePanel']['getPanel']());
			}
			if ($p['bool']($p['op_eq'](panelButton, $p['getattr'](self, 'registersButton')))) {
				self['activePanel'] = $p['getattr'](self, 'I2CPanel');
			}
			else if ($p['bool']($p['op_eq'](panelButton, $p['getattr'](self, 'scurveButton')))) {
				self['activePanel'] = $p['getattr'](self, 'SCurveRunPanel');
			}
			else if ($p['bool']($p['op_eq'](panelButton, $p['getattr'](self, 'occupanciesButton')))) {
				self['activePanel'] = $p['getattr'](self, 'OccupancyCheckPanel');
			}
			self['activePanel']['getPanel']()['setStyleName']('selectedAreaStyle');
			self['mainPanel']['add'](self['activePanel']['getPanel'](), $p['getattr']($m['DockPanel'], 'CENTER'));
			return null;
		}
	, 1, [null,null,['self'],['panelButton']]);
		$cls_definition['setNewMainPanel'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			self['status']['setText'](response);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, message, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				message = arguments[2];
				request_info = arguments[3];
			}

			$m['ErrorMessage']('Unable to contact server');
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Client', $p['tuple']($bases), $data);
	})();
	$m['GlibControlService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'index';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/GlibControlProxy.py', $p['list'](['getStates', 'connectedCBCNames', 'I2CRegisterValues', 'setI2CRegisterValues', 'saveStateValues', 'loadStateValues', 'startProcesses', 'killProcesses', 'boardIsReachable', 'stopTakingData', 'startSCurveRun', 'getDataTakingStatus']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GlibControlService', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['app'] = $m['Client']();
		$m['app']['onModuleLoad']();
	}
	return this;
}; /* end index */


/* end module: index */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.CSS.StyleSheetCssFile', 'pyjamas.ui.CSS', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'I2CPanel.I2CPanel', 'I2CPanel', 'OccupancyCheckPanel.OccupancyCheckPanel', 'OccupancyCheckPanel', 'SCurveRunPanel.SCurveRunPanel', 'SCurveRunPanel', 'ErrorMessage.ErrorMessage', 'ErrorMessage']
*/
