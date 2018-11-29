(function(){
	var app = angular.module("myModule");

	app.controller("myCtrl", function($scope){

		$scope.getTodos = function() {
			$scope.todos = JSON.parse(localStorage.getItem("myTodos"));
			// console.log($scope.todos);
			if ($scope.todos == undefined || $scope.todos.length == 0 || $scope.todos == null) {
				$scope.todos = [];
				localStorage.setItem("myTodos", JSON.stringify($scope.todos));
			}
		}

		$scope.addTodo = function(event) {
			if (event.which == 13) {
				var myNewTodo = {
					text: $scope.newTodo,
					status: false
				}
				$scope.todos.push(myNewTodo);
				localStorage.removeItem("myTodos");
				localStorage.setItem("myTodos", JSON.stringify($scope.todos));
				$scope.newTodo = "";
			}
		}

		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
			var localTodos = JSON.parse(localStorage.getItem("myTodos"));
			localTodos.splice(index, 1);
			localStorage.removeItem("myTodos");
			localStorage.setItem("myTodos", JSON.stringify($scope.todos));
		}

		$scope.enableEditing = function(event) {
			var target = event.target;
			target.contentEditable = true;
			angular.element(target).addClass("editable");
		}

		$scope.editTodo = function(event, index) {
			var target = event.target
			if (event.which == 13) {
				target.contentEditable = false;
				angular.element(target).removeClass("editable");
				$scope.todos[index].text = target.innerHTML;
				localStorage.removeItem("myTodos");
				localStorage.setItem("myTodos", JSON.stringify($scope.todos));
			}
		}

		$scope.setComplete = function(index) {
			localStorage.removeItem("myTodos");
			localStorage.setItem("myTodos", JSON.stringify($scope.todos));
		}

	})
})();