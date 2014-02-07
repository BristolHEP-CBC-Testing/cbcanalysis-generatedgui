/* start module: I2CPanel */
$pyjs['loaded_modules']['I2CPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['I2CPanel']['__was_initialized__']) return $pyjs['loaded_modules']['I2CPanel'];
	var $m = $pyjs['loaded_modules']['I2CPanel'];
	$m['__repr__'] = function() { return '<module: I2CPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I2CPanel';
	$m['__name__'] = __mod_name__;


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['ErrorMessage'] = $p['___import___']('ErrorMessage.ErrorMessage', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
	$m['I2CPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'I2CPanel';
		$cls_definition['saveStateListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'I2CPanel';
			$method = $pyjs__bind_method2('__init__', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					panel = arguments[1];
				}

				self['_saveStatePanel'] = panel;
				self['_saveStatePanel']['echoSelection']();
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
			return $p['_create_class']('saveStateListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['ConnectedCBCListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'I2CPanel';
			$method = $pyjs__bind_method2('__init__', function(listBox) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					listBox = arguments[1];
				}

				self['listBox'] = listBox;
				return null;
			}
	, 1, [null,null,['self'],['listBox']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
				}
				var $iter1_nextval,$iter1_type,name,$iter1_array,$iter1_iter,$iter1_idx;
				self['listBox']['clear']();
				if ($p['bool']($p['op_eq'](response, null))) {
					self['listBox']['addItem']('<none>');
					self['listBox']['setEnabled'](false);
				}
				else {
					$iter1_iter = response;
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						name = $iter1_nextval['$nextval'];
						self['listBox']['addItem'](name);
					}
					self['listBox']['setEnabled'](true);
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
			return $p['_create_class']('ConnectedCBCListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['ReadRegisterValueListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'I2CPanel';
			$method = $pyjs__bind_method2('__init__', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
					panel = arguments[1];
				}

				self['_I2Cpanel'] = panel;
				self['textBoxes'] = $p['getattr']($p['getattr'](self, '_I2Cpanel'), 'i2cValueEntries');
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
				var $iter3_type,$iter4_type,registerName,$iter4_iter,$iter4_idx,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,status,$iter2_type,$iter2_idx,$iter3_array,box,$iter2_nextval,$iter4_nextval,valuesTuple,cbcName,$iter4_array,$iter2_array;
				$iter2_iter = self['_I2Cpanel']['getActiveCBCs']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					cbcName = $iter2_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](cbcName, 'FE0CBC0'))) {
						valuesTuple = response['__getitem__'](response['keys']()['__getitem__'](0));
					}
					else if ($p['bool']($p['op_eq'](cbcName, 'FE0CBC1'))) {
						valuesTuple = response['__getitem__'](response['keys']()['__getitem__'](1));
					}
				}
				$iter3_iter = valuesTuple;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					registerName = $iter3_nextval['$nextval'];
					box = $p['getattr'](self, 'textBoxes')['__getitem__'](registerName);
					status = $p['getattr']($p['getattr'](self, '_I2Cpanel'), 'statusValueEntries')['__getitem__'](registerName);
					box['setText']($p['sprintf']('0x%02x', valuesTuple['__getitem__'](registerName)));
					box['setStyleAttribute']('background-color', '#FFFFFF');
					box['setEnabled'](true);
				}
				$iter4_iter = valuesTuple;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					registerName = $iter4_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](response['__getitem__']('FE0CBC0')['__getitem__'](registerName), response['__getitem__']('FE0CBC1')['__getitem__'](registerName)))) {
						$p['getattr']($p['getattr'](self, '_I2Cpanel'), 'statusValueEntries')['__getitem__'](registerName)['setText']('==');
					}
					else {
						$p['getattr']($p['getattr'](self, '_I2Cpanel'), 'statusValueEntries')['__getitem__'](registerName)['setText'](' //');
					}
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
			return $p['_create_class']('ReadRegisterValueListener', $p['tuple']($bases), $data);
		})();
		$cls_definition['DoNothingListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'I2CPanel';
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

				$m['ErrorMessage']('Unable to contact server');
				return null;
			}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DoNothingListener', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('__init__', function(rpcService) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rpcService = arguments[1];
			}

			self['rpcService'] = rpcService;
			self['mainPanel'] = $m['HorizontalPanel']();
			self['mainPanel']['setSpacing'](10);
			self['i2cValueEntries'] = $p['dict']([]);
			self['statusValueEntries'] = $p['dict']([]);
			self['stateValueEntries'] = $p['dict']([]);
			self['fileName'] = $p['dict']([]);
			self['cbcList'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'MultipleSelect':true, 'VisibleItemCount':10}]);
			self['cbcList']['addItem']('waiting...');
			self['cbcList']['setEnabled'](false);
			self['cbcList']['addChangeListener'](self);
			self['rpcService']['connectedCBCNames'](null, $m['I2CPanel']['ConnectedCBCListener']($p['getattr'](self, 'cbcList')));
			self['mainPanel']['add']($p['getattr'](self, 'cbcList'));
			self['mainSettings'] = $m['DisclosurePanel']('Main Control Registers');
			self['channelMasks'] = $m['DisclosurePanel']('Channel Masks');
			self['channelTrims'] = $m['DisclosurePanel']('Channel Trims');
			self['callSettings'] = $m['VerticalPanel']('Load/Save States');
			self['callSettings']['add']($m['HTML']('<center>Save/Load State</center>'));
			self['mainPanel']['add']($p['getattr'](self, 'callSettings'));
			self['mainPanel']['add']($p['getattr'](self, 'mainSettings'));
			self['mainPanel']['add']($p['getattr'](self, 'channelMasks'));
			self['mainPanel']['add']($p['getattr'](self, 'channelTrims'));
			self['callSettings']['add'](self['createStatesPanel']());
			self['mainSettings']['add'](self['createRegisterPanel']($p['list'](['FrontEndControl', 'TriggerLatency', 'HitDetectSLVS', 'Ipre1', 'Ipre2', 'Ipsf', 'Ipa', 'Ipaos', 'Vpafb', 'Icomp', 'Vpc', 'Vplus', 'VCth', 'TestPulsePot', 'SelTestPulseDel&ChanGroup', 'MiscTestPulseCtrl&AnalogMux', 'TestPulseChargePumpCurrent', 'TestPulseChargeMirrCascodeVolt', 'CwdWindow&Coincid', 'MiscStubLogic'])));
			self['channelMasks']['add'](self['createRegisterPanel']($p['list'](['MaskChannelFrom008downto001', 'MaskChannelFrom016downto009', 'MaskChannelFrom024downto017', 'MaskChannelFrom032downto025', 'MaskChannelFrom040downto033', 'MaskChannelFrom048downto041', 'MaskChannelFrom056downto049', 'MaskChannelFrom064downto057', 'MaskChannelFrom072downto065', 'MaskChannelFrom080downto073', 'MaskChannelFrom088downto081', 'MaskChannelFrom096downto089', 'MaskChannelFrom104downto097', 'MaskChannelFrom112downto105', 'MaskChannelFrom120downto113', 'MaskChannelFrom128downto121', 'MaskChannelFrom136downto129', 'MaskChannelFrom144downto137', 'MaskChannelFrom152downto145', 'MaskChannelFrom160downto153', 'MaskChannelFrom168downto161', 'MaskChannelFrom176downto169', 'MaskChannelFrom184downto177', 'MaskChannelFrom192downto185', 'MaskChannelFrom200downto193', 'MaskChannelFrom208downto201', 'MaskChannelFrom216downto209', 'MaskChannelFrom224downto217', 'MaskChannelFrom232downto225', 'MaskChannelFrom240downto233', 'MaskChannelFrom248downto241', 'MaskChannelFrom254downto249'])));
			self['channelTrims']['add'](self['createRegisterPanel']($p['list'](['Channel001', 'Channel002', 'Channel003', 'Channel004', 'Channel005', 'Channel006', 'Channel007', 'Channel008', 'Channel009', 'Channel010', 'Channel011', 'Channel012', 'Channel013', 'Channel014', 'Channel015', 'Channel016', 'Channel017', 'Channel018', 'Channel019', 'Channel020', 'Channel021', 'Channel022', 'Channel023', 'Channel024', 'Channel025', 'Channel026', 'Channel027', 'Channel028', 'Channel029', 'Channel030', 'Channel031', 'Channel032', 'Channel033', 'Channel034', 'Channel035', 'Channel036', 'Channel037', 'Channel038', 'Channel039', 'Channel040', 'Channel041', 'Channel042', 'Channel043', 'Channel044', 'Channel045', 'Channel046', 'Channel047', 'Channel048', 'Channel049', 'Channel050', 'Channel051', 'Channel052', 'Channel053', 'Channel054', 'Channel055', 'Channel056', 'Channel057', 'Channel058', 'Channel059', 'Channel060', 'Channel061', 'Channel062', 'Channel063', 'Channel064', 'Channel065', 'Channel066', 'Channel067', 'Channel068', 'Channel069', 'Channel070', 'Channel071', 'Channel072', 'Channel073', 'Channel074', 'Channel075', 'Channel076', 'Channel077', 'Channel078', 'Channel079', 'Channel080', 'Channel081', 'Channel082', 'Channel083', 'Channel084', 'Channel085', 'Channel086', 'Channel087', 'Channel088', 'Channel089', 'Channel090', 'Channel091', 'Channel092', 'Channel093', 'Channel094', 'Channel095', 'Channel096', 'Channel097', 'Channel098', 'Channel099', 'Channel100', 'Channel101', 'Channel102', 'Channel103', 'Channel104', 'Channel105', 'Channel106', 'Channel107', 'Channel108', 'Channel109', 'Channel110', 'Channel111', 'Channel112', 'Channel113', 'Channel114', 'Channel115', 'Channel116', 'Channel117', 'Channel118', 'Channel119', 'Channel120', 'Channel121', 'Channel122', 'Channel123', 'Channel124', 'Channel125', 'Channel126', 'Channel127', 'Channel128', 'Channel129', 'Channel130', 'Channel131', 'Channel132', 'Channel133', 'Channel134', 'Channel135', 'Channel136', 'Channel137', 'Channel138', 'Channel139', 'Channel140', 'Channel141', 'Channel142', 'Channel143', 'Channel144', 'Channel145', 'Channel146', 'Channel147', 'Channel148', 'Channel149', 'Channel150', 'Channel151', 'Channel152', 'Channel153', 'Channel154', 'Channel155', 'Channel156', 'Channel157', 'Channel158', 'Channel159', 'Channel160', 'Channel161', 'Channel162', 'Channel163', 'Channel164', 'Channel165', 'Channel166', 'Channel167', 'Channel168', 'Channel169', 'Channel170', 'Channel171', 'Channel172', 'Channel173', 'Channel174', 'Channel175', 'Channel176', 'Channel177', 'Channel178', 'Channel179', 'Channel180', 'Channel181', 'Channel182', 'Channel183', 'Channel184', 'Channel185', 'Channel186', 'Channel187', 'Channel188', 'Channel189', 'Channel190', 'Channel191', 'Channel192', 'Channel193', 'Channel194', 'Channel195', 'Channel196', 'Channel197', 'Channel198', 'Channel199', 'Channel200', 'Channel201', 'Channel202', 'Channel203', 'Channel204', 'Channel205', 'Channel206', 'Channel207', 'Channel208', 'Channel209', 'Channel210', 'Channel211', 'Channel212', 'Channel213', 'Channel214', 'Channel215', 'Channel216', 'Channel217', 'Channel218', 'Channel219', 'Channel220', 'Channel221', 'Channel222', 'Channel223', 'Channel224', 'Channel225', 'Channel226', 'Channel227', 'Channel228', 'Channel229', 'Channel230', 'Channel231', 'Channel232', 'Channel233', 'Channel234', 'Channel235', 'Channel236', 'Channel237', 'Channel238', 'Channel239', 'Channel240', 'Channel241', 'Channel242', 'Channel243', 'Channel244', 'Channel245', 'Channel246', 'Channel247', 'Channel248', 'Channel249', 'Channel250', 'Channel251', 'Channel252', 'Channel253', 'Channel254', 'ChannelDummy'])));
			self['mainSettings']['add']();
			self['echo'] = $m['Label']();
			self['mainPanel']['add']($p['getattr'](self, 'echo'));
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
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter5_nextval,$iter5_idx,$and1,$pyjs_try_err,value,cbcName,$iter5_iter,messageParameters,$iter5_array,$iter5_type,$and2,string;
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'cbcList')))) {
				self['rpcService']['I2CRegisterValues'](self['getTotalCBCs'](), $m['I2CPanel']['ReadRegisterValueListener'](self));
			}
			else {
				try {
					string = sender['getText']();
					if ($p['bool'](((($p['cmp']($p['len'](string), 2))|1) == 1))) {
						if ($p['bool'](($p['bool']($and1=$p['op_eq'](string['__getitem__'](0), '0'))?$p['op_eq'](string['__getitem__'](1), 'x'):$and1))) {
							string = $p['__getslice'](string, 2, null);
						}
					}
					value = $p['float_int'](string, 16);
					if ($p['bool'](($p['cmp'](value, 0) == -1))) {
						value = 0;
					}
					if ($p['bool'](($p['cmp'](value, 255) == 1))) {
						value = 255;
					}
					sender['setStyleAttribute']('background-color', '#FFFFFF');
					sender['setText']($p['sprintf']('0x%02x', value));
					messageParameters = $p['dict']([]);
					$iter5_iter = self['getActiveCBCs']();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						cbcName = $iter5_nextval['$nextval'];
						messageParameters['__setitem__'](cbcName, $p['dict']([[sender['getTitle'](), value]]));
					}
					self['rpcService']['setI2CRegisterValues'](messageParameters, $m['I2CPanel']['DoNothingListener'](self));
					self['rpcService']['I2CRegisterValues'](self['getTotalCBCs'](), $m['I2CPanel']['ReadRegisterValueListener'](self));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						sender['setStyleAttribute']('background-color', '#FF3333');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('echoSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,$add2,$iter6_array,$add1,names,msg,$iter6_iter,$iter6_nextval;
			msg = ' You pressed: ';
			$iter6_iter = self['getCheckedStates']();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				names = $iter6_nextval['$nextval'];
				msg = $p['__op_add']($add1=msg,$add2=names);
			}
			self['echo']['setText'](msg);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['echoSelection'] = $method;
		$method = $pyjs__bind_method2('getList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter7_nextval,selectCBCs,i,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
			selectCBCs = $p['list']([]);
			$iter7_iter = $p['range'](self['cbcList']['getItemCount']());
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				i = $iter7_nextval['$nextval'];
				if ($p['bool'](self['cbcList']['isItemSelected'](i))) {
					$m['selectedCBCs']['append'](self['cbcList']['getItemText'](i));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getList'] = $method;
		$method = $pyjs__bind_method2('getTotalCBCs', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter8_idx,i,$iter8_array,$iter8_iter,totalCBCs,$iter8_nextval,$iter8_type;
			totalCBCs = $p['list']([]);
			$iter8_iter = $p['range'](self['cbcList']['getItemCount']());
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				i = $iter8_nextval['$nextval'];
				totalCBCs['append'](self['cbcList']['getItemText'](i));
			}
			return totalCBCs;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTotalCBCs'] = $method;
		$method = $pyjs__bind_method2('getSpecificCBC', function(i) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var specificCBC;
			specificCBC = $p['list']([]);
			specificCBC['append'](self['cbcList']['getItemText'](i));
			return specificCBC;
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['getSpecificCBC'] = $method;
		$method = $pyjs__bind_method2('getActiveCBCs', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter9_iter,i,$iter9_nextval,$iter9_idx,$iter9_array,selectedCBCs,$iter9_type;
			selectedCBCs = $p['list']([]);
			$iter9_iter = $p['range'](self['cbcList']['getItemCount']());
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				i = $iter9_nextval['$nextval'];
				if ($p['bool'](self['cbcList']['isItemSelected'](i))) {
					selectedCBCs['append'](self['cbcList']['getItemText'](i));
				}
			}
			return selectedCBCs;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getActiveCBCs'] = $method;
		$method = $pyjs__bind_method2('getCheckedStates', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,names,selectedStates,$iter10_type,$iter10_iter,$iter10_idx;
			selectedStates = $p['list']([]);
			$iter10_iter = $p['getattr'](self, 'stateValueEntries');
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				names = $iter10_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['str']($p['getattr'](self, 'stateValueEntries')['__getitem__'](names)['isChecked']()), 'True'))) {
					selectedStates['append'](names);
				}
			}
			selectedStates['append'](self['fileName']['getText']());
			return selectedStates;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCheckedStates'] = $method;
		$method = $pyjs__bind_method2('createRegisterPanel', function(registerNames) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				registerNames = arguments[1];
			}
			var newTextBox,maxWidth,$iter13_idx,buttonName,statusBox,$$label,$iter11_idx,$iter13_type,$iter11_iter,$iter12_array,$iter11_array,$iter11_nextval,$mul4,$mul3,$mul2,$mul1,flowPanel,$iter13_nextval,$iter13_iter,$iter12_type,$iter11_type,newPanel,$iter13_array,$iter12_iter,$iter12_idx,$iter12_nextval,newLabels;
			flowPanel = $m['FlowPanel']();
			newLabels = $p['list']([]);
			$iter11_iter = registerNames;
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				buttonName = $iter11_nextval['$nextval'];
				newPanel = $m['HorizontalPanel']();
				newLabels['append']($m['Label'](buttonName));
				newPanel['add'](newLabels['__getitem__']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))));
				newTextBox = $m['TextBox']();
				newTextBox['setEnabled'](false);
				newTextBox['setWidth'](80);
				statusBox = $m['TextBox']();
				statusBox['setEnabled'](false);
				statusBox['setWidth'](30);
				newPanel['add'](newTextBox);
				newPanel['add'](statusBox);
				newTextBox['setText']('select chip...');
				newTextBox['addChangeListener'](self);
				newTextBox['setTitle'](buttonName);
				$p['getattr'](self, 'i2cValueEntries')['__setitem__'](buttonName, newTextBox);
				$p['getattr'](self, 'statusValueEntries')['__setitem__'](buttonName, statusBox);
				statusBox['setTitle'](buttonName);
				statusBox['setText']('...');
				flowPanel['add'](newPanel);
			}
			maxWidth = 0;
			$iter12_iter = newLabels;
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				$$label = $iter12_nextval['$nextval'];
				if ($p['bool'](($p['cmp']((typeof ($mul1=$p['len']($$label['getText']()))==typeof ($mul2=9) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), maxWidth) == 1))) {
					maxWidth = (typeof ($mul3=$p['len']($$label['getText']()))==typeof ($mul4=9) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
				}
			}
			$iter13_iter = newLabels;
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				$$label = $iter13_nextval['$nextval'];
				$$label['setWidth'](maxWidth);
			}
			return flowPanel;
		}
	, 1, [null,null,['self'],['registerNames']]);
		$cls_definition['createRegisterPanel'] = $method;
		$method = $pyjs__bind_method2('createStatesPanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var vertPanel,selectionNames,$iter14_array,checkBox,$iter14_type,name,launch,fileTextBox,$$label,state,$iter14_iter,registerSelection,$iter14_idx,$iter14_nextval;
			vertPanel = $m['VerticalPanel']();
			vertPanel['setSpacing'](10);
			selectionNames = $p['list'](['Main Control', 'Masks', 'Trims']);
			registerSelection = $m['VerticalPanel']();
			$iter14_iter = selectionNames;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				name = $iter14_nextval['$nextval'];
				checkBox = $m['CheckBox'](name);
				checkBox['setTitle'](name);
				$p['getattr'](self, 'stateValueEntries')['__setitem__'](name, checkBox);
				registerSelection['add'](checkBox);
			}
			state = $m['HorizontalPanel']();
			$$label = $m['Label']('FileName');
			state['add']($$label);
			fileTextBox = $m['TextBox']();
			fileTextBox['setText']('DatFile.dat');
			fileTextBox['setWidth'](80);
			self['fileName'] = fileTextBox;
			state['add'](fileTextBox);
			launch = $m['HorizontalPanel']();
			self['save'] = $m['Button']('Save');
			self['load'] = $m['Button']('Load');
			self['save']['addClickListener'](self);
			self['load']['addClickListener'](self);
			launch['add']($p['getattr'](self, 'save'));
			launch['add']($p['getattr'](self, 'load'));
			vertPanel['add'](registerSelection);
			vertPanel['add'](state);
			vertPanel['add'](launch);
			return vertPanel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createStatesPanel'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'save')))) {
				self['rpcService']['saveStateValues'](null, $m['I2CPanel']['saveStateListener'](self));
			}
			else if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'load')))) {
				self['rpcService']['loadStateValues']($p['getattr'](self, 'fileName'), $m['I2CPanel']['DoNothingListener'](self));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('I2CPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end I2CPanel */


/* end module: I2CPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'ErrorMessage.ErrorMessage', 'ErrorMessage', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'datetime.datetime', 'datetime']
*/
