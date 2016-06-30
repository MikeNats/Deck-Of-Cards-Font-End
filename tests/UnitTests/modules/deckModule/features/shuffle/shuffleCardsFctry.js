'use strict';

let shuffleCardsFctry,
	cards;

describe('shuffleCards', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_shuffleCardsFctry_) => {
			shuffleCardsFctry = _shuffleCardsFctry_;
		});
	});

	it("should shuffle the given array", () => {
		expect(shuffleCardsFctry([0, 1, 3, 4, 5])).not.toEqual([0, 1, 3, 4, 5]);
	});
});