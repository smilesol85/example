'use strict';

angular.module('app', [
    'ngAnimate',
	'app.controller',
	'app.service',
	'app.factory',
	'ui.router',
	'ngTouch',
	'ngSanitize',
	'infinite-scroll',
	'angular-websql',
	'LocalStorageModule'
])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.otherwise('/sticker');

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
			templateUrl: 'tpls/app.html',
			controller: 'app'
		})

		.state('app.sticker', {
			url: '/sticker',
			views: {
				'view1@app': {
					templateUrl: 'tpls/app.sticker.html',
					controller: 'app.sticker'
				}
			}
		})

		.state('app.sticker.detail', {
			url: '/{lid}',
			views: {
				'view2@app': {
					templateUrl: 'tpls/app.sticker.detail.html',
					controller: 'app.sticker.detail'
				}
			}
		})
})
