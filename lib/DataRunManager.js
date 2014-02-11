/* start module: DataRunManager */
$pyjs['loaded_modules']['DataRunManager'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['DataRunManager']['__was_initialized__']) return $pyjs['loaded_modules']['DataRunManager'];
	var $m = $pyjs['loaded_modules']['DataRunManager'];
	$m['__repr__'] = function() { return '<module: DataRunManager>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DataRunManager';
	$m['__name__'] = __mod_name__;


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['GlibRPCService'] = $p['___import___']('GlibRPCService.GlibRPCService', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['AlreadyTakingDataError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'DataRunManager';
		$method = $pyjs__bind_method2('__init__', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}
			if (typeof message == 'undefined') message=arguments['callee']['__args__'][3][1];
			var $add2,$add3,$add1,$add4;
			if ($p['bool']($p['op_eq'](message, null))) {
				message = '';
			}
			else {
				message = $p['__op_add']($add1=' ',$add2=message);
			}
			$p['Exception']['__init__'](self, $p['__op_add']($add3='Data taking is already in progress',$add4=message));
			return null;
		}
	, 1, [null,null,['self'],['message', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AlreadyTakingDataError', $p['tuple']($bases), $data);
	})();
	$m['DataRunManager'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'DataRunManager';
		$cls_definition['pollingTime'] = 1000;
		$cls_definition['idlePollingTime'] = 4000;
		$cls_definition['_onlyInstance'] = null;
		$cls_definition['DataTakingStartedEvent'] = 0;
		$cls_definition['DataTakingFinishedEvent'] = 1;
		$cls_definition['DataTakingStatusEvent'] = 3;
		$method = $pyjs__bind_method2('instance', function() {

			if ($p['bool']($p['op_eq']($p['getattr']($m['DataRunManager'], '_onlyInstance'), null))) {
				$m['DataRunManager']['_onlyInstance'] = $m['DataRunManager']();
			}
			return $p['getattr']($m['DataRunManager'], '_onlyInstance');
		}
	, 3, [null,null]);
		$cls_definition['instance'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr']($m['DataRunManager'], '_onlyInstance'), null))) {
				throw ($p['Exception']("DataRunManager is a singleton class. Call 'DataRunManager.instance()' to get the only running instance"));
			}
			self['rpcService'] = $m['GlibRPCService']['instance']();
			self['pollingTimer'] = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'pollRPCService')}]);
			self['eventHandlers'] = $p['list']([]);
			self['fractionComplete'] = 1;
			self['statusString'] = 'Not taking data';
			self['firstRun'] = true;
			self['pollRPCService']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $add6,$add5;
			if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'getDataTakingStatus'))) {
				self['_onGetDataTakingStatusResponse'](response);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'startSCurveRun'))) {
				self['_onStartSCurveRunResponse'](response);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'startOccupancyCheck'))) {
				self['_onStartOccupancyCheckResponse'](response);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'stopTakingData'))) {
			}
			else {
				$m['ErrorMessage']($p['__op_add']($add5='Received an unexpected response for method ',$add6=$p['getattr'](request_info, 'method')));
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
			var $add7,$add8;
			$m['ErrorMessage']($p['__op_add']($add7='Unable to contact server: ',$add8=$p['str'](message)));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('_onGetDataTakingStatusResponse', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var $iter1_idx,$iter2_nextval,$or1,statusHasChanged,eventCode,$or2,newStatus,$iter1_iter,$iter2_type,$iter2_iter,$iter2_idx,handler,$iter1_array,newFraction,$iter1_nextval,details,$iter2_array,$iter1_type;
			newFraction = response['__getitem__']('fractionComplete');
			newStatus = response['__getitem__']('statusString');
			statusHasChanged = false;
			if ($p['bool'](($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'fractionComplete'), newFraction))?$or1:!$p['op_eq']($p['getattr'](self, 'statusString'), newStatus)))) {
				statusHasChanged = true;
				if ($p['bool']($p['getattr'](self, 'firstRun'))) {
					$iter1_iter = $p['getattr'](self, 'eventHandlers');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						handler = $iter1_nextval['$nextval'];
						handler['onDataTakingEvent']($p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent'), null);
					}
				}
			}
			self['firstRun'] = false;
			self['fractionComplete'] = newFraction;
			self['statusString'] = newStatus;
			if ($p['bool'](statusHasChanged)) {
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'fractionComplete'), 1))|1) == 1))) {
					eventCode = $p['getattr']($m['DataRunManager'], 'DataTakingFinishedEvent');
					details = null;
				}
				else {
					eventCode = $p['getattr']($m['DataRunManager'], 'DataTakingStatusEvent');
					details = $p['dict']([['fractionComplete', $p['getattr'](self, 'fractionComplete')], ['statusString', $p['getattr'](self, 'statusString')]]);
				}
				$iter2_iter = $p['getattr'](self, 'eventHandlers');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					handler = $iter2_nextval['$nextval'];
					handler['onDataTakingEvent'](eventCode, details);
				}
			}
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'fractionComplete'), 1) == -1))) {
				self['pollingTimer']['schedule']($p['getattr']($m['DataRunManager'], 'pollingTime'));
			}
			else {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'idlePollingTime'), 0) == 1))) {
					self['pollingTimer']['schedule']($p['getattr']($m['DataRunManager'], 'idlePollingTime'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['_onGetDataTakingStatusResponse'] = $method;
		$method = $pyjs__bind_method2('_onStartSCurveRunResponse', function(reponse) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				reponse = arguments[1];
			}
			var $iter3_idx,$iter3_type,handler,$iter3_iter,$iter3_array,$iter3_nextval;
			self['statusString'] = 'S-curve run started';
			self['pollingTimer']['schedule']($p['getattr']($m['DataRunManager'], 'pollingTime'));
			$iter3_iter = $p['getattr'](self, 'eventHandlers');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				handler = $iter3_nextval['$nextval'];
				handler['onDataTakingEvent']($p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent'), null);
			}
			return null;
		}
	, 1, [null,null,['self'],['reponse']]);
		$cls_definition['_onStartSCurveRunResponse'] = $method;
		$method = $pyjs__bind_method2('_onStartOccupancyCheckResponse', function(reponse) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				reponse = arguments[1];
			}
			var $iter4_nextval,$iter4_idx,handler,$iter4_type,$iter4_array,$iter4_iter;
			self['statusString'] = 'Occupancy check started';
			self['pollingTimer']['schedule']($p['getattr']($m['DataRunManager'], 'pollingTime'));
			$iter4_iter = $p['getattr'](self, 'eventHandlers');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				handler = $iter4_nextval['$nextval'];
				handler['onDataTakingEvent']($p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent'), null);
			}
			return null;
		}
	, 1, [null,null,['self'],['reponse']]);
		$cls_definition['_onStartOccupancyCheckResponse'] = $method;
		$method = $pyjs__bind_method2('pollRPCService', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rpcService']['getDataTakingStatus'](null, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pollRPCService'] = $method;
		$method = $pyjs__bind_method2('registerEventHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self['eventHandlers']['append'](handler);
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['registerEventHandler'] = $method;
		$method = $pyjs__bind_method2('startSCurveRun', function(thresholds) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				thresholds = arguments[1];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'fractionComplete'), 1))) {
				throw ($m['AlreadyTakingDataError']());
			}
			self['fractionComplete'] = 0;
			self['statusString'] = 'Initiating s-curve run';
			self['rpcService']['startSCurveRun'](thresholds, self);
			return null;
		}
	, 1, [null,null,['self'],['thresholds']]);
		$cls_definition['startSCurveRun'] = $method;
		$method = $pyjs__bind_method2('startOccupancyCheck', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'fractionComplete'), 1))) {
				throw ($m['AlreadyTakingDataError']());
			}
			self['fractionComplete'] = 0;
			self['statusString'] = 'Initiating occupancy check';
			self['rpcService']['startOccupancyCheck'](null, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['startOccupancyCheck'] = $method;
		$method = $pyjs__bind_method2('stopTakingData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rpcService']['stopTakingData'](null, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopTakingData'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataRunManager', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DataRunManager */


/* end module: DataRunManager */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'GlibRPCService.GlibRPCService', 'GlibRPCService', 'ErrorMessage.ErrorMessage', 'ErrorMessage']
*/
