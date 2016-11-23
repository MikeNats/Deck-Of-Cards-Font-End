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

var app = angular.module('app', ['panelModule']);

  