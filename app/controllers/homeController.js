var bupc_imapControllers = angular.module("bupc_imap.Controllers", []);
bupc_imapControllers.controller('bupc_imap_Controller', hello);

// function hello($scope,piValue,ourPlanet,user,APP_NAME,APP_VERSION,API_URL, helloFactory, VAT, helloService)
function hello($scope,$http,APP_NAME,APP_VERSION,API_URL)
{
    

// MyApp.controller('HelloController', hello); uses the MyApp object that we defined in /app/app.js. 
// This code calls the controller method and passes in two parameters. 
// The name of the controller to be created HelloController and the function name hello that will be executed when the controller is executed.
// function hello($scope){$scope.name = "Rodrick";} defines a function 
// hello that accepts $scope object as a parameter. $scope is used to pass 
// data between controllers and views. $name.scope = "Rodrick" assigns the value 
// Rodrick to the name variable. This is the name that we are printing in the web browser.

    // $scope.piValue = piValue;
    // $scope.ourPlanet = ourPlanet;
    // $scope.user = user;

    // $scope.title = APP_NAME + " Version " + APP_VERSION;
    // $scope.helloFactory = helloFactory;

    // $scope.vat = VAT.compute(100);
    // $scope.helloService = helloService.bite();
    // $scope.helloServiceName = helloService.hello("JOBERT");

    // $scope.function
$scope.postData = function () {
            $http.post('localhost/bupc_imap/App/Service/Index/IndexService.php/getDetails', {user:$scope.formData}).success(
              function(data){
                $scope.response = data;
              })
          }

    $scope.modal_func = function(data) {
        var something = {
            name: 'Jobert',
            
            age: '14',
            
            adress: 'Kangkong'
            
            };
        
        var str_json = JSON.stringify(something);
       // console.log(str_json);
        // $http.post('controller/homeController.php', str_json).success(function(data)
        
        
        
        
        // {
        //       $scope.response = data;
        //     });

        $http.post('controller/homeController.php/getDetails', str_json).then(function (response) {
        //console.log(response);
            if (response.data)
            
            $scope.msg = "Post Data Submitted Successfully!";
            
            }, function (response) {
            
            $scope.msg = "Service not Exists";
            
            $scope.statusval = response.status;
            
            $scope.statustext = response.statusText;
            
            $scope.headers = response.headers();
            
            });


           


            


        console.log(data);


    }

}
// function hello($scope,piValue,ourPlanet,user) injects the values piValue, ourPlanet,user