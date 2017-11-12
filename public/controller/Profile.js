var Profile= angular.module('Profile',[]);

Profile.controller('myCont',function($scope,$http,$location){ 
	
	
	var id1 = getUrlParameter('id');
	console.log(id1);
	
	function getUrlParameter(param, dummyPath) {
        var sPageURL = dummyPath || window.location.search.substring(1),
            sURLVariables = sPageURL.split(/[&||?]/),
            res;

        for (var i = 0; i < sURLVariables.length; i += 1) {
            var paramName = sURLVariables[i],
                sParameterName = (paramName || '').split('=');

            if (sParameterName[0] === param) {
                res = sParameterName[1];
            }
        }

        return res;
	}
	
	
	var refresh = function(){
		console.log(id1);
		$http.get ('/user/'+ id1 +'/user1/'+ 'try123').success(function(response){
			console.log(response);
				$scope.user = response;
			});
};	
refresh();

$scope.updatePersonalInfo = function () {
	
  console.log($scope.user._id);
  if($scope.user.newpassword == $scope.repassword)
  {
  		$http.put('/user/'+ $scope.user._id,$scope.user).success(function(response){
  			alert("user updated successfully");
			refresh();
			});
  }else
  {
  	
					alert("NewPassword & repassword does not match.");
  }
	
};
	
	
	$scope.cancle = function()
	{
		 window.location.assign('Login.html');
	}
});