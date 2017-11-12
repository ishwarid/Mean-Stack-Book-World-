var SignUp= angular.module('SignUp',[]);

SignUp.controller('myCont',function($scope,$http){ 
		
console.log("hello from signup.js");


$scope.AddUser = function(){
	
		
		if($scope.tnc)
		{
			if($scope.user.password.length > 6 && $scope.repassword.length > 6)
			{
				if($scope.user.password == $scope.repassword)
					{
						console.log($scope.user.password);
								window.location.assign('/Login.html');
						/*
							$http.post('/user',$scope.user).success(function(response){
								//console.log(response);						
									//$scope.user = "";									
							//document.getElementById("tnc").checked  = false;
									alert("user Added successfully.");
									 //$window.location.href = '/Profile.html';
									 window.location.assign('/Login.html');
							});*/
					}else{
					alert("Password & repassword does not match.");
					
				}
			}else {
				//show error pass length is short
				alert("Password is too short!.");
			}
		}else{
			alert("plz check t& c");
		}
		
		
		
		
	};

});