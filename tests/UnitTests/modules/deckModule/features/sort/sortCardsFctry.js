'use strict';

let sortCardsFctry,
	cards,
	sorted;

describe('sortCardsFctry', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_sortCardsFctry_) => {
			sortCardsFctry = _sortCardsFctry_;
		});
	});

	it("should cards based on suite", () => {
		cards = [{
			suite: 'S'
		}, {
			suite: 'H'
		}, {
			suite: 'D'
		}, {
			suite: 'C'
		}];
		sorted = [{
			suite: 'C'
		}, {
			suite: 'S'
		}, {
			suite: 'H'
		}, {
			suite: 'D'
		}];

		expect(sortCardsFctry(cards)).toEqual(sorted);
	});
});