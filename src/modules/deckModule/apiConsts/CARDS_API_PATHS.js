'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type constant
 * @name CARDS_API_PATHS
 * @memberof module:deckModule
 * @Description Contains Api url
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../deckModule';

deckModule.constant('CARDS_API_PATHS', {
	GET_CARDS: '/api/cards',
});