'use strict';

/**
 * @framework angular
 * @kind module
 * @name app
 * @variable app
 * @public
 * @static
 * @requires ngRoute
 * @requires ngAnimate
 * @requires routeSateModule
 * @requires ui.router
 * @requires uiServices+module:deckModule
 * @description App router.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular.1.3.9
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'deckModule'])
	.run(['$rootScope', '$state', '$stateParams', '$window', '$location', ($rootScope, $state, $stateParams, $window, $location) => {
		//state checks
	}])
	.config(['$stateProvider', '$urlRouterProvider',
		($stateProvider, $urlRouterProvider) => { //Router
			$stateProvider.state('index', { // Home
				url: '/index',
				views: {
					indexPage: {
						templateUrl: 'App/pages/deck.html'
					}
				},
				data: {
					requireLogin: false
				}
			});
			$urlRouterProvider.otherwise('/index'); //Default redirect
	}]);