'use static';
/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name deckApiFctry
 * @memberof module:deckModule
 * @description End point for getting the cards.
 * @requires  $http
 * @requires deckModule+module:deckModule.CARDS_API_PATHS
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../deckModule';

deckModule.factory('deckApiFctry', ['$http', 'CARDS_API_PATHS', ($http, CARDS_API_PATHS) => {
	return {
		getCards: () => {
			return $http.get(CARDS_API_PATHS.GET_CARDS);
		}
	};
}]);