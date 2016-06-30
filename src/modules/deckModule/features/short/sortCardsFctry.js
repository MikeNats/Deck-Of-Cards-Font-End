'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name sortCardsFctry
 * @memberof module:deckModule
 * @description Returns a sorted array
 * First level of shorting: Per first per suite attribute
 * Second level of sorting: Per per number attribute
 * Priorities per suite: 'C', 'S', 'H', 'D'
 * Priorities per number: 14...2
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../../deckModule';

deckModule.factory('sortCardsFctry', [() => {
	let compare = (a, b) => {
		if (a.number > b.number) {
			return -1;
		} else if (a.number < b.number) {
			return 1;
		} else {
			return 0;
		}
	};

	return (activeCards) => {
		return activeCards.filter(card => {
				return card.suite === 'C';
			})
			.sort(compare)
			.concat(
				activeCards.filter(card => {
					return card.suite === 'S';
				}).sort(compare),

				activeCards.filter(card => {
					return card.suite === 'H';
				}).sort(compare),

				activeCards.filter(card => {
					return card.suite === 'D';
				}).sort(compare)
			);
	};
}]);