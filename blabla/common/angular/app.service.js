angular.module('app.service', [])

.filter('valid', function(){
	return function(text){
		if(text === 0){
			return "No Expiry Date";
		} else if(text !== undefined) {
			return "Valid for - " + text + " days";
		}
	};
})

.directive('ngSrc', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
        	if(attr.ngSrc) {
        		element.addClass('loadingImage');
        		scope.render.total++;
        		scope.render.list.push(attr.ngSrc);
            	element.on('load', scope.imgLoaded);
            }
        }
    }
})

.service('$ext', function($http, $rootScope, $state, $timeout) {
	var urls = {
		stickerItems:   'http://ext.zetyx.com/wapi/v1/info/sticker.json?mode=list',
		stickerDetails: 'http://ext.zetyx.com/wapi/v1/info/sticker.json?mode=detail',
		//stickerItems:   'http://10.70.22.110:9801/wapi/v1/info/sticker.json?mode=list',
		//stickerDetails: 'http://10.70.22.110:9801/wapi/v1/info/sticker.json?mode=detail',
		addLog:         'http://ext.zetyx.com/wapi/v1/logs/addLog.json'
	}
	var apis = {
		getStickerItems: function(success, error, options) {
			if($rootScope.busy && options.page > 1)
				return false;

			var options = angular.extend({}, options);
			var url = urls.stickerItems 
				+ (options.page ? '&page=' + options.page : '')
				+ (options.type ? '&type=' + options.type : '');

			$rootScope.busy = true;
			var _log = new log({
				name: 'getStickerItems',
				type: 'AJAX'
			});

			//console.log('CALL','getStickerItems', options);
			$http
				.get(url)
				.success(function(res) {
					//console.log('RECV', 'getStickerItems', res);
					_log.report({
						url: url,
						success: (res.status === 0) ? true : false,
						result: res
					})
					$timeout(function() {
						$rootScope.busy = false;
					});
					if(res.status == 0) {
						for(var i = 0; i < res.list.length; i++) {
							res.list[i].lid = btoa(res.list[i].locatedId);
						}
						if(success) success(res);
					} else {
						if(error) error(res);
					}
				})
				.error(function(err, status) {
					console.log('ERROR', 'getStickerItems', err, status);
					_log.report({
						url: url,
						success: false,
						result: err,
						status: status
					})
					$timeout(function() {
						$rootScope.busy = false;
					});
					if(error) error(err);
				})
		},
		getStickerItem: function(success, error, options) {
			if($rootScope.busyItem)
				return false;

			var options = angular.extend({}, options);
			var url = urls.stickerDetails
				+ ('&lid=' + options.lid)
				+ (options.lang ? '&lang=' + options.lang : '&lang=en');

			$rootScope.busyItem = true;
			var _log = new log({
				name: 'getStickerItem',
				type: 'AJAX'
			});

			//console.log('CALL','getStickerItem', options);
			$http
				.get(url)
				.success(function(res) {
					//console.log('RECV', 'getStickerItem', res);
					_log.report({
						url: url,
						success: (res.status === 0) ? true : false,
						result: res
					})
					$rootScope.busyItem = false;
					if(res.status == 0) {
						if(success) success(res);
					} else {
						if(error) error(res);
					}
					if(success) success(res);
				})
				.error(function(err, status) {
					console.log('ERROR', 'getStickerItem', err, status);
					_log.report({
						url: url,
						success: false,
						result: err,
						status: status
					})
					$rootScope.busyItem = false;
					if(error) error(err);
				})
		}
	}
	var log = function(options) {
		var options = angular.extend({}, options)
		var args = {
			name:      options.name,
			startTime: options.startTime || new Date().getTime(),
			endTime:   null,
			execTime:  null,
			state:     $state.current.name
		}
		return {
			args: angular.extend(args, options),		
			report: function(options) {
				if(options) this.args = angular.extend(this.args, options);
				this.args.endTime = options.endTime || new Date().getTime();
				this.args.execTime = options.execTime || this.args.endTime - this.args.startTime;
				var net = LCS.Interface.getNetworkStatus();
				this.args.network = net.isMobile ? 'mobile' : net.isWiFi ? 'wifi' : net.isActive ? 'network' : false;
				//console.log('CALL', 'addLog', this.args);
				$http
					.post(urls.addLog + '?'+ new Date().getTime(), this.args)
					.success(function(res) {
						//console.log('RECV', 'addLog', res, args);
						//console.log('Success addLog', res, args);
					})
					.error(function(err, status) {
						console.log('ERROR', 'addLog', err, status);
						//console.log('Error addLog', err, status);
					})
				return this;
			}
		}
	}

	return {
		URL: urls,
		API: apis,
		log: log
	}
})