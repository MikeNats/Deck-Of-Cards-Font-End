'use strict';

let shuffleCardsFctry,
	cards,
	suffeled;

describe('shuffleCards', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_shuffleCardsFctry_) => {
			shuffleCardsFctry = _shuffleCardsFctry_;
		});
	});

	it("should shuffle the given array", () => {
		cards = [0, 1, 3, 4];
		suffeled = shuffleCardsFctry(cards)[0];

		expect(suffeled[0]).not.toEqual(cards[0]);
	});
});