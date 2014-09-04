'use strict';

angular.module('app', [
    'ngAnimate',
    'ngCookies',
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

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$httpProvider.defaults.timeout = 5000;

	$urlRouterProvider
		.otherwise('/sticker');

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
			templateUrl: 'tpls/app.html',
			controller: 'app'
		})

		.state('app.auth', {
			url: '/auth',
			views: {
				'auth@app': {
					templateUrl: 'tpls/app.auth.html',
					controller: 'app.auth'
				},
				'viewPreload@app': {
					templateUrl: 'tpls/app.sticker.html'
				}
			}
		})

		.state('app.sticker', {
			url: '/sticker',
			views: {
				'view1@app': {
					templateUrl: 'tpls/app.sticker.html',
					controller: 'app.sticker'
				},
				'viewPreload@app': {
					templateUrl: 'tpls/app.sticker.detail.html'
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
