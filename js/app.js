var app = angular.module("myModule", ["ngAnimate"]);

app.filter("capitalize", function(){
	return function(input){
		if (input !== null) {
			input.toLowerCase();
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		}
	}
})
