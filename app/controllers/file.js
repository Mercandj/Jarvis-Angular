app.controller('FileCtrl',
	function($scope, $location, $http, $q, Base64, myCache) {
	/*
    $scope.file = FileFactory.all().then(function(file) {
        $scope.file = file;
    },function(msg){
        alert(msg);
    });
	*/

		$http({

            url: URL_SERVER+'file',
            method: 'GET',
            headers : {
                'Authorization':'Basic '+ myCache.get('myData'),
                'Content-Type':'application/json',
            }

        })
        .success(function(data,status) {
            console.log(status + " : " + JSON.stringify(data));

            if(data.succeed === true) {
            	console.log("Result : " + JSON.stringify(data.result));
            	$scope.files = data.result;
            }
        })
        .error(function(data,status) {
            if(status == 401)
                deferred.reject('401 unauthorized')
            else if(status == 404)
                deferred.reject('404 not found');
            else
                deferred.reject('Cannot get files');
        });



	}
);