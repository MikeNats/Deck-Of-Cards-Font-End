'use strict';

let $httpBackend,
	$http,
	deckApiFctry;

describe('deckApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_$httpBackend_, _$http_, _deckApiFctry_) => {
			$httpBackend = _$httpBackend_;
			$http = _$http_;
			deckApiFctry = _deckApiFctry_;
			spyOn($http, 'get');
		});
	});

	it("should GET the cards from back end", () => {
		deckApiFctry.getCards();

		expect($http.get).toHaveBeenCalledWith('/api/cards');
	});
});