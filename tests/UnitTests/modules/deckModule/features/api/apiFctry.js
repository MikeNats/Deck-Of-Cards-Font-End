'use strict';

let $httpBackend,
	$http,
	deckApiFctry,
	CARDS_API_PATHS;

describe('deckApiFctry', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');
		angular.mock.inject((_$httpBackend_, _$http_, _deckApiFctry_, _CARDS_API_PATHS_) => {
			$httpBackend = _$httpBackend_;
			$http = _$http_;
			CARDS_API_PATHS = _CARDS_API_PATHS_;
			deckApiFctry = _deckApiFctry_;
			spyOn($http, 'get');
		});
	});

	it("should GET the cards from back end", () => {
		deckApiFctry.getCards();

		expect($http.get).toHaveBeenCalledWith(CARDS_API_PATHS.GET_CARDS);
	});
});