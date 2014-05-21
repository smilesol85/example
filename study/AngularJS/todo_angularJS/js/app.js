var todoList = [
	{done : true, title : "read"},
	{done : false, title : "study"},
	{done : false, title : "project"}
];

function todoCtrl($scope){
	$scope.appName = "todo width angularJS";
	$scope.todoList = todoList;
	$scope.addNewTodo = function(newTitle){
		todoList.push({done:false, title:newTitle});
		$scope.newTitle = '';
	};
	$scope.archive = function(){
		for(var i = $scope.todoList.length - 1; i >= 0; i--){
			if($scope.todoList[i].done){
				$scope.todoList.splice(i, 1);
			}
		}
	};
	$scope.remain = function(){
		var remainCount = 0;
		angular.forEach($scope.todoList, function(value, key){
			if(value.done === false){
				remainCount++;
			}
		});
		return remainCount;
	};
}
