'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name deckCtrl
 * @memberof module:deckModule
 * @Description Fetch Cards and initialize module scope.
 * @requires $scope
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import panelModule from '../panelModule';

panelModule.controller('panelCtrl', ['$scope', ($scope) => {

	console.log('ivan')
}]);    