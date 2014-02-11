/* start module: CalibrateChannelTrimsPanel */
$pyjs['loaded_modules']['CalibrateChannelTrimsPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['CalibrateChannelTrimsPanel']['__was_initialized__']) return $pyjs['loaded_modules']['CalibrateChannelTrimsPanel'];
	var $m = $pyjs['loaded_modules']['CalibrateChannelTrimsPanel'];
	$m['__repr__'] = function() { return '<module: CalibrateChannelTrimsPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CalibrateChannelTrimsPanel';
	$m['__name__'] = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['DataRunManager'] = $p['___import___']('DataRunManager.DataRunManager', null, null, false);
	$m['CalibrateChannelTrimsView'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'CalibrateChannelTrimsPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var numberOfLoopsPanel,aimPointPanel;
			numberOfLoopsPanel = $m['HorizontalPanel']();
			numberOfLoopsPanel['add']($m['HTML']('Maximum number of loops'));
			self['maximumNumberOfLoops'] = $m['TextBox']();
			self['maximumNumberOfLoops']['setText'](10);
			numberOfLoopsPanel['add']($p['getattr'](self, 'maximumNumberOfLoops'));
			numberOfLoopsPanel['setCellHorizontalAlignment']($p['getattr'](self, 'maximumNumberOfLoops'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_RIGHT'));
			numberOfLoopsPanel['setWidth']('100%');
			aimPointPanel = $m['HorizontalPanel']();
			aimPointPanel['add']($m['HTML']('Aim point'));
			self['aimPoint'] = $m['TextBox']();
			self['aimPoint']['setText'](127);
			aimPointPanel['add']($p['getattr'](self, 'aimPoint'));
			aimPointPanel['setCellHorizontalAlignment']($p['getattr'](self, 'aimPoint'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_RIGHT'));
			aimPointPanel['setWidth']('100%');
			self['start'] = $m['Button']('Start');
			self['echo'] = $m['HTML']('Initiating...');
			self['mainPanel'] = $m['VerticalPanel']();
			self['mainPanel']['add'](numberOfLoopsPanel);
			self['mainPanel']['add'](aimPointPanel);
			self['mainPanel']['add']($p['getattr'](self, 'start'));
			self['mainPanel']['add']($p['getattr'](self, 'echo'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getMaxNumberOfLoops', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['maximumNumberOfLoops']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxNumberOfLoops'] = $method;
		$method = $pyjs__bind_method2('getAimPoint', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['aimPoint']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAimPoint'] = $method;
		$method = $pyjs__bind_method2('getStartButton', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'start');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStartButton'] = $method;
		$method = $pyjs__bind_method2('setEchoText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['echo']['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setEchoText'] = $method;
		$method = $pyjs__bind_method2('enable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['start']['setEnabled'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['enable'] = $method;
		$method = $pyjs__bind_method2('disable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['start']['setEnabled'](false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['disable'] = $method;
		$method = $pyjs__bind_method2('getPanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'mainPanel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPanel'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CalibrateChannelTrimsView', $p['tuple']($bases), $data);
	})();
	$m['CalibrateChannelTrimsPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'CalibrateChannelTrimsPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['view'] = $m['CalibrateChannelTrimsView']();
			self['view']['getStartButton']()['addClickListener'](self);
			self['dataRunManager'] = $m['DataRunManager']['instance']();
			self['dataRunManager']['registerEventHandler'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onDataTakingEvent', function(eventCode, details) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventCode = arguments[1];
				details = arguments[2];
			}
			var $add2,$add3,$add1,$add4,$mul2,$mul1;
			if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent')))) {
				self['view']['setEchoText']('Taking data... ');
				self['view']['disable']();
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingFinishedEvent')))) {
				self['view']['setEchoText']('Data taking finished');
				self['view']['enable']();
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStatusEvent')))) {
				self['view']['setEchoText']($p['__op_add']($add3=$p['sprintf']('%3d%% - ', $p['float_int']($p['__op_add']($add1=(typeof ($mul1=details['__getitem__']('fractionComplete'))==typeof ($mul2=100) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)),$add2=0.5))),$add4=details['__getitem__']('statusString')));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventCode'],['details']]);
		$cls_definition['onDataTakingEvent'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			if ($p['bool']($p['op_eq'](sender, self['view']['getStartButton']()))) {
				$m['ErrorMessage']("I haven't coded this up yet. The python script<br>runcontrol/cbc2CalibrateChannelTrims.py works.");
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('getPanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['view']['getPanel']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPanel'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CalibrateChannelTrimsPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end CalibrateChannelTrimsPanel */


/* end module: CalibrateChannelTrimsPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HasHorizontalAlignment', 'ErrorMessage.ErrorMessage', 'ErrorMessage', 'DataRunManager.DataRunManager', 'DataRunManager']
*/
