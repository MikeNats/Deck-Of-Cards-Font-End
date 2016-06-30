'use strict';

let $scope,
	$deferred

describe('deckCtrl', () => {

	beforeEach(() => {
		angular.mock.module('deckModule');

		inject((_$controller_, _$rootScope_, _$q_, _deckApiFctry_) => {
			$scope = _$rootScope_.$new(); // Gets the rootScope_ with .apply
			$deferred = _$q_.defer(); // To create a mock instance of defer
			spyOn(_deckApiFctry_, 'getCards').and.returnValue($deferred.promise); // Jasmine Spy to return the $deferred promise
			_$controller_('deckCtrl', {
				$scope: $scope,
				deckApiFctry: _deckApiFctry_
			});
		});
	});

	describe('initialization', () => {

		it('should set activeCards', () => {
			expect($scope.activeCards).toEqual([]);
		});
		it('should set numOfCardsToDraw', () => {
			expect($scope.numOfCardsToDraw).toEqual(0);
		});
		it('should set message', () => {
			expect($scope.message).toEqual('Lets Play!!!');
		});
		it('should set cards', () => {
			$deferred.resolve({
				data: [{
					cards: 'staff'
				}]
			});
			$scope.$apply($scope.cards);

			expect($scope.cards).toEqual('staff');
		});
	});
});