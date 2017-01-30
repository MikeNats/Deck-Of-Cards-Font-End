'use static';
/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name shuffleCardsFctry
 * @memberof module:deckModule
 * @description //https://www.frankmitchell.org/2015/01/fisher-yates/
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */
import deckModule from '../../deckModule';

deckModule.factory('shuffleCardsFctry', [() => {
	return (cards) => {
		let j,
			temp = null;

		for (let i = cards.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1))
			temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
		}
		return cards;
	};
}]);