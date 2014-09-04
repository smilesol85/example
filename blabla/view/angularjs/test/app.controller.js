angular.module('app.controller', [])

.run(function($rootScope, $state, $timeout, $cookies, $document, $window, $ext) {

	if(startTime) {
		var _log_init = new $ext.log({ name: 'init' });
		_log_init.startTime = startTime;
		_log_init.report({
			url: location.href,
			type: 'INIT',
			success: true
		})
	}

	function stateLengths(toState) {
		var ret = [];
		var stateName = null;
		var stateSplit = toState.name.split('.');

		for(var i = 0; i < stateSplit.length; i++) {
			if(stateName) {
				stateName = [stateName, stateSplit[i]].join('.');
			} else {
				stateName = stateSplit[i];
			}
			ret.push(stateName);
		}
		return ret;
	}
	function stateDirection(from, to) {
		if(new RegExp('^'+from.name).test(to.name)) {
			return 'in';
		} else if(new RegExp('^'+to.name).test(from.name)) {
			return 'out';
		} else {
			return 'swap';
		}
	}
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.state     = toState;
		$rootScope.states    = stateLengths(toState);
		$rootScope.direction = stateDirection(fromState, toState);
		$rootScope.loading   = true;
	})

	$window.addEventListener('scroll', function(event) {
		var top = document.body.scrollTop;
		var el = $('[ui-view][ng-state="'+$state.current.name+'"]');
		el.css({ top: '-' + top + 'px' })
		el.attr('scroll-top', top);
	})

	document.body.addEventListener('touchstart', function(event) {
		if($(event.target).parents('.ng-enter, .ng-leave, .ng-hide-add, .ng-hide-remove').length || loading) {
			event.preventDefault();
			return false;
		}
	})

	$('body').bind('touchend touchstart touchmove scroll scrollend scrollstart', $rootScope.scrollHideElement)

	$rootScope.scrollHideElement = function() {
		var top = document.body.scrollTop - 1000;
		var bottom = document.body.scrollTop + document.body.offsetHeight + 1000;
		$('.listStickerItem').each(function() {
			var elOffset = $(this).offset();
			var elTop = elOffset.top;
			var elBottom = elTop + $(this).outerHeight();
			if(elTop < top || elTop > bottom) {
				$(this).css('visibility','hidden');
			} else {
				$(this).css('visibility','visible');
			}
		})
	}

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		var top = $('[ui-view][ng-state="'+$state.current.name+'"]').attr('scroll-top') || 0;
		if($rootScope.direction == 'out') {
			$timeout(function() {
				document.body.scrollTop = top;
			})
		}
		$rootScope.loading = false;
		if(!$rootScope.auth) {
			$state.transitionTo('app.auth');
			return false;
		}
	})

	$rootScope.$watch('loading', function(nv) {
		loading = nv;
	})

	$rootScope.$watch('hang', function(nv) {
		if(nv === true) {
			$rootScope.loading = false;
			$timeout(function() {
				$rootScope.hang = false;
			}, 5000);
		}
	})

	$rootScope.$watch('auth', function(nv, ov) {
		if(nv !== ov) {
			if(!nv) {
				$state.transitionTo('app.auth');
			}
		}
	})

	$rootScope.auth = $cookies.auth || false;

	if($rootScope.auth) {
		$state.go('app.sticker');
		return false;
	} else {
		$state.transitionTo('app.auth');
		return false;
	}


})


