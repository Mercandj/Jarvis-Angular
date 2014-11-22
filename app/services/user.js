app.service('userService', ['$location', '$http', 'myCache',
    function ($location, $http, myCache) {

        this.login = function(p_url, p_auth, p_data) {

            $http({

                url: p_url,
                data: p_data,
                method: 'GET',
                headers : {
                    'Authorization':'Basic '+ p_auth,
                    'Content-Type':'application/json',
                }

            })
            .success(function(data, status, headers, config) {
                console.log(status + " : " + JSON.stringify(data));

                if(data.succeed === true) {
                    myCache.put('myData', p_auth);
                    $location.path( "/file" );
                }

            })
            .error(function(data, status, headers, config) {
                console.log(status + " : " + JSON.stringify(data));
            });
        }
    }
]);