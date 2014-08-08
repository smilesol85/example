

.controller('apps', function($rootScope, $scope, $state, $view, $uiViewScroll, $http, $timeout) {
//	$scope.$on('$viewContentLoaded', function() {
//		$timeout(function() {
//			var prevPage = $('[data-ui-body].ng-animate.ng-hide-remove');
//			var nScrollTop = prevPage.attr('data-scroll-top');
//
//			if(!prevPage.length) return false;
//			if(nScrollTop) {
//				$scope.controllScroll(nScrollTop);
//			}
//		});
//	})

//	if (device && device.platform === 'iOS' && parseFloat(device.version) >= 7.0) {
//		document.body.style.marginTop = '20px';
//	}

	/*
	 *
	 */
	$scope.navController = function(nav){
		$scope.active = true;
	};

	/*
	 * get list
	 */
	var page = 0;
	$scope.hasNext = true;
	$scope.loading = false;
	$scope.getListSticker = [];

	$scope.getListJson = function(more, defaultType) {
		if(!$scope.hasNext || $scope.loading) {
			return false;
		} else {}

		if(more) {
			page++;
		} else {
			page = 1;
			$scope.getListSticker = [];
		}

		var setUrl = urls.listSticker+'&type='+defaultType+'&page='+page;
		var startTime = new Date().getTime();
		var apiName = 'info/sticker.json';
		$scope.loading = true;

		$http
			.get(setUrl)
			.success(function(data, status, headers, config) {
				var endTime = new Date().getTime();
				var execTime = endTime - startTime;

				$http.post(urls.logs, {
					apiName: apiName,
					apiArgs: setUrl,
					execTime: execTime,
					startTime: startTime,
					endTime: endTime,
					messge: 'list success' // #NOTE data.status !== 0
				}).success(function(ret) {
					messages('log sent: list success');
				})

				$scope.loading = false;
				if(data.status !== 0) {
					messages('list error. error code: '+data.status);
					return false;
				}

				if(data.list) {
					$scope.hasNext = data.hasNext;
					$scope.getListSticker = $scope.getListSticker.concat(data.list);
				}
			})
			.error(function(data, status, headers, config) {
				var endTime = new Date().getTime();
				var execTime = endTime - startTime;

				$http.post(urls.logs, {
					apiName: apiName,
					apiArgs: setUrl,
					execTime: execTime,
					startTime: startTime,
					endTime: endTime,
					messge: status
				}).success(function(ret) {
					messages('log sent: list error');
				})

				$scope.loading = false;
			})
	}

	/*
	 * get detail
	 */
	$scope.getDetailSticker = [];

	$scope.changeDetail = function(lid) {
		if(!lid) alert(lid);
		$state.transitionTo('app.sticker.detail', {lid: lid});
	}

	$scope.getDetailJson = function(lid) {
		var setUrl = urls.detailSticker+'&lid='+lid;
		var startTime = new Date().getTime();
		var apiName = 'info/sticker.json';

		$http
			.get(setUrl)
			.success(function(data, status, headers, config) {
				var endTime = new Date().getTime();
				var execTime = endTime - startTime;

				$http.post(urls.logs, {
					apiName: apiName,
					apiArgs: setUrl,
					execTime: execTime,
					startTime: startTime,
					endTime: endTime,
					messge: 'detail success'
				}).success(function(ret) {
					messages('log sent: detail success');
				})

				$scope.getDetailSticker = data;

				var itemStickerArr = $scope.getDetailSticker.stickers;
				var itemStickers = [];
				for(i = 0; i < itemStickerArr.length; i++) {
					if(i % 4 == 0) itemStickers.push([]);
					itemStickers[itemStickers.length-1].push(itemStickerArr[i]);
				}
				$scope.getDetailSticker.itemStickers = itemStickers;
			})
			.error(function(data, status, headers, config) {
				var endTime = new Date().getTime();
				var execTime = endTime - startTime;

				$http.post(urls.logs, {
					apiName: apiName,
					apiArgs: setUrl,
					execTime: execTime,
					startTime: startTime,
					endTime: endTime,
					messge: status
				}).success(function(ret) {
					messages('log sent: detail error');
				})
			})
	}

	/*
	 * scroll
	 */
	$scope.elBody = document.body;

	$scope.elBody.addEventListener('touchstart', function(event) {
		$scope.startTopstart = $scope.elBody.scrollTop;
		messages('touch start: '+$scope.startTopstart);
	});

	$scope.elBody.addEventListener('touchmove', function(event) {
		$scope.startTopMove = $scope.elBody.scrollTop;
		$scope.loadHeight = $scope.elBody.offsetHeight + 20;
		messages('touch move: '+$scope.startTopMove);

		if($scope.startTopMove > $scope.loadHeight) {}

	});

	$scope.elBody.addEventListener('touchend', function(event) {
		$scope.startTopEnd = $scope.elBody.scrollTop;
		messages('touch end: '+$scope.startTopEnd);

		if($scope.startTopEnd < 37) {
			if($scope.startTopstart - $scope.startTopEnd < 0) {
				$scope.controllScroll(37);
			}
			if($scope.startTopstart - $scope.startTopEnd > 0) {
				$scope.controllScroll(0);
			}
		} else {
			var _parent = $(event.target).parents('[data-ui-body]');
			if(_parent.length) {
				_parent = _parent.first();
				_parent.attr('data-scroll-top', $scope.elBody.scrollTop);
			}
		}
	});

	$scope.controllScroll = function(scroll) {
		$('body').scrollTop(scroll);
	};


//	$scope.getDetailSticker = [];
//	var getDetailJson = $http.get(urls.testDetail);
//
//	getDetailJson.success(function(data, status, headers, config) {
//		console.log('Detail JSON get success');
//		$scope.getDetailSticker = data;
//
//		var itemStickerArr=$scope.getDetailSticker.stickers;
//		var itemStickers = [];
//		for(i=0;i<itemStickerArr.length;i++){
//			if(i % 4 == 0) itemStickers.push([]);
//			itemStickers[itemStickers.length-1].push(itemStickerArr[i]);
//		}
//		$scope.getDetailSticker.itemStickers = itemStickers;
//		console.log($scope.getDetailSticker);
//	});
//	getDetailJson.error(function(data, status, headers, config) {
//		console.log('Detail JSON get failed');
//	});
})

.controller('apps.sticker', function($rootScope, $scope) {
	console.log(123);

	$scope.changeDetail = function(lid) {
		console.log(lid);
	}
})

.controller('apps.sticker.detail', function($rootScope, $scope, $stateParams) {
	var lid = $stateParams.lid;
	$scope.getDetailJson(lid);
})
