angular.module('app.service', [])

.filter('valid', function(){
	return function(text){
		if(text==0){
			return "유효기간 무제한";
		}else{
			return text+" 일";
		}
	};
})

.service('$ext', function($http, $rootScope) {
	var urls = {
		stickerItems:   'http://ext.zetyx.com/wapi/v1/info/sticker.json?mode=list',
		stickerDetails: 'http://ext.zetyx.com/wapi/v1/info/sticker.json?mode=detail',
		addLog:         'http://ext.zetyx.com/wapi/v1/logs/addLog.json'
	}
	var apis = {
		getStickerItems: function(success, error, options) {
			if($rootScope.busy)
				return false;

			var options = angular.extend({}, options);
			var url = urls.stickerItems
				+ (options.type ? '&type=' + options.type : '')
				+ (options.page ? '&page=' + options.page : '');

			$rootScope.busy = true;
			var _log = new log({
				name: 'getStickerItems',
			});

			$http
				.get(url)
				.success(function(res) {
					_log.report({
						url: url,
						success: (res.status === 0) ? true : false,
						result: res
					})
					$rootScope.busy = false;
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
					_log.report({
						url: url,
						success: false,
						result: err,
						status: status
					})
					$rootScope.busy = false;
					if(error) error(err);
				})
		},
		getStickerItem: function(success, error, options) {
			if($rootScope.busy)
				return false;

			var options = angular.extend({}, options);
			var url = urls.stickerDetails
				+ ('&lid=' + options.lid)
				+ (options.lang ? '&lang=' + options.lang : '&lang=en');

			$rootScope.busy = true;
			var _log = new log({
				name: 'getStickerItem',
			});

			$http
				.get(url)
				.success(function(res) {
					_log.report({
						url: url,
						success: (res.status === 0) ? true : false,
						result: res
					})
					$rootScope.busy = false;
					if(res.status == 0) {
						if(success) success(res);
					} else {
						if(error) error(res);
					}
					if(success) success(res);
				})
				.error(function(err, status) {
					_log.report({
						url: url,
						success: false,
						result: err,
						status: status
					})
					$rootScope.busy = false;
					if(error) error(err);
				})
		}
	}
	var log = function(options) {
		var options = angular.extend({}, options)
		var args = {
			name:      options.name,
			startTime: new Date().getTime(),
			endTime:   null,
			execTime:  null
		}
		return {
			args: angular.extend(args, options),
			report: function(options) {
				if(options) this.args = angular.extend(this.args, options);
				this.args.endTime = new Date().getTime();
				this.args.execTime = this.args.endTime - this.args.startTime;

				$http
					.post(urls.addLog, this.args)
					.success(function(res) {
						//console.log('Success addLog', res, args);
					})
					.error(function(err, status) {
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
