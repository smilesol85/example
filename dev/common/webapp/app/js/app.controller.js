/*
#TODO [js] animate lock
#TODO [js] detail page 에서 하단 도달했을때 list 페이지 로딩
#TODO [js] animate 분기 처리
#TODO [markup] 전체 페이지 로딩
*/

angular.module('app.controller', [])

.run(function($rootScope, $timeout) {
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

	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		switch(toState.name) {
			case 'app':
			case 'app.sticker':
				$rootScope.titleText = 'Sticker Shop';
				$rootScope.titleBack = false;
				break;
			case 'app.sticker.detail':
				$rootScope.titleText = 'Sticker Detail';
				$rootScope.titleBack = true;
				break;
		}
	})

	$rootScope.$watch('hang', function(nv) {
		if(nv === true) {
			$rootScope.loading = '어맛... ㅠ^ㅠ...힝...';
			$timeout(function() {
				$rootScope.hang = false;
				$rootScope.loading = false;
			}, 5000);
		}
	})
})


.controller('app', function($rootScope, $scope, $state, $view, $uiViewScroll, $http, $timeout, $ext) {

	$scope.$on('$viewContentLoaded', function() {
		$rootScope.loading = false;
	})

	$scope.items = {};
	$scope.lists = {};
	$scope.listName = 'top';

	$scope.getStickerItems = function(type, loadMore) {


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
			page: page
		}

		if($rootScope.hang) return false;
		if(page === 1) $rootScope.loading = true;
		$ext.API.getStickerItems(function(res) {
			$scope.lists[type].page = page;
			$rootScope.loading = false;
			$scope.lists[type].items   = $scope.lists[type].items.concat(res.list);
			$scope.lists[type].hasNext = res.hasNext;
		}, function(err) {
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
			}, options)
		}
	}

	$scope.viewSticker = function(lid) {
		if(!lid) return false;
		$scope.getStickerItem(lid, function() {
			$state.transitionTo('app.sticker.detail', {lid: lid});
		});
	}
})

.controller('app.sticker', function($scope) {

})

.controller('app.sticker.detail', function($scope, $state, $stateParams) {
	var lid = $stateParams.lid;
	if(!lid) {
		$state.transitionTo('app.sticker');
		return false;
	}

	$scope.getStickerItem(lid, function(item) {
		$scope.item = item;
	})

	$scope.$on('$destroy', function() {
		delete $scope.item;
	})

})
