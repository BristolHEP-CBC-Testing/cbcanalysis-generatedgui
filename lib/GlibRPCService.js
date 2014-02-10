/* start module: GlibRPCService */
$pyjs['loaded_modules']['GlibRPCService'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GlibRPCService']['__was_initialized__']) return $pyjs['loaded_modules']['GlibRPCService'];
	var $m = $pyjs['loaded_modules']['GlibRPCService'];
	$m['__repr__'] = function() { return '<module: GlibRPCService>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GlibRPCService';
	$m['__name__'] = __mod_name__;


	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['GlibRPCService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'GlibRPCService';
		$cls_definition['_onlyInstance'] = null;
		$method = $pyjs__bind_method2('instance', function() {

			if ($p['bool']($p['op_eq']($p['getattr']($m['GlibRPCService'], '_onlyInstance'), null))) {
				$m['GlibRPCService']['_onlyInstance'] = $m['GlibRPCService']();
			}
			return $p['getattr']($m['GlibRPCService'], '_onlyInstance');
		}
	, 3, [null,null]);
		$cls_definition['instance'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr']($m['GlibRPCService'], '_onlyInstance'), null))) {
				throw ($p['Exception']("GlibRPCService is a singleton class. Call 'GlibRPCService.instance()' to get the only running instance"));
			}
			$m['JSONProxy']['__init__'](self, 'services/GlibControlProxy.py', $p['list'](['getStates', 'connectedCBCNames', 'I2CRegisterValues', 'setI2CRegisterValues', 'saveStateValues', 'loadStateValues', 'startProcesses', 'killProcesses', 'boardIsReachable', 'stopTakingData', 'startSCurveRun', 'startOccupancyCheck', 'getDataTakingStatus', 'getOccupancies', 'createHistogram']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GlibRPCService', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GlibRPCService */


/* end module: GlibRPCService */


/*
PYJS_DEPS: ['pyjamas.JSONService.JSONProxy', 'pyjamas', 'pyjamas.JSONService']
*/
