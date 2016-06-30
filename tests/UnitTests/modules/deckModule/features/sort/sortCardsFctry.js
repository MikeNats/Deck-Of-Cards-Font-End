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

	it("should sort cards based on suite", () => {
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
	it("should sort cards based on number", () => {
		cards = [{
			suite: 'D',
			number: 3
		}, {
			suite: 'D',
			number: 6
		}, {
			suite: 'D',
			number: 2
		}, {
			suite: 'D',
			number: 14
		}];
		sorted = [{
			suite: 'D',
			number: 14
		}, {
			suite: 'D',
			number: 6
		}, {
			suite: 'D',
			number: 3
		}, {
			suite: 'D',
			number: 2
		}];

		expect(sortCardsFctry(cards)).toEqual(sorted);
	});
	it("should sort cards based suite and number", () => {
		cards = [{
			suite: 'D',
			number: 3
		}, {
			suite: 'D',
			number: 6
		}, {
			suite: 'C',
			number: 2
		}, {
			suite: 'C',
			number: 14
		}];
		sorted = [{
			suite: 'C',
			number: 14
		}, {
			suite: 'C',
			number: 2
		}, {
			suite: 'D',
			number: 6
		}, {
			suite: 'D',
			number: 3
		}];

		expect(sortCardsFctry(cards)).toEqual(sorted);
	});
});