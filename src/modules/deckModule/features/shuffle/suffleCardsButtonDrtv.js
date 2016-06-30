'use static';
/**
 * @framework angular
 * @kind jsConcept
 * @type directive
 * @name shuffleCards
 * @memberof module:deckModule
 * @requires deckModule+module:deckModule.shuffleCardsFctry
 * @Description Encapsulates shuffle button functionality
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular.1.3.9
 */
import deckModule from '../../deckModule';

deckModule.directive('shuffleCards', ['shuffleCardsFctry', (shuffleCardsFctry) => {
	return {
		restrict: 'E',
		template: `<fieldset>
						<button id="shuffle" ng-click="shuffleCards()" class="button" ng-class="{'inactive': activeCards.length === cards.length}">Shuffle Cards</button>
					</fieldset>`,
		link: (scope, elem, attrs) => {
			scope.shuffleCards = () => {
				if (scope.activeCards.length <= scope.cards.length) { //while cards have not been drawn
					scope.cards = shuffleCardsFctry(scope.cards);
					scope.message = 'Cards are shuffled';
				}
			}
		}
	}
}]);