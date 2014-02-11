/* start module: SCurveRunPanel */
$pyjs['loaded_modules']['SCurveRunPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['SCurveRunPanel']['__was_initialized__']) return $pyjs['loaded_modules']['SCurveRunPanel'];
	var $m = $pyjs['loaded_modules']['SCurveRunPanel'];
	$m['__repr__'] = function() { return '<module: SCurveRunPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SCurveRunPanel';
	$m['__name__'] = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Canvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['GlibRPCService'] = $p['___import___']('GlibRPCService.GlibRPCService', null, null, false);
	$m['DataRunManager'] = $p['___import___']('DataRunManager.DataRunManager', null, null, false);
	$m['DisplayHistogramsPanel'] = $p['___import___']('DisplayHistogramsPanel.DisplayHistogramsPanel', null, null, false);
	$m['SCurveRunPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'SCurveRunPanel';
		$cls_definition['onClickListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SCurveRunPanel';
			$method = $pyjs__bind_method2('__init__', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					panel = arguments[1];
				}

				self['_ClickPanel'] = panel;
				return null;
			}
	, 1, [null,null,['self'],['panel']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}
				var $iter1_nextval,$iter1_type,buttonName,$iter1_array,$iter1_iter,$iter1_idx;
				$iter1_iter = $p['getattr']($p['getattr'](self, '_ClickPanel'), 'controlValueEntries');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					buttonName = $iter1_nextval['$nextval'];
				}
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
			return $p['_create_class']('onClickListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['controlSCurveValueListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SCurveRunPanel';
			$method = $pyjs__bind_method2('__init__', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					panel = arguments[1];
				}

				self['_controlPanel'] = panel;
				return null;
			}
	, 1, [null,null,['self'],['panel']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}

				self['_controlPanel']['launchButton']['setEnabled'](false);
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
			return $p['_create_class']('controlSCurveValueListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['DoNothingListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SCurveRunPanel';
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}

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
				var $add2,$add1;
				$m['ErrorMessage']($p['__op_add']($add1='Unable to contact server: ',$add2=$p['str'](message)));
				return null;
			}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DoNothingListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['SaveHistogramsListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SCurveRunPanel';
			$method = $pyjs__bind_method2('__init__', function(buttonToEnable) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					buttonToEnable = arguments[1];
				}

				self['buttonToEnable'] = buttonToEnable;
				return null;
			}
	, 1, [null,null,['self'],['buttonToEnable']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}

				self['buttonToEnable']['setEnabled'](true);
				$pyjs_kwargs_call(null, $m['ErrorMessage'], null, null, [{'messageTitle':'Message'}, 'Histograms saved']);
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
				var $add3,$add4;
				self['buttonToEnable']['setEnabled'](true);
				$m['ErrorMessage']($p['__op_add']($add3='Unable to contact server: ',$add4=$p['str'](message)));
				return null;
			}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SaveHistogramsListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['DataTakingStatusListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SCurveRunPanel';
			$method = $pyjs__bind_method2('__init__', function(SCurveRunPanelInstance) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					SCurveRunPanelInstance = arguments[1];
				}

				self['parentInstance'] = SCurveRunPanelInstance;
				return null;
			}
	, 1, [null,null,['self'],['SCurveRunPanelInstance']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}

				self['parentInstance']['echo']['setText'](response['__getitem__']('statusString'));
				if ($p['bool'](($p['cmp'](response['__getitem__']('fractionComplete'), 1) == -1))) {
					self['parentInstance']['launchButton']['setEnabled'](false);
				}
				else {
					self['parentInstance']['launchButton']['setEnabled'](true);
					self['parentInstance']['echo']['setText']('No data taking');
				}
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
				var $add6,$add5;
				$m['ErrorMessage']($p['__op_add']($add5='Unable to contact server: ',$add6=$p['str'](message)));
				return null;
			}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DataTakingStatusListener', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var histogramDisplay,saveHistogramsPanel;
			self['rpcService'] = $m['GlibRPCService']['instance']();
			self['dataRunManager'] = $m['DataRunManager']['instance']();
			self['mainPanel'] = $m['VerticalPanel']();
			self['mainPanel']['setSpacing'](15);
			self['controlValueEntries'] = $p['dict']([]);
			self['mainSettings'] = $m['VerticalPanel']('Control Settings');
			self['startButton'] = $m['VerticalPanel']('Run Button');
			self['canvasPanel'] = $m['VerticalPanel']('Canvas');
			self['mainSettings']['add'](self['createControlPanel']($p['list'](['RangeLo', 'RangeHi', 'Steps'])));
			self['echo'] = $m['Label']();
			self['launchButton'] = $m['Button']('Launch Now');
			self['launchButton']['addClickListener'](self);
			self['launchButton']['setEnabled'](true);
			saveHistogramsPanel = $m['HorizontalPanel']();
			self['saveHistogramsButton'] = $m['Button']('Save histograms');
			self['saveHistogramsButton']['setEnabled'](false);
			self['saveHistogramsButton']['addClickListener'](self);
			self['saveHistogramsFilename'] = $m['TextBox']('Filename');
			self['saveHistogramsFilename']['setText']('/tmp/scurveHistograms.root');
			self['saveHistogramsFilename']['setVisibleLength'](50);
			saveHistogramsPanel['add']($p['getattr'](self, 'saveHistogramsButton'));
			saveHistogramsPanel['add']($p['getattr'](self, 'saveHistogramsFilename'));
			self['mainPanel']['add']($p['getattr'](self, 'mainSettings'));
			self['mainPanel']['add']($p['getattr'](self, 'startButton'));
			self['mainPanel']['add']($p['getattr'](self, 'launchButton'));
			self['mainPanel']['add']($p['getattr'](self, 'echo'));
			self['mainPanel']['add'](saveHistogramsPanel);
			self['mainPanel']['add']($m['Label']('Note that the histograms are fitted before saving, so this can take a non-negligible amount of time'));
			histogramDisplay = $m['DisplayHistogramsPanel']();
			self['mainPanel']['add']($m['HTML']('<br><b>Results:</b> (note that selecting a lot of channels can take a very long time)'));
			self['mainPanel']['add'](histogramDisplay['getPanel']());
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
			var $add10,$add7,$add8,$add9,$mul2,$mul1;
			if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent')))) {
				self['echo']['setText']('Taking data... ');
				self['launchButton']['setEnabled'](false);
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingFinishedEvent')))) {
				self['echo']['setText']('Data taking finished');
				self['launchButton']['setEnabled'](true);
				self['saveHistogramsButton']['setEnabled'](true);
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStatusEvent')))) {
				self['echo']['setText']($p['__op_add']($add9=$p['sprintf']('%3d%% - ', $p['float_int']($p['__op_add']($add7=(typeof ($mul1=details['__getitem__']('fractionComplete'))==typeof ($mul2=100) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)),$add8=0.5))),$add10=details['__getitem__']('statusString')));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventCode'],['details']]);
		$cls_definition['onDataTakingEvent'] = $method;
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var stepSize,rangeLow,rangeHigh;
			self['msg'] = $p['dict']([['RangeLo', 50], ['RangeHi', 150], ['Steps', 1], ['FileName', 'test.png']]);
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'launchButton')))) {
				self['echo']['setText']('Initiating run');
				rangeHigh = $p['float_int'](self['rangeHighBox']['getText']());
				rangeLow = $p['float_int'](self['rangeLowBox']['getText']());
				stepSize = $p['float_int'](self['stepSizeBox']['getText']());
				self['dataRunManager']['startSCurveRun']($p['range'](rangeLow, rangeHigh, stepSize));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'saveHistogramsButton')))) {
				self['saveHistogramsButton']['setEnabled'](false);
				self['rpcService']['saveHistograms'](self['saveHistogramsFilename']['getText'](), $m['SCurveRunPanel']['SaveHistogramsListener']($p['getattr'](self, 'saveHistogramsButton')));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('updateStatus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rpcService']['getDataTakingStatus'](null, $m['SCurveRunPanel']['DataTakingStatusListener'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateStatus'] = $method;
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
		$method = $pyjs__bind_method2('createControlPanel', function(controlNames) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				controlNames = arguments[1];
			}
			var newTextBox,maxWidth,$iter3_type,$iter4_type,$iter4_iter,buttonName,$iter3_idx,$iter2_iter,$$label,$iter3_iter,flowPanel,$iter2_type,$iter2_idx,$iter3_array,$mul6,$mul5,$mul4,$mul3,$iter2_nextval,$iter4_nextval,newPanel,$iter4_idx,newLabels,$iter4_array,$iter3_nextval,$iter2_array;
			flowPanel = $m['FlowPanel']();
			newLabels = $p['list']([]);
			$iter2_iter = controlNames;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				buttonName = $iter2_nextval['$nextval'];
				newPanel = $m['HorizontalPanel']();
				newLabels['append']($m['Label'](buttonName));
				newPanel['add'](newLabels['__getitem__']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))));
				newTextBox = $m['TextBox']();
				newTextBox['setEnabled'](true);
				newTextBox['setWidth'](80);
				newPanel['add'](newTextBox);
				if ($p['bool']($p['op_eq'](buttonName, 'RangeLo'))) {
					newTextBox['setText']('100');
					self['rangeLowBox'] = newTextBox;
				}
				else if ($p['bool']($p['op_eq'](buttonName, 'RangeHi'))) {
					newTextBox['setText']('150');
					self['rangeHighBox'] = newTextBox;
				}
				else if ($p['bool']($p['op_eq'](buttonName, 'Steps'))) {
					newTextBox['setText']('1');
					self['stepSizeBox'] = newTextBox;
				}
				else if ($p['bool']($p['op_eq'](buttonName, 'FileName'))) {
					newTextBox['setText']('TestRun.png');
				}
				newTextBox['setTitle'](buttonName);
				$p['getattr'](self, 'controlValueEntries')['__setitem__'](buttonName, newTextBox);
				flowPanel['add'](newPanel);
			}
			maxWidth = 0;
			$iter3_iter = newLabels;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				$$label = $iter3_nextval['$nextval'];
				if ($p['bool'](($p['cmp']((typeof ($mul3=$p['len']($$label['getText']()))==typeof ($mul4=9) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), maxWidth) == 1))) {
					maxWidth = (typeof ($mul5=$p['len']($$label['getText']()))==typeof ($mul6=9) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6));
				}
			}
			$iter4_iter = newLabels;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				$$label = $iter4_nextval['$nextval'];
				$$label['setWidth'](maxWidth);
			}
			return flowPanel;
		}
	, 1, [null,null,['self'],['controlNames']]);
		$cls_definition['createControlPanel'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SCurveRunPanel', $p['tuple']($bases), $data);
	})();
	$m['GraphCanvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'SCurveRunPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvas'] = $m['Canvas'](self, 500, 500, 500, 500);
			self['canvasName'] = 'S Curve';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(imagesHandles) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagesHandles = arguments[1];
			}

			self['draw']();
			return null;
		}
	, 1, [null,null,['self'],['imagesHandles']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('onError', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onError'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GraphCanvas', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SCurveRunPanel */


/* end module: SCurveRunPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'ErrorMessage.ErrorMessage', 'ErrorMessage', 'GlibRPCService.GlibRPCService', 'GlibRPCService', 'DataRunManager.DataRunManager', 'DataRunManager', 'DisplayHistogramsPanel.DisplayHistogramsPanel', 'DisplayHistogramsPanel']
*/
