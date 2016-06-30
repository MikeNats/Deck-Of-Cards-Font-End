'use strict';

let $compile,
	$rootScope,
	drawCards,
	element,
	drawCardsFctry;

describe('drawCardsFctry', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_$rootScope_, _drawCardsFctry_, _$compile_) => {
			$rootScope = _$rootScope_.$new();
			$compile = _$compile_;
			$rootScope.activeCards = [];
			$rootScope.cards = [{
				active: false
			}];
			drawCardsFctry = jasmine.createSpy();
			element = $compile(`<draw-cards></draw-cards>`)($rootScope);
			$rootScope.$digest();
		});
	});

	it('should set the scope message', () => {

		$rootScope.drawCards();

		expect($rootScope.message).toContain('You draw ');
	});
	it('should set numOfCardsToDraw to zero', () => {

		$rootScope.drawCards();

		expect($rootScope.numOfCardsToDraw).toEqual(0);
	});
	it('should set the activeCards', () => {
		$rootScope.activeCards = [];
		$rootScope.drawCards();

		expect($rootScope.activeCards.length).toEqual(1);
	});

});