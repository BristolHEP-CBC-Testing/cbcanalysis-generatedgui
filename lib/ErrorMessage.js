/* start module: ErrorMessage */
$pyjs['loaded_modules']['ErrorMessage'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ErrorMessage']['__was_initialized__']) return $pyjs['loaded_modules']['ErrorMessage'];
	var $m = $pyjs['loaded_modules']['ErrorMessage'];
	$m['__repr__'] = function() { return '<module: ErrorMessage>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ErrorMessage';
	$m['__name__'] = __mod_name__;


	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['ErrorMessage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'ErrorMessage';
		$method = $pyjs__bind_method2('__init__', function(message, messageTitle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
				messageTitle = arguments[2];
			}
			if (typeof messageTitle == 'undefined') messageTitle=arguments['callee']['__args__'][4][1];
			var $div3,$sub3,$sub2,$sub1,$sub4,dialogContents,$div2,$div1,$div4,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,top,left;
			self['dialog'] = $pyjs_kwargs_call(null, $m['DialogBox'], null, null, [{'glass':true}]);
			self['dialog']['setHTML']($p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=messageTitle),$add4='</b>'));
			dialogContents = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'Contents', 'Spacing':4}]);
			dialogContents['add']($m['HTML'](message));
			dialogContents['add']($m['Button']('Close', $p['getattr'](self, 'onClose')));
			self['dialog']['setWidget'](dialogContents);
			left = $p['__op_add']($add5=(typeof ($div1=$p['__op_sub']($sub1=$m['Window']['getClientWidth'](),$sub2=200))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)),$add6=$m['Window']['getScrollLeft']());
			top = $p['__op_add']($add7=(typeof ($div3=$p['__op_sub']($sub3=$m['Window']['getClientHeight'](),$sub4=100))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)),$add8=$m['Window']['getScrollTop']());
			self['dialog']['setPopupPosition'](left, top);
			self['dialog']['show']();
			return null;
		}
	, 1, [null,null,['self'],['message'],['messageTitle', 'Error']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClose', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['dialog']['hide']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClose'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ErrorMessage', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ErrorMessage */


/* end module: ErrorMessage */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox']
*/
