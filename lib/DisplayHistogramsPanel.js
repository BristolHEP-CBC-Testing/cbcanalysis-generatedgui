/* start module: DisplayHistogramsPanel */
$pyjs['loaded_modules']['DisplayHistogramsPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['DisplayHistogramsPanel']['__was_initialized__']) return $pyjs['loaded_modules']['DisplayHistogramsPanel'];
	var $m = $pyjs['loaded_modules']['DisplayHistogramsPanel'];
	$m['__repr__'] = function() { return '<module: DisplayHistogramsPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DisplayHistogramsPanel';
	$m['__name__'] = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	$m['GlibRPCService'] = $p['___import___']('GlibRPCService.GlibRPCService', null, null, false);
	$m['DataRunManager'] = $p['___import___']('DataRunManager.DataRunManager', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['DisplayHistogramsView'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'DisplayHistogramsPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$iter1_nextval,$iter1_type,controls,$iter1_iter,$iter1_array,$iter1_idx;
			self['cbcList'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'MultipleSelect':true, 'VisibleItemCount':4}]);
			self['channelList'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'MultipleSelect':true, 'VisibleItemCount':20}]);
			self['updateButton'] = $m['Button']('Update');
			controls = $m['VerticalPanel']();
			controls['add']($p['getattr'](self, 'updateButton'));
			controls['add']($p['getattr'](self, 'cbcList'));
			controls['add']($p['getattr'](self, 'channelList'));
			controls['setCellHorizontalAlignment']($p['getattr'](self, 'updateButton'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
			self['cbcList']['setWidth']('95%');
			self['channelList']['setWidth']('95%');
			self['cbcList']['addItem']('waiting...');
			$iter1_iter = $p['range'](0, 254);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				index = $iter1_nextval['$nextval'];
				self['channelList']['addItem']($p['sprintf']('Channel %3d', index));
			}
			self['histogram'] = $m['Image']();
			self['mainPanel'] = $m['HorizontalPanel']();
			self['mainPanel']['add'](controls);
			self['mainPanel']['add']($p['getattr'](self, 'histogram'));
			self['histogram']['setUrl']('defaultScurveHistogram.png');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
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
		$method = $pyjs__bind_method2('setAvailableCBCs', function(cbcNames) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cbcNames = arguments[1];
			}
			var $iter2_nextval,$iter2_type,name,$iter2_iter,$iter2_idx,$iter2_array;
			self['cbcList']['clear']();
			$iter2_iter = cbcNames;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				name = $iter2_nextval['$nextval'];
				self['cbcList']['addItem'](name);
			}
			return null;
		}
	, 1, [null,null,['self'],['cbcNames']]);
		$cls_definition['setAvailableCBCs'] = $method;
		$method = $pyjs__bind_method2('enable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['updateButton']['setEnabled'](true);
			self['cbcList']['setEnabled'](true);
			self['channelList']['setEnabled'](true);
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

			self['updateButton']['setEnabled'](false);
			self['cbcList']['setEnabled'](false);
			self['channelList']['setEnabled'](false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['disable'] = $method;
		$method = $pyjs__bind_method2('getUpdateButton', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'updateButton');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpdateButton'] = $method;
		$method = $pyjs__bind_method2('getSelectedCBCChannels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$iter3_idx,$iter4_type,$iter4_nextval,$iter3_type,$iter4_idx,selectedChannels,$iter3_iter,returnValue,$iter3_array,$iter4_array,$iter4_iter,$iter3_nextval;
			selectedChannels = $p['list']([]);
			$iter3_iter = $p['range'](self['channelList']['getItemCount']());
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				index = $iter3_nextval['$nextval'];
				if ($p['bool'](self['channelList']['isItemSelected'](index))) {
					selectedChannels['append'](index);
				}
			}
			returnValue = $p['dict']([]);
			$iter4_iter = $p['range'](self['cbcList']['getItemCount']());
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				index = $iter4_nextval['$nextval'];
				if ($p['bool'](self['cbcList']['isItemSelected'](index))) {
					returnValue['__setitem__'](self['cbcList']['getItemText'](index), selectedChannels);
				}
			}
			return returnValue;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedCBCChannels'] = $method;
		$method = $pyjs__bind_method2('setImage', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['histogram']['setUrl'](url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setImage'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DisplayHistogramsView', $p['tuple']($bases), $data);
	})();
	$m['DisplayHistogramsPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'DisplayHistogramsPanel';
		$method = $pyjs__bind_method2('__init__', function(inputRootFile, outputFile) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				inputRootFile = arguments[1];
				outputFile = arguments[2];
			}
			if (typeof inputRootFile == 'undefined') inputRootFile=arguments['callee']['__args__'][3][1];
			if (typeof outputFile == 'undefined') outputFile=arguments['callee']['__args__'][4][1];

			self['inputRootFile'] = inputRootFile;
			self['outputFile'] = outputFile;
			self['rpcService'] = $m['GlibRPCService']['instance']();
			self['view'] = $m['DisplayHistogramsView']();
			self['connectedCBCs'] = $p['list']([]);
			self['rpcService']['connectedCBCNames'](null, self);
			self['view']['getUpdateButton']()['addClickListener'](self);
			$m['DataRunManager']['instance']()['registerEventHandler'](self);
			return null;
		}
	, 1, [null,null,['self'],['inputRootFile', '/tmp/histograms.root'],['outputFile', 'scurveHistogram.png']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setInputRootFile', function(inputRootFile) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				inputRootFile = arguments[1];
			}

			self['inputRootFile'] = inputRootFile;
			return null;
		}
	, 1, [null,null,['self'],['inputRootFile']]);
		$cls_definition['setInputRootFile'] = $method;
		$method = $pyjs__bind_method2('setOutputFile', function(outputFile) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				outputFile = arguments[1];
			}

			self['outputFile'] = outputFile;
			return null;
		}
	, 1, [null,null,['self'],['outputFile']]);
		$cls_definition['setOutputFile'] = $method;
		$method = $pyjs__bind_method2('onDataTakingEvent', function(eventCode, details) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventCode = arguments[1];
				details = arguments[2];
			}

			if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent')))) {
				self['view']['disable']();
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingFinishedEvent')))) {
				self['view']['enable']();
			}
			return null;
		}
	, 1, [null,null,['self'],['eventCode'],['details']]);
		$cls_definition['onDataTakingEvent'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $add2,$add1;
			if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'connectedCBCNames'))) {
				self['_onConnectedCBCNamesResponse'](response);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'createHistogram'))) {
				self['_onCreateHistogramResponse'](response);
			}
			else {
				$m['ErrorMessage']($p['__op_add']($add1='Received an unexpected response for method ',$add2=$p['getattr'](request_info, 'method')));
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
			var $add3,$add4;
			$m['ErrorMessage']($p['__op_add']($add3='Unable to contact server: ',$add4=$p['str'](message)));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('_onConnectedCBCNamesResponse', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

			self['connectedCBCs'] = response;
			self['view']['setAvailableCBCs'](response);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['_onConnectedCBCNamesResponse'] = $method;
		$method = $pyjs__bind_method2('_onCreateHistogramResponse', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

			self['view']['setImage']($p['getattr'](self, 'outputFile'));
			self['view']['enable']();
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['_onCreateHistogramResponse'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var error,$pyjs_try_err,$add6,$add5;
			try {
				if ($p['bool']($p['op_eq'](sender, self['view']['getUpdateButton']()))) {
					self['updateHistogram']();
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					error = $pyjs_try_err;
					$m['ErrorMessage']($p['__op_add']($add5='Client error: ',$add6=$p['str'](error)));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('updateHistogram', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter6_idx,parameters,$iter6_type,$iter5_array,$pyjs_try_err,cbcName,$iter6_array,totalChannels,$add7,$iter5_idx,selectedChannels,$iter5_type,$add8,$iter5_iter,$iter6_iter,$iter6_nextval;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'inputRootFile'), null))) {
				$m['ErrorMessage']('The source root file has not been set');
				return null;
			}
			selectedChannels = self['view']['getSelectedCBCChannels']();
			totalChannels = 0;
			$iter5_iter = selectedChannels['keys']();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				cbcName = $iter5_nextval['$nextval'];
				totalChannels = $p['__op_add']($add7=totalChannels,$add8=$p['len'](selectedChannels['__getitem__'](cbcName)));
			}
			if ($p['bool']($p['op_eq'](totalChannels, 0))) {
				$m['ErrorMessage']('No channels are selected. Select some channels.');
				return null;
			}
			parameters = $p['dict']([]);
			parameters['__setitem__']('inputFilename', $p['getattr'](self, 'inputRootFile'));
			parameters['__setitem__']('outputFilename', $p['getattr'](self, 'outputFile'));
			parameters['__setitem__']('cbcChannelRange', $p['list']([]));
			$iter6_iter = $p['getattr'](self, 'connectedCBCs');
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				cbcName = $iter6_nextval['$nextval'];
				try {
					parameters['__getitem__']('cbcChannelRange')['append'](selectedChannels['__getitem__'](cbcName));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						parameters['__getitem__']('cbcChannelRange')['append']($p['list']([]));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			self['view']['disable']();
			self['rpcService']['createHistogram'](parameters, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateHistogram'] = $method;
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
		return $p['_create_class']('DisplayHistogramsPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DisplayHistogramsPanel */


/* end module: DisplayHistogramsPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HasHorizontalAlignment', 'GlibRPCService.GlibRPCService', 'GlibRPCService', 'DataRunManager.DataRunManager', 'DataRunManager', 'ErrorMessage.ErrorMessage', 'ErrorMessage']
*/
