var Login= angular.module('Login',[]);

Login.controller('myCont',function($scope,$http){ 
	console.log("hello from login.js");

	
	$scope.save = function(){
		var username= $scope.user.username;
		var password= $scope.user.password;
		console.log(username);
		window.location.assign('/Profile.html?id='+ '5732a26ea70c49381bdf2da9');
		/*
		$http.get ('/user/'+ username ).success(function(response){
			console.log(response);
				//$scope.contact = response;
				if(response.username == username)
				
				{
					//console.log(response.username);
					if(response.password == password)
					{
						 
					}
					
				}else
				{
					alert("Username is worng");
				}
				
			});*/
};	
	
});