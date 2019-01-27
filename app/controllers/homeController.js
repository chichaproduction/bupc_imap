var bupc_imapControllers = angular.module("bupc_imap.Controllers", []);
bupc_imapControllers.controller('bupc_imap_Controller', hello);

// function hello($scope,piValue,ourPlanet,user,APP_NAME,APP_VERSION,API_URL, helloFactory, VAT, helloService)
function hello($scope,$http,APP_NAME,APP_VERSION,API_URL)
{
$scope.title = APP_NAME + " Version " + APP_VERSION;

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

    
    // $scope.helloFactory = helloFactory;

    // $scope.vat = VAT.compute(100);
    // $scope.helloService = helloService.bite();
    // $scope.helloServiceName = helloService.hello("JOBERT");

    // $scope.function



    load_init = function(){

        $http.post('handler/getDetailsHandler.php').then(function(data){
            $scope.building_info = data.data;
            // console.log($scope.building_info);

            // console.log($scope.building_info[5][0]['coordinates']), {color: 'green',
            //     weight: 0,
            //     opacity: .2,
            //    // dashArray: '20,15',
            //    // lineJoin: 'round'
            // };



        //map options
        var mapOptions = {
            center: [65.385044, 100.486671],
            zoom: 3,
            minZoom: 3,
            maxZoom: 4
        }

        // center of the map
        var center = [400.300, 0.30];

        // Create the map
        var map = L.map('map', mapOptions);

        var imageUrl = 'img/Main MAP.png',
        imageBounds = [center, [10.8650, 200.2094]];

        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        
            //Buildings

            // Cacapit Building
            $scope.building_info_cb = $scope.building_info[5][0];
            var cb = L.polygon(JSON.parse($scope.building_info_cb['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);
            
            // Salceda Building
            $scope.building_info_sb = $scope.building_info[1][0];
            var sb = L.polygon(JSON.parse($scope.building_info_sb['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Automotive Building
            $scope.building_info_ab = $scope.building_info[2][0];
            var ab = L.polygon(JSON.parse($scope.building_info_ab['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Audio Visual Room
            $scope.building_info_avr = $scope.building_info[13][0];
            var avr = L.polygon(JSON.parse($scope.building_info_avr['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // CESD Building
            $scope.building_info_cesd = $scope.building_info[0][0];
            var cesd = L.polygon(JSON.parse($scope.building_info_cesd['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Council Student Service Building
            $scope.building_info_css = $scope.building_info[11][0];
            var css = L.polygon(JSON.parse($scope.building_info_css['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Canteen
            $scope.building_info_c = $scope.building_info[15][0];
            var canteen = L.polygon(JSON.parse($scope.building_info_c['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Nursing Building
            $scope.building_info_n = $scope.building_info[7][0];
            var nursing = L.polygon(JSON.parse($scope.building_info_n['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Nursing Building
            $scope.building_info_n2 = $scope.building_info[7][1];
            var nursing2 = L.polygon(JSON.parse($scope.building_info_n2['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // Food Technology Building
            $scope.building_info_ft = $scope.building_info[8][0];
            var ft = L.polygon(JSON.parse($scope.building_info_ft['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //    GYM
            $scope.building_info_bg = $scope.building_info[12][0];
            var bg = L.polygon(JSON.parse($scope.building_info_bg['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //Dorm
            $scope.building_info_d = $scope.building_info[14][0];
            var dorm = L.polygon(JSON.parse($scope.building_info_d['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //Soccer Field
            $scope.building_info_sf = $scope.building_info[17][0];
            var sf = L.polygon(JSON.parse($scope.building_info_sf['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //Technology Building
            $scope.building_info_tb = $scope.building_info[3][0];
            var tb = L.polygon(JSON.parse($scope.building_info_tb['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // //Automotive Building
            $scope.building_info_atb = $scope.building_info[10][0];
            var atb = L.polygon(JSON.parse($scope.building_info_atb['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //Research Extension, and Production Center Building
            $scope.building_info_repc = $scope.building_info[9][0];
            var repc = L.polygon(JSON.parse($scope.building_info_repc['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //AREC Building
            $scope.building_info_arec = $scope.building_info[6][0];
            var arec = L.polygon(JSON.parse($scope.building_info_arec['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            //Machine and Welding Shop Building
            $scope.building_info_mwsb = $scope.building_info[4][0];
            var mwsb = L.polygon(JSON.parse($scope.building_info_mwsb['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            // MOTORPOOL
            $scope.building_info_m = $scope.building_info[16][0];
            var m = L.polygon(JSON.parse($scope.building_info_m['coordinates']), {color: 'green',
                weight: 0,
                opacity: .2,
               // dashArray: '20,15',
               // lineJoin: 'round'
            }).addTo(map);

            cb.on('click',       function(e){ $scope.building_code = $scope.building_info_cb['building_code']; $scope.ClickHandler() });
            sb.on('click',       function(e){ $scope.building_code = $scope.building_info_sb['building_code']; $scope.ClickHandler() });
            ab.on('click',       function(e){ $scope.building_code = $scope.building_info_ab['building_code']; $scope.ClickHandler() });
            avr.on('click',      function(e){ $scope.building_code = $scope.building_info_avr['building_code']; $scope.ClickHandler() });
            cesd.on('click',     function(e){ $scope.building_code = $scope.building_info_cesd['building_code']; $scope.ClickHandler() });
            css.on('click',      function(e){ $scope.building_code = $scope.building_info_css['building_code']; $scope.ClickHandler() });
            canteen.on('click',  function(e){ $scope.building_code = $scope.building_info_c['building_code']; $scope.ClickHandler() });
            nursing.on('click',  function(e){ $scope.building_code = $scope.building_info_n['building_code']; $scope.ClickHandler() });
            nursing2.on('click', function(e){ $scope.building_code = $scope.building_info_n2['building_code']; $scope.ClickHandler() });
            ft.on('click',       function(e){ $scope.building_code = $scope.building_info_ft['building_code']; $scope.ClickHandler() });
            bg.on('click',       function(e){ $scope.building_code = $scope.building_info_bg['building_code']; $scope.ClickHandler() });
            dorm.on('click',     function(e){ $scope.building_code = $scope.building_info_d['building_code']; $scope.ClickHandler() });
            sf.on('click',       function(e){ $scope.building_code = $scope.building_info_sf['building_code']; $scope.ClickHandler() });
            tb.on('click',       function(e){ $scope.building_code = $scope.building_info_tb['building_code']; $scope.ClickHandler() });
            atb.on('click',      function(e){ $scope.building_code = $scope.building_info_atb['building_code']; $scope.ClickHandler() });
            repc.on('click',     function(e){ $scope.building_code = $scope.building_info_repc['building_code']; $scope.ClickHandler() });
            arec.on('click',     function(e){ $scope.building_code = $scope.building_info_arec['building_code']; $scope.ClickHandler() });
            mwsb.on('click',     function(e){ $scope.building_code = $scope.building_info_mwsb['building_code']; $scope.ClickHandler() });
            m.on('click',        function(e){ $scope.building_code = $scope.building_info_m['building_code']; $scope.ClickHandler() });

            





            
            // function onMapClick(e) {
            //     //alert(e.latlng);
            //     var rrr = e.latlng
                
            //   $scope.savers = "[" + rrr.lat + ", " + rrr.lng + "],";
            //   $scope.mapmapparam();
            // }

           

           
            
            map.on('click', onMapClick);
            
   });
    }




    // $scope.mapmapparam = function() {
    //    console.log($scope.savers);
     
    // }

    $scope.ClickHandler = function(data){
        var data = $scope.building_code;

        $scope.modal_func(data);
    }







    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $scope.modal_func = function(data) {
        var modalparam = data;
        var modal_param = JSON.stringify(modalparam);
        
            $http.post('handler/homeHandler.php', modal_param).then(function(data){
                $scope.modal_info = data.data[0];
                console.log( $scope.modal_info);

                });

                $('#info_modal').modal('toggle')


    }

    load_init();

}
