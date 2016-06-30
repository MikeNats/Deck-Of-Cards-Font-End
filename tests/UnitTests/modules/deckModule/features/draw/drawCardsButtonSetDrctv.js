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
			$rootScope.activeCards = [{}];
			$rootScope.cards = [{
				active: false
			}];
			$rootScope.cards = [{
				active: false
			}];
			$rootScope.cards = [{
				active: false
			}];
			_drawCardsFctry_ = jasmine.createSpy();
			element = $compile(`<draw-cards></draw-cards>`)($rootScope);
			$rootScope.$digest();
		});
	});


	it('should increase the length of activeCards if there are inactiveCards', () => {
		$rootScope.numOfCardsToDraw = 1;
		$rootScope.drawCards();

		expect($rootScope.activeCards.length).toEqual(2);
	});
	it('should not increase the length of activeCards if there are no inactiveCards', () => {
		$rootScope.numOfCardsToDraw = 1;
		$rootScope.cards = [];
		$rootScope.drawCards();

		expect($rootScope.activeCards.length).toEqual(1);
	});
	it('should set the scope message', () => {
		$rootScope.drawCards();
		$rootScope.numOfCardsToDraw = 1;

		expect($rootScope.message).toContain('You have picked in total 2');
	});
	it('should set numOfCardsToDraw to zero', () => {
		$rootScope.drawCards();

		expect($rootScope.numOfCardsToDraw).toEqual(0);
	});

});