.controller('app', function($rootScope, $scope, $state, $stateParams, $timeout, $ext, $cookies, $cookieStore) {
	$scope.items = {};
	$scope.lists = {};
	$scope.listName = 'top';

	$scope.nextTab = function() {
		var currName = $scope.listName;
		var newName;
		if(currName == 'top') {
			newName = 'new';
		} else if(currName == 'new') {
			newName = 'new_creators';
		}
		if(newName) {
			$scope.tabDirection = 'left';
			if(document.body.scrollTop > 50) {
				document.body.scrollTop = 0;
				$timeout(function() {
					$scope.getStickerItems(newName, null, true);
				},150);
			} else {
				$scope.getStickerItems(newName, null, true);
			}
		}
	}
	$scope.prevTab = function() {
		var currName = $scope.listName;
		var newName;
		if(currName == 'new_creators') {
			newName = 'new';
		} else if(currName == 'new') {
			newName = 'top';
		}
		if(newName) {
			$scope.tabDirection = 'right';
			if(document.body.scrollTop > 50) {
				document.body.scrollTop = 0;
				$timeout(function() {
					$scope.getStickerItems(newName, null, true);
				},150);
			} else {
				$scope.getStickerItems(newName, null, true);
			}
		}
	}

	$scope.getStickerItems = function(type, loadMore, direction) {
		if(!direction) {
			if($scope.listName == 'top' && (type == 'new' || type == 'new_creators') || $scope.listName == 'new' && type == 'new_creators') {
				$scope.tabDirection = 'left';
			} else if($scope.listName == 'new_creators' && (type == 'new' || type == 'top') || $scope.listName == 'new' && type == 'top') {
				$scope.tabDirection = 'right';
			}
		}

		if(!new RegExp('app.sticker').test($state.current.name)) return false;
		if(!$scope.lists[type]) {
			var page = 1;
			$scope.lists[type] = {
				type: type,
				page: page,
				items: [],
				hasNext: true
			}
		} else {
			var page = angular.copy($scope.lists[type].page);
			if(!$scope.lists[type].hasNext && loadMore !== null) {
				return false;
			} else if(loadMore === true) {
				if($state.current.name != 'app.sticker') return false;
				page++;
			} else if(loadMore === false) {
				page = 1;
				$scope.lists[type].items = [];
			}
		}

		if(loadMore === null) {
			$scope.listName = type;
			if($scope.lists[type].items.length) {
				return;
			}
		}

		var options = {
			type: type,
			page: page,
			lang: 'en'
		}

		if($rootScope.hang) return false;
		if(page === 1) $rootScope.loading = true;
		$ext.API.getStickerItems(function(res) {
			$scope.lists[type].page = page;
			$rootScope.loading = false;
			$scope.lists[type].items   = $scope.lists[type].items.concat(res.list);
			$scope.lists[type].hasNext = res.hasNext;

			if(type == 'top' && page == 1) {
				$timeout(function() {
					$scope.getStickerItems('new');
				});
			} else if(type == 'new' && page == 1) {
				$timeout(function() {
					$scope.getStickerItems('new_creators');
				});
			}
		}, function(err) {
			page--;
			if(page < 1) page = 1;
			$rootScope.hang = true;
			$rootScope.loading = false;
		}, options)
	}

	$scope.getStickerItem = function(lid, success) {
		var options = {
			lid: atob(lid),
			lang: 'en'
		}

		if($scope.items[lid]) {
			if(success) success($scope.items[lid]);
			return $scope.items[lid];
		} else if(!$scope.items[lid]) {
			$rootScope.loading = true;
			$ext.API.getStickerItem(function(res) {
				$scope.items[lid] = res;

				var itemStickerArr=$scope.items[lid].stickers;
				var itemStickers = [];
				for(i = 0; i < itemStickerArr.length; i++){
					if(i % 4 == 0) itemStickers.push([]);
					itemStickers[itemStickers.length-1].push(itemStickerArr[i]);
				}

				$scope.items[lid].itemStickers = itemStickers;

				if(success) success(res);
			}, function(err) {
				$rootScope.hang = true;
				$rootScope.loading = false;
			}, options)
		}
	}

	$scope.viewStickers = function() {
		$state.transitionTo('app.sticker');
	}

	$scope.viewSticker = function(lid) {
		if(!lid) return false;
		$scope.getStickerItem(lid);
		$state.transitionTo('app.sticker.detail', {lid: lid});
	}

	$scope.fallbackImage = function(src) {
		src = src.replace(/(iphone|android)\/([^@]*)(\@2x)?\.png$/, 'LINEStorePC/$2.png');
	}

	$scope.reload = function() {
		$state.transitionTo($state.current, $stateParams, { reload: true, inherit: true, notify: true });
	}

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		delete $scope.item;
		/* TITLEBAR */
		var titleBarObjs = {
			back: {
				imgId:   'btn_default',
				iconId:  'icon_back',
				text:    'Back',
				visible: true,
				enable:  true,
				click: function() {
					var newState = toState.name.replace(/\.[a-z]+$/i,'');
					$state.transitionTo(newState, toParams);
				}
			},
			cancel: {
				imgId:   'btn_default',
				iconId:  'icon_back',
				text:    'Cancel',
				visible: true,
				enable:  true,
				click: function() {
					var newState = toState.name.replace(/\.[a-z]+$/i,'');
					$state.transitionTo(newState, toParams);
				}
			},
			close: {
				imgId:   'btn_default',
				iconId:  'icon_close',
				text:    'Close',
				visible: true,
				enable:  true,
				click: function() {
					if(LCS) LCS.Interface.closeWebView();
				}
			},
			setting: {
				imgId:   'btn_default',
				iconId:  'icon_setting',
				text:    'Setting',
				visible: true,
				enable:  true,
				click: function() {
					$cookieStore.remove('auth');
					$rootScope.auth = false;
					$state.transitionTo('app.auth');
				}
			},
			center: {
				text: '',
				clickable: true,
				click: function() {

				}
			}
		}
		var title = {
			resVersion: '1',
			pageKey:    btoa(toState.name),
			pageURL:    location.href,
			entryPage:  false,
			visible:    true,
			titleBar:   {
				left: titleBarObjs.back,
				right: titleBarObjs.close,
				center: titleBarObjs.center,
				back: {}
			},
			titleBarType: ['simplenavy']
		}

		switch(toState.name) {
			case 'app.auth':
				$scope.titleText = title.titleBar.center.text = 'Authenticate';
				$scope.titleBack = false;
				if(is.has('android')) {
					title.entryPage = true;
					title.titleBar.left.visible = false;
					title.titleBar.right.visible = false;
				} else {
					title.entryPage = true;
					title.titleBar.left.visible = false;
					title.titleBar.right = angular.copy(titleBarObjs.close);
				}
				break;
			case 'app.sticker':
				$scope.titleText = title.titleBar.center.text = 'Sticker Shop';
				$scope.titleBack = false;
				if(is.has('android')) {
					title.entryPage = true;
					title.titleBar.left.visible = false;
					title.titleBar.right = angular.copy(titleBarObjs.setting);
				} else {
					title.entryPage = true;
					title.titleBar.left = angular.copy(titleBarObjs.setting);
				}
				break;
			case 'app.sticker.detail':
				$scope.titleText = title.titleBar.center.text = 'Sticker Detail';
				$scope.titleBack = true;
				if(is.has('android')) {
					title.entryPage = false;
					title.titleBar.left.visible = false;
					title.titleBar.right = angular.copy(titleBarObjs.setting);
				} else {
					title.entryPage = false;
					title.titleBar.left = angular.copy(titleBarObjs.back, {
						click: function() {
							$state.transitionTo('app.sticker');
						}
					});
				}

				break;
		}

		$scope.title = title;
	});

	$scope.$watch('title', function(title) {
		if(!LCS || !title.titleBar.center.text || title.titleBar.center.text == '') return false;
		$scope.isLCS = true;
		LCS.Interface.updateTitleBar(title);
		LCS.Interface.registerTitleBarCallback(function(event) {
			switch(event.target) {
				case 'BACK':
					if(title.titleBar.back.click) {
						title.titleBar.back.click();
						break;
					}
				case 'LBUTTON':
					title.titleBar.left.click();
					break;
				case 'RBUTTON':
					title.titleBar.right.click();
					break;
				case 'CENTER':
					title.titleBar.center.click();
					break;
				case 'CLOSE':
					titleBarObjs.close.click();
					break;
			}
		})
	}, true)


	/* Image Rendering Timer */
	$scope.render = {
		total: 0,
		count: 0,
		start: 0,
		ended: 0,
		exec: 0,
		list: [],
	}

	$scope.imgLoaded = function() {
		$(this).addClass('loadedImage').removeClass('loadingImage');
		$scope.render.count++;
	}

	$scope.$watch('render.total', function(nv, ov) {
		if(nv > 0 && ov === 0) {
			//console.log('start', nv, ov);
			$scope.render.count = 0;
			$scope.render.start = new Date().getTime()
			$scope.render.ended = 0;
			$scope.render.exec  = 0;
		} else if(nv > ov) {
			//console.log('update', nv, ov);
		}
	})

	$scope.$watch('render.count', function(nv, ov) {
		if(nv === $scope.render.total && nv > 0) {
			$scope.render.ended = new Date().getTime();
			$scope.render.exec  = $scope.render.ended - $scope.render.start;
			var result = angular.copy($scope.render);
			$scope.render = {
				total: 0,
				count: 0,
				start: 0,
				ended: 0,
				exec: 0,
				list: []
			}
			//console.log('IMAGE RENDERING', result);
			$ext.log({
				name: 'img',
				type: 'IMAGE'
			}).report({
				result: {
					total: result.total,
					list: result.list
				},
				startTime: result.start,
				endTime: result.ended,
				execTime: result.exec
			});
		}
	})
})

.controller('app.auth', function($rootScope, $scope, $state, $timeout, $cookies) {
	$scope.doAuth = function() {
		if($scope.inputkey === '123321') {
			$cookies.auth = new Date().getTime();
			$rootScope.auth = new Date().getTime();
			$state.go('app.sticker');
		} else {
			$scope.inputkey = '';
		}
	}
})

.controller('app.sticker', function($rootScope, $scope, $state, $timeout, $ext) {
})

.controller('app.sticker.detail', function($rootScope, $scope, $state, $stateParams) {
	var lid = $stateParams.lid;

	if(!lid) {
		$state.transitionTo('app.sticker');
		return false;
	}

	$scope.getStickerItem(lid);

	$scope.$watch('items', function() {
		if($scope.items[lid]) {
			$scope.item = $scope.items[lid];
			$rootScope.loading = false;
		}
	}, true);

	$scope.$on('$destroy', function() {
		delete $scope.item;
	})

})
