'use strict';

let $compile,
	$rootScope,
	drawCards,
	element,
	drawCardsFctry;

describe('sortCards', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_$rootScope_, _drawCardsFctry_, _$compile_) => {
			$rootScope = _$rootScope_.$new();
			$compile = _$compile_;
			$rootScope.cards = [];
			$rootScope.activeCards = [{
				active: false,
				suite: 'D'
			}, {
				active: false,
				suite: 'C'
			}];
			element = $compile(`<sort-cards></sort-cards>`)($rootScope);
			$rootScope.$digest();
		});
	});

	it('should short active cards', () => {
		$rootScope.sortCards();

		expect($rootScope.activeCards[0].suite).toEqual('C');
	});
	it('should set message ', () => {
		$rootScope.message = '';
		$rootScope.sortCards();

		expect($rootScope.message).toEqual('Cards are sorted');
	});
});