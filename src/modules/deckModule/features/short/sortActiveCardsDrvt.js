'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type directive
 * @name sortCards
 * @memberof module:deckModule
 * @requires deckModule+module:deckModule.drawCardsFctry
 * @Description Encapsulates sortCard button functionality
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular.1.3.9
 */

import deckModule from '../../deckModule';

deckModule.directive('sortCards', ['sortCardsFctry', (sortCardsFctry) => {
	return {
		restrict: 'E',
		template: `<fieldset >
						<button ng-click="sortCards()" id="sort" class="button">Sort Cards</button>
					</fieldset>`,
		link: (scope, elem, attrs) => {
			scope.sortCards = () => {
				scope.activeCards = sortCardsFctry(scope.activeCards);
				scope.message = 'Cards are sorted';
			}
		}
	};
}]);