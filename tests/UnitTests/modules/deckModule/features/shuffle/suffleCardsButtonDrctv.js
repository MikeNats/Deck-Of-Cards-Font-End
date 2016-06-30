'use strict';

let $compile,
	$rootScope,
	drawCards,
	element,
	shuffleCardsFctry,
	mockCards,
	message;

describe('shuffleCards', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_$rootScope_, shuffleCardsFctry, _$compile_) => {
			$rootScope = _$rootScope_.$new();
			$compile = _$compile_;
			$rootScope.activeCards = [];
			$rootScope.cards = [{
					active: false,
					suite: 'D',
					number: '10'
				},
				{
					active: false,
					suite: 'C',
					number: '1'
				},
				{
					active: false,
					suite: 'H',
					number: '1'
				},
				{
					active: false,
					suite: 'D',
					number: '2'
			}];
			$rootScope.message = 'Lets play!!!';
			element = $compile(`<shuffle-cards></shuffle-cards>`)($rootScope);
			$rootScope.$digest();
		});
	});

	describe('Active cards are less than the non active', () => {

		it('should shuffle the cards', () => {
			mockCards = $rootScope
			$rootScope.shuffleCards();

			expect($rootScope.cards).not.toEqual(mockCards);
		});

		it('should set the message with a new value', () => {
			message = 'Lets play!!!'
			$rootScope.shuffleCards();

			expect($rootScope.message).not.toEqual(message);
		});
	});
	describe('Active cards length is the same with the length of non active', () => {
		beforeEach(() => {
			$rootScope.activeCards = $rootScope.cards
		});

		it('should not shuffle the cards', () => {
			mockCards = $rootScope.cards

			expect($rootScope.cards).toEqual(mockCards);
		});
		it('should not set the message with a new value', () => {
			message = 'Lets play!!!'
			$rootScope.shuffleCards();

			expect($rootScope.message).toEqual(message);
		});
	});
});