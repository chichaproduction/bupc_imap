var bupc_imap = angular.module("bupc_imap", [
    'ui.select',
    'ngRoute',
    // 'ui.bootstrap',
    'ngSanitize',
    'bupc_imap.Controllers']);
//defines a variable MyAPP. The Angular module object with a namespace of MyApp is assigned to our variable.

// bupc_imap.value("piValue", 3.14159);
// bupc_imap.value("ourPlanet", "Earth");
// bupc_imap.value("user", { id : 13, name : "Rodrick Kazembe", email : "rodrickkazembe@example.com"} );

bupc_imap.constant("APP_NAME", "BUPC_iMap");
bupc_imap.constant("APP_VERSION", "1");
bupc_imap.constant("API_URL", "http://localhost/bupc_imap/v1/");

// bupc_imap.factory("helloFactory", function() {
//     return "I greet in peace from the factory";
// });

// //FACTORY
// // moduleName.factory('factoryName', function(){return value});
// bupc_imap.factory("VAT", function() {
//     return {
//         compute: function(total_amount){
//             return total_amount * 0.18;
//         }  
//     } 
// });

// //SERVICE
// // moduleName.service('serviceName', function(){return value});

// bupc_imap.service('helloService', function(){
//     this.bite= function(){
//         return "Hey watch it! I bite";
//     };        
//     this.hello= function(name){
//         return "Hello " + name;
//     };    
// });