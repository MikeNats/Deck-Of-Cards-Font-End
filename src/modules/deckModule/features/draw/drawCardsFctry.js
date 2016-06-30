'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name drawCardsFctry
 * @memberof module:deckModule
 * @description For each given number of cards to be drawn, returns an array
 * with the same length of the given card number that contains,
 * non active cads,
 * starting from the top on the given cards array
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../../deckModule';

deckModule.factory('drawCardsFctry', [() => {
	return (cards, numberOfCards) => {
		let drawnCardsNum = 0,
			drawnCards = [];

		for (let i = 0; i < cards.length; i++) {
			if (!cards[i].active) {
				if (drawnCardsNum !== +numberOfCards) { //numberOfCards is DOM value
					drawnCardsNum++;
					cards[i].active = true;
					drawnCards.push(cards[i]);
				}
			}
		}
		return drawnCards;
	};
}]);