'use strict';

let drawCardsFctry,
	cards;

describe('drawCardsFctry', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_drawCardsFctry_) => {
			drawCardsFctry = _drawCardsFctry_;
		});
	});

	it("should return the given number of cards if the cards contain the same number of inactive cards", () => {
		cards = [{
			active: true
		}, {
			active: false
		}, {
			active: false
		}];

		expect(drawCardsFctry(cards, 2).length).toEqual(2);
	});
	it("should not return cards if there is no inactive card", () => {
		cards = [{
			active: true
		}, {
			active: true
		}, {
			active: true
		}];

		expect(drawCardsFctry(cards, 2).length).toEqual(0);
	});
	it("should return all cards if all are inactive", () => {
		cards = [{
			active: false
		}, {
			active: false
		}, {
			active: false
		}];

		expect(drawCardsFctry(cards, 3).length).toEqual(3);
	});


});