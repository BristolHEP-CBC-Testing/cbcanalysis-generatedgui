/* start module: pyjamas.ui.DisclosurePanel */
$pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DisclosurePanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DisclosurePanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DisclosurePanel'] = $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.ui');
	$m['ClickableHeader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
		$method = $pyjs__bind_method2('__init__', function(disclosurePanel) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				disclosurePanel = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof disclosurePanel != 'undefined') {
					if (disclosurePanel !== null && typeof disclosurePanel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = disclosurePanel;
						disclosurePanel = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var element;
			element = kwargs['pop']('Element', $m['DOM']['createAnchor']());
			$m['SimplePanel']['__init__'](self, element);
			self['disclosurePanel'] = disclosurePanel;
			element = self['getElement']();
			$m['DOM']['setAttribute'](element, 'href', 'javascript:void(0);');
			$m['DOM']['setStyleAttribute'](element, 'display', 'block');
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
			self['setStyleName']('header');
			return null;
		}
	, 1, [null,['kwargs'],['self'],['disclosurePanel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var etype,newstate;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](etype, 'click'))) {
				$m['DOM']['eventPreventDefault'](event);
				newstate = !$p['bool'](self['disclosurePanel']['getOpen']());
				self['disclosurePanel']['setOpen'](newstate);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ClickableHeader', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DisclosurePanel', 'ClickableHeader', $m['ClickableHeader']);
	$m['DefaultHeader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
		$method = $pyjs__bind_method2('__init__', function(text, images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				images = arguments[2];
			}
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];

			$m['Widget']['__init__'](self);
			self['setImageBase'](images);
			self['root'] = $m['DOM']['createTable']();
			self['tbody'] = $m['DOM']['createTBody']();
			self['tr'] = $m['DOM']['createTR']();
			self['imageTD'] = $m['DOM']['createTD']();
			self['labelTD'] = $m['DOM']['createTD']();
			self['imgElem'] = $m['DOM']['createImg']();
			self['setElement']($p['getattr'](self, 'root'));
			$m['DOM']['appendChild']($p['getattr'](self, 'root'), $p['getattr'](self, 'tbody'));
			$m['DOM']['appendChild']($p['getattr'](self, 'tbody'), $p['getattr'](self, 'tr'));
			$m['DOM']['appendChild']($p['getattr'](self, 'tr'), $p['getattr'](self, 'imageTD'));
			$m['DOM']['appendChild']($p['getattr'](self, 'tr'), $p['getattr'](self, 'labelTD'));
			$m['DOM']['appendChild']($p['getattr'](self, 'imageTD'), $p['getattr'](self, 'imgElem'));
			self['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text'],['images', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText']($p['getattr'](self, 'labelTD'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setInnerText']($p['getattr'](self, 'labelTD'), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('onOpen', function(panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self['updateState'](true);
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['onOpen'] = $method;
		$method = $pyjs__bind_method2('onClose', function(panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self['updateState'](false);
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['onClose'] = $method;
		$method = $pyjs__bind_method2('setImageBase', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}

			self['imageBase'] = $m['pygwt']['getImageBaseURL'](images);
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['setImageBase'] = $method;
		$method = $pyjs__bind_method2('updateState', function(setOpen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setOpen = arguments[1];
			}
			var $add2,$add3,$add1,$add4;
			if ($p['bool'](setOpen)) {
				$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', $p['__op_add']($add1=$p['getattr'](self, 'imageBase'),$add2='disclosurePanelOpen.png'));
			}
			else {
				$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', $p['__op_add']($add3=$p['getattr'](self, 'imageBase'),$add4='disclosurePanelClosed.png'));
			}
			return null;
		}
	, 1, [null,null,['self'],['setOpen']]);
		$cls_definition['updateState'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DefaultHeader', $p['tuple']($bases), $data);
	})();
	$m['DisclosurePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var headerContent,$or1,isOpen,$or2,element,headerText,header,$assign1,headerWidget;
			self['handlers'] = $p['list']([]);
			self['content'] = null;
			self['images'] = false;
			element = kwargs['pop']('Element', null);
			$assign1 = null;
			headerText = $assign1;
			headerWidget = $assign1;
			isOpen = false;
			if ($p['bool']($p['op_eq']($p['len'](args), 1))) {
				header = args['__getitem__'](0);
			}
			if ($p['bool']($p['op_eq']($p['len'](args), 2))) {
				var $tupleassign1 = $p['__ass_unpack']($p['__getslice'](args, 0, 2), 2, null);
				header = $tupleassign1[0];
				isOpen = $tupleassign1[1];
			}
			if ($p['bool']($p['isinstance'](header, $p['basestring']))) {
				headerText = header;
			}
			else {
				headerWidget = header;
			}
			isOpen = kwargs['pop']('isOpen', isOpen);
			headerText = kwargs['pop']('header', headerText);
			headerWidget = kwargs['pop']('header', headerWidget);
			headerContent = headerWidget;
			if ($p['bool'](($p['bool']($or1=(headerText !== null))?$or1:(headerContent === null)))) {
				if ($p['bool']((headerText === null))) {
					headerText = '';
				}
				headerContent = $m['DefaultHeader'](headerText);
			}
			self['mainPanel'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Element':element}]);
			self['_init_header'](headerContent);
			self['contentWrapper'] = $m['SimplePanel']();
			self['mainPanel']['add']($p['getattr'](self, 'header'));
			self['mainPanel']['add']($p['getattr'](self, 'contentWrapper'));
			$m['DOM']['setStyleAttribute'](self['contentWrapper']['getElement'](), 'padding', '0px');
			$m['DOM']['setStyleAttribute'](self['contentWrapper']['getElement'](), 'overflow', 'hidden');
			kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', 'gwt-DisclosurePanel'));
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'mainPanel')]);
			self['isOpen'] = null;
			self['setOpen'](isOpen);
			self['setContentDisplay']();
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_init_header', function(headerContent) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				headerContent = arguments[1];
			}

			self['header'] = $m['ClickableHeader'](self);
			self['headerObj'] = headerContent;
			self['addEventHandler']($p['getattr'](self, 'headerObj'));
			self['setHeader']($p['getattr'](self, 'headerObj'));
			return null;
		}
	, 1, [null,null,['self'],['headerContent']]);
		$cls_definition['_init_header'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']((self['getContent']() === null))) {
				self['setContent'](widget);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addEventHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self['handlers']['append'](handler);
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addEventHandler'] = $method;
		$method = $pyjs__bind_method2('removeEventHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self['handlers']['remove'](handler);
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['removeEventHandler'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setContent'](null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getContent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'content');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContent'] = $method;
		$method = $pyjs__bind_method2('getHeader', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['header']['getWidget']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeader'] = $method;
		$method = $pyjs__bind_method2('getOpen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'isOpen');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOpen'] = $method;
		$method = $pyjs__bind_method2('getImages', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'images');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImages'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']($p['op_eq'](widget, self['getContent']()))) {
				self['setContent'](null);
				return true;
			}
			return false;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('setContent', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, 'content') !== null))) {
				self['contentWrapper']['setWidget'](null);
				self['content']['removeStyleName']('content');
			}
			self['content'] = widget;
			if ($p['bool'](($p['getattr'](self, 'content') !== null))) {
				self['contentWrapper']['setWidget']($p['getattr'](self, 'content'));
				self['content']['addStyleName']('content');
				self['setContentDisplay']();
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setContent'] = $method;
		$method = $pyjs__bind_method2('setHeader', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['header']['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setHeader'] = $method;
		$method = $pyjs__bind_method2('setOpen', function(isOpen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				isOpen = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'isOpen'), isOpen))) {
				return null;
			}
			self['isOpen'] = isOpen;
			self['setContentDisplay']();
			self['fireEvent']();
			return null;
		}
	, 1, [null,null,['self'],['isOpen']]);
		$cls_definition['setOpen'] = $method;
		$method = $pyjs__bind_method2('setImages', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var header,$and2,$and1;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'images'), images))) {
				return null;
			}
			self['images'] = images;
			header = self['getHeader']();
			if ($p['bool'](($p['bool']($and1=(header !== null))?$p['isinstance'](header, $m['DefaultHeader']):$and1))) {
				header['setImageBase'](images);
				header['updateState'](self['getOpen']());
			}
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['setImages'] = $method;
		$method = $pyjs__bind_method2('fireEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,handler,$iter1_array,$iter1_idx;
			$iter1_iter = $p['getattr'](self, 'handlers');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				handler = $iter1_nextval['$nextval'];
				if ($p['bool']($p['getattr'](self, 'isOpen'))) {
					handler['onOpen'](self);
				}
				else {
					handler['onClose'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fireEvent'] = $method;
		$method = $pyjs__bind_method2('setContentDisplay', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'isOpen'))) {
				self['addStyleName']('open');
				self['removeStyleName']('closed');
			}
			else {
				self['addStyleName']('closed');
				self['removeStyleName']('open');
			}
			self['contentWrapper']['setVisible']($p['getattr'](self, 'isOpen'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setContentDisplay'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DisclosurePanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DisclosurePanel', 'DisclosurePanel', $m['DisclosurePanel']);
	return this;
}; /* end pyjamas.ui.DisclosurePanel */


/* end module: pyjamas.ui.DisclosurePanel */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Event', 'pyjamas.DOM', 'pygwt']
*/
