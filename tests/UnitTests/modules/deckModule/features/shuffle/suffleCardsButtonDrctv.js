// 'use static';
// /**
//  * @framework angular
//  * @kind module
//  * @name usersAuthModule
//  * @public
//  * @static
//  * @description Contains User Authentication Services.
//  * @author Michail Tsougkranis
//  * @version 1.0
//  * @since Angular 1.5.5
//  */

// import deckModule from '../deckModule';

// deckModule.directive('shuffleCards', ['shuffleCardsFctry', (shuffleCardsFctry) => {
// 	return {
// 		restrict: 'E',
// 		template: `<fieldset>
// 						<button id="shuffle" ng-click="shuffleCards()" class="button" ng-class="{'inactive': activeCards.length === cards.length}">Shuffle Cards</button>
// 					</fieldset>`,
// 		link: (scope, elem, attrs) => {
// 			scope.shuffleCards = () => {
// 				if (scope.activeCards.length !== scope.cards.length) {
// 					scope.cards = shuffleCardsFctry(scope.cards);
// 					scope.message = 'Cards are shuffled';
// 				}
// 			}
// 		}
// 	}
// }]);