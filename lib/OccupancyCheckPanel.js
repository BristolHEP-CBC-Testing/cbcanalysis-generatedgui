/* start module: OccupancyCheckPanel */
$pyjs['loaded_modules']['OccupancyCheckPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['OccupancyCheckPanel']['__was_initialized__']) return $pyjs['loaded_modules']['OccupancyCheckPanel'];
	var $m = $pyjs['loaded_modules']['OccupancyCheckPanel'];
	$m['__repr__'] = function() { return '<module: OccupancyCheckPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'OccupancyCheckPanel';
	$m['__name__'] = __mod_name__;


	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['OccupancyCheckPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'OccupancyCheckPanel';
		$method = $pyjs__bind_method2('__init__', function(rpcService) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpcService = arguments[1];
			}

			self['rpcService'] = rpcService;
			self['mainPanel'] = $m['VerticalPanel']();
			self['mainPanel']['add']($m['HTML']('Still need to add all of the interface elements for this.'));
			return null;
		}
	, 1, [null,null,['self'],['rpcService']]);
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
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OccupancyCheckPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end OccupancyCheckPanel */


/* end module: OccupancyCheckPanel */


/*
PYJS_DEPS: ['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'ErrorMessage.ErrorMessage', 'ErrorMessage']
*/
