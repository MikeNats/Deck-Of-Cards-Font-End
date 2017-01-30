'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type directive
 * @name drawCards
 * @requires deckModule+module:deckModule.drawCardsFctry
 * @memberof module:deckModule
 * @Description Encapsulates draw Cards button functionality
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular.1.3.9
 */

import deckModule from '../../deckModule';

deckModule.directive('drawCards', ['drawCardsFctry', (drawCardsFctry) => {
	return {
		restrict: 'E',
		template: `<fieldset>
						<span class="columns">{{numOfCardsToDraw}}</span>
						<input id="slider" class="columns" min="0" ng-model="numOfCardsToDraw" max="{{cards.length - activeCards.length}}" type="range"/>
						<button id='draw' ng-click="drawCards()" class='button'>Draw Cards</button>
					</fieldset>`,
		link: (scope, elem, attrs) => {
			scope.drawCards = () => {
				scope.activeCards = scope.activeCards.concat(drawCardsFctry(scope.cards, scope.numOfCardsToDraw)); //increase the number of active cards
				scope.message = 'You draw ' + scope.numOfCardsToDraw + '. You have picked in total ' + scope.activeCards.length + ' cards';
				scope.numOfCardsToDraw = 0;
			}
		}
	}
}]);