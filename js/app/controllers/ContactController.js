function ContactController(blah, blah2) {
	$scope.name = 'Bill Gates';

	$timeout(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}


angular
	.module('app')
	.controller('ContactController', ContactController);
