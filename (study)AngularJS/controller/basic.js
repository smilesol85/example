var hello = angular.module("helloApp", []);
hello.controller("HelloController", function($scope){
	$scope.name = "Hansol";
});

//angular.module("helloApp", [])
//	.controller("HelloController", function($scope){
//	$scope.name = "Hansol";
//});
