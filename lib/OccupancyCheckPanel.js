/* start module: OccupancyCheckPanel */
$pyjs['loaded_modules']['OccupancyCheckPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['OccupancyCheckPanel']['__was_initialized__']) return $pyjs['loaded_modules']['OccupancyCheckPanel'];
	var $m = $pyjs['loaded_modules']['OccupancyCheckPanel'];
	$m['__repr__'] = function() { return '<module: OccupancyCheckPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'OccupancyCheckPanel';
	$m['__name__'] = __mod_name__;


	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['GlibRPCService'] = $p['___import___']('GlibRPCService.GlibRPCService', null, null, false);
	$m['DataRunManager'] = $p['___import___']('DataRunManager.DataRunManager', null, null, false);
	$m['OccupancyCheckView'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'OccupancyCheckPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var controlPanel;
			self['mainPanel'] = $m['VerticalPanel']();
			self['echo'] = $m['HTML']('Initiating');
			self['launchButton'] = $m['Button']('Update');
			controlPanel = $m['HorizontalPanel']();
			controlPanel['add']($p['getattr'](self, 'launchButton'));
			controlPanel['add']($p['getattr'](self, 'echo'));
			self['mainPanel']['add'](controlPanel);
			self['resultGrids'] = $p['dict']([]);
			self['resultLabels'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createResultGrid', function(gridName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gridName = arguments[1];
			}
			var $iter1_iter,$iter2_type,index,$iter2_iter,$$label,$iter1_array,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$iter2_idx,grid,$iter2_nextval,$iter1_type,$add2,$add3,$add1,$iter1_idx,$add4,$iter2_array;
			$$label = $m['HTML']($p['__op_add']($add3=$p['__op_add']($add1='<br><b>',$add2=gridName),$add4='</b>'));
			grid = $m['Grid'](17, 17);
			$iter1_iter = $p['range'](1, grid['getColumnCount']());
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				index = $iter1_nextval['$nextval'];
				grid['setWidget'](0, index, $m['HTML']($p['sprintf']('Cx%X', $p['__op_sub']($sub1=index,$sub2=1))));
			}
			$iter2_iter = $p['range'](1, grid['getRowCount']());
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				index = $iter2_nextval['$nextval'];
				grid['setWidget'](index, 0, $m['HTML']($p['sprintf']('C%Xx', $p['__op_sub']($sub3=index,$sub4=1))));
			}
			self['mainPanel']['add']($$label);
			self['mainPanel']['add'](grid);
			$p['getattr'](self, 'resultLabels')['__setitem__'](gridName, $$label);
			$p['getattr'](self, 'resultGrids')['__setitem__'](gridName, grid);
			return null;
		}
	, 1, [null,null,['self'],['gridName']]);
		$cls_definition['createResultGrid'] = $method;
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
		$method = $pyjs__bind_method2('getUpdateButton', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'launchButton');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUpdateButton'] = $method;
		$method = $pyjs__bind_method2('enable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['launchButton']['setEnabled'](true);
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

			self['launchButton']['setEnabled'](false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['disable'] = $method;
		$method = $pyjs__bind_method2('clearResults', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter3_idx,$iter5_idx,name,column,$iter4_nextval,$iter3_type,$iter5_array,$iter4_idx,$iter5_iter,grid,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$iter5_type,$iter4_iter,$iter3_nextval,row;
			$iter3_iter = self['resultGrids']['keys']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				name = $iter3_nextval['$nextval'];
				grid = $p['getattr'](self, 'resultGrids')['__getitem__'](name);
				$iter4_iter = $p['range'](1, grid['getColumnCount']());
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					column = $iter4_nextval['$nextval'];
					$iter5_iter = $p['range'](1, grid['getRowCount']());
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						row = $iter5_nextval['$nextval'];
						grid['setWidget'](row, column, $m['HTML'](''));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearResults'] = $method;
		$method = $pyjs__bind_method2('addResult', function(cbcName, occupancies) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cbcName = arguments[1];
				occupancies = arguments[2];
			}
			var $iter6_type,$mod1,$mod2,$iter6_iter,$iter6_nextval,blue,index,$$label,$pyjs_try_err,red,green,row,$sub6,$sub5,$iter6_idx,$add14,$add15,$iter6_array,grid,$add11,$add12,$add13,$mul4,$mul3,$mul2,$mul1,column,$add16,$add6,$add7,$add5,$add10,$add8,$add9;
			if ($p['bool']($p['op_eq'](occupancies, null))) {
				return self['addError'](cbcName);
			}
			try {
				grid = $p['getattr'](self, 'resultGrids')['__getitem__'](cbcName);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
					self['createResultGrid'](cbcName);
					grid = $p['getattr'](self, 'resultGrids')['__getitem__'](cbcName);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$$label = $p['getattr'](self, 'resultLabels')['__getitem__'](cbcName);
			$$label['setHTML']($p['__op_add']($add7=$p['__op_add']($add5='<br><b>',$add6=cbcName),$add8='</b>'));
			row = 1;
			column = 1;
			$iter6_iter = $p['range'](0, $p['len'](occupancies));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				index = $iter6_nextval['$nextval'];
				red = (typeof ($mul1=255.0)==typeof ($mul2=$p['__op_sub']($sub5=1.0,$sub6=occupancies['__getitem__'](index))) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				green = (typeof ($mul3=255.0)==typeof ($mul4=occupancies['__getitem__'](index)) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				blue = 0;
				grid['setWidget'](row, column, $m['HTML']($p['__op_add']($add11=$p['__op_add']($add9=$p['sprintf']('<div style="background-color:#%02X%02X%02X', $p['tuple']([red, green, blue])),$add10=$p['sprintf']('">%1.2f', occupancies['__getitem__'](index))),$add12='</div>')));
				column = $p['__op_add']($add13=column,$add14=1);
				if ($p['bool']($p['op_eq']((typeof ($mod1=column)==typeof ($mod2=17) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), 0))) {
					column = 1;
					row = $p['__op_add']($add15=row,$add16=1);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['cbcName'],['occupancies']]);
		$cls_definition['addResult'] = $method;
		$method = $pyjs__bind_method2('addError', function(cbcName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cbcName = arguments[1];
			}
			var $add20,$$label,$pyjs_try_err,$add18,$add19,$add17;
			try {
				$$label = $p['getattr'](self, 'resultLabels')['__getitem__'](cbcName);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
					self['createResultGrid'](cbcName);
					$$label = $p['getattr'](self, 'resultLabels')['__getitem__'](cbcName);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$$label['setHTML']($p['__op_add']($add19=$p['__op_add']($add17='<br>Unable to get the results for <b>',$add18=cbcName),$add20='</b>'));
			return null;
		}
	, 1, [null,null,['self'],['cbcName']]);
		$cls_definition['addError'] = $method;
		$method = $pyjs__bind_method2('setEchoMessage', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}

			self['echo']['setText'](message);
			return null;
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['setEchoMessage'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OccupancyCheckView', $p['tuple']($bases), $data);
	})();
	$m['OccupancyCheckPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'OccupancyCheckPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rpcService'] = $m['GlibRPCService']['instance']();
			self['dataRunManager'] = $m['DataRunManager']['instance']();
			self['view'] = $m['OccupancyCheckView']();
			self['rpcService']['connectedCBCNames'](null, self);
			self['dataRunManager']['registerEventHandler'](self);
			self['view']['getUpdateButton']()['addClickListener'](self);
			self['view']['setEchoMessage']('No data.');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			if ($p['bool']($p['op_eq'](sender, self['view']['getUpdateButton']()))) {
				self['view']['setEchoMessage']('Starting data run');
				self['dataRunManager']['startOccupancyCheck']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onDataTakingEvent', function(eventCode, details) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventCode = arguments[1];
				details = arguments[2];
			}

			if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingStartedEvent')))) {
				self['view']['setEchoMessage']('Taking data... ');
				self['view']['disable']();
			}
			else if ($p['bool']($p['op_eq'](eventCode, $p['getattr']($m['DataRunManager'], 'DataTakingFinishedEvent')))) {
				self['view']['setEchoMessage']('Data taking finished');
				self['update']();
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
			var $add21,$add22;
			if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'getOccupancies'))) {
				self['_onGetOccupanciesResponse'](response);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'connectedCBCNames'))) {
				self['_onConnectedCBCNamesResponse'](response);
			}
			else {
				$m['ErrorMessage']($p['__op_add']($add21='Received an unexpected response for method ',$add22=$p['getattr'](request_info, 'method')));
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
			var $add24,$add23;
			$m['ErrorMessage']($p['__op_add']($add23='Unable to contact server: ',$add24=$p['str'](message)));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('_onGetOccupanciesResponse', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,cbcName,$iter7_idx,$iter7_type;
			self['view']['clearResults']();
			$iter7_iter = response['keys']();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				cbcName = $iter7_nextval['$nextval'];
				self['view']['addResult'](cbcName, response['__getitem__'](cbcName));
			}
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['_onGetOccupanciesResponse'] = $method;
		$method = $pyjs__bind_method2('_onConnectedCBCNamesResponse', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var $iter8_idx,name,$iter8_array,$iter8_iter,$iter8_nextval,$iter8_type;
			$iter8_iter = response;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				name = $iter8_nextval['$nextval'];
				self['view']['createResultGrid'](name);
			}
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['_onConnectedCBCNamesResponse'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rpcService']['getOccupancies'](null, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
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
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OccupancyCheckPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end OccupancyCheckPanel */


/* end module: OccupancyCheckPanel */


/*
PYJS_DEPS: ['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'ErrorMessage.ErrorMessage', 'ErrorMessage', 'GlibRPCService.GlibRPCService', 'GlibRPCService', 'DataRunManager.DataRunManager', 'DataRunManager']
*/
