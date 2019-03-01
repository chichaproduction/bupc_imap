var bupc_imapControllers = angular.module("bupc_imap.Controllers", [
    'ngRoute', 
    'ui.select',
    // 'ui.bootstrap',
'ngSanitize']);
bupc_imapControllers.controller('bupc_imap_Controller', hello);

function hello($scope,$http,$timeout,APP_NAME,APP_VERSION,API_URL)
{
$scope.title = APP_NAME + " Version " + APP_VERSION;


// var sagot = distance('JOEL', 'JOELA');
// // 0.961
// // console.log(sagot * 100);
// // console.log("HELLO THERE");
// $scope.sessionverify = function(){


// }

 $scope.sessionverify = function(){
            $http.post('login/loginverify.php').then(function(data){
                
                $scope.verify =data.data;
            if($scope.verify['user'] === false){
                $scope.currentuser = "Login";
                $scope.tempadminaccess = 0;
                $scope.adminaccess = 0;
                $scope.hasaccess = 0;
            }else{
                $temp_access = parseInt($scope.verify['access']);
             
                if($temp_access == 0){
                    $scope.tempadminaccess = 1;
                    $scope.currentuser = "TEMPORARY";
                }else if($temp_access == 1){
                    $scope.tempadminaccess = 1;
                    $scope.adminaccess = 1;
                    $scope.currentuser = "ADMINISTRATOR";
                }
                $scope.hasaccess = 1;
            }


            // // console.log($scope.verify);
         });

        }

    $scope.load_init = function(){
        $scope.defaultView = 1;  // 1 = VIEW || 2 = ADD || 3 = EDIT 
        $scope.defaultADDInputCriteria = 0;
        $scope.viewLiveEvents = 0;
        $scope.viewLiveEventsMenu = "Free view";
        $scope.sessionverify();
        $scope.getAllUsers();
        //CHECK IF SOMEONE IS LOGGED

        

       

        $http.post('handler/getAllInfoHandler.php').then(function(data){
            $scope.building_data = data.data;
            

            // $scope.addBuilding = [];
            // angular.forEach($scope.building_data, function(value, key){
            // //     console.log(value.building_name);
            //     $scope.addBuilding.push(value['building_name']);
            // });  

            // // console.log($scope.addBuilding);

         });

      

        $http.post('handler/getDetailsHandler.php').then(function(data){
            $scope.building_info = data.data;

          
           

      

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


        //MAP CONFIGURATIONS //UNCOMMMENT TO USE
        // var imageUrl = 'img/Main MAP.png',      
        var imageUrl = 'img/Main MAP with Flow.png',
        // var imageUrl = 'img/Samplers.png',
        imageBounds = [center, [10.8650, 200.2094]];

        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        

        // function onMapClick(e) {
        //     alert(e.latlng);
        //     var rrr = e.latlng
            
        //   $scope.savers = "[" + rrr.lat + ", " + rrr.lng + "]";
        // //   console.log($scope.savers);
        // //   $scope.mapmapparam();
        // }
        // map.on('click', onMapClick);


        
        // var jopay = L.polygon(
        //     [
        //         [44.47436, 106.570312],
        //         [43.525489, 110.085937],
        //         [48.933467, 117.292968],
        //         [50.151055, 114.082031],
        //         [50.151055, 112.324219],
        //         [45.675281, 106.347656]
        //     ]
        // , {color: 'green',
        //     weight: 5,
        //     opacity: 3,
        //    // dashArray: '20,15',
        //    // lineJoin: 'round'
        // }).addTo(map);

        // var jopay2 = L.polygon(
        //     [
        //         [32.560457, 72.750006],
        //         [33.738483, 70.113287],
        //         [40.060982, 78.199224],
        //         [39.411771, 80.683594]
        //     ]
        // , {color: 'green',
        //     weight: 5,
        //     opacity: 3,
        //    // dashArray: '20,15',
        //    // lineJoin: 'round'
        // }).addTo(map);

   
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

              // MOTORPOOL 2
              $scope.building_info_m2 = $scope.building_info[19][0];
              var m2 = L.polygon(JSON.parse($scope.building_info_m2['coordinates']), {color: 'green',
                  weight: 0,
                  opacity: .2,
                 // dashArray: '20,15',
                 // lineJoin: 'round'
              }).addTo(map);

              $scope.building_info_p = $scope.building_info[20][0];
              var p = L.polygon(JSON.parse($scope.building_info_p['coordinates']), {color: 'green',
                  weight: 0,
                  opacity: .2,
                 // dashArray: '20,15',
                 // lineJoin: 'round'
              }).addTo(map);

            cb.on('click',       function(e){ $scope.building_code = $scope.building_info_cb['building_code'];   $scope.ClickHandler() });
            sb.on('click',       function(e){ $scope.building_code = $scope.building_info_sb['building_code'];   $scope.ClickHandler() });
            ab.on('click',       function(e){ $scope.building_code = $scope.building_info_ab['building_code'];   $scope.ClickHandler() });
            avr.on('click',      function(e){ $scope.building_code = $scope.building_info_avr['building_code'];  $scope.ClickHandler() });
            cesd.on('click',     function(e){ $scope.building_code = $scope.building_info_cesd['building_code']; $scope.ClickHandler() });
            css.on('click',      function(e){ $scope.building_code = $scope.building_info_css['building_code'];  $scope.ClickHandler() });
            canteen.on('click',  function(e){ $scope.building_code = $scope.building_info_c['building_code'];    $scope.ClickHandler() });
            nursing.on('click',  function(e){ $scope.building_code = $scope.building_info_n['building_code'];    $scope.ClickHandler() });
            nursing2.on('click', function(e){ $scope.building_code = $scope.building_info_n2['building_code'];   $scope.ClickHandler() });
            ft.on('click',       function(e){ $scope.building_code = $scope.building_info_ft['building_code'];   $scope.ClickHandler() });
            bg.on('click',       function(e){ $scope.building_code = $scope.building_info_bg['building_code'];   $scope.ClickHandler() });
            dorm.on('click',     function(e){ $scope.building_code = $scope.building_info_d['building_code'];    $scope.ClickHandler() });
            sf.on('click',       function(e){ $scope.building_code = $scope.building_info_sf['building_code'];   $scope.ClickHandler() });
            tb.on('click',       function(e){ $scope.building_code = $scope.building_info_tb['building_code'];   $scope.ClickHandler() });
            atb.on('click',      function(e){ $scope.building_code = $scope.building_info_atb['building_code'];  $scope.ClickHandler() });
            repc.on('click',     function(e){ $scope.building_code = $scope.building_info_repc['building_code']; $scope.ClickHandler() });
            arec.on('click',     function(e){ $scope.building_code = $scope.building_info_arec['building_code']; $scope.ClickHandler() });
            mwsb.on('click',     function(e){ $scope.building_code = $scope.building_info_mwsb['building_code']; $scope.ClickHandler() });
            m.on('click',        function(e){ $scope.building_code = $scope.building_info_m['building_code'];    $scope.ClickHandler() });
            m2.on('click',       function(e){ $scope.building_code = $scope.building_info_m2['building_code'];   $scope.ClickHandler() });
            p.on('click',        function(e){ $scope.building_code = $scope.building_info_p['building_code'];    $scope.ClickHandler() });


     
  ///////////////////////////////////////////////////////////////////////////////MARKER MULTIPLE  
        
            //     for (var i = 0; i < planes.length; i++) {
            //         marker = new L.marker([planes[i][1],planes[i][2]])
            //             //.bindPopup(planes[i][0])
            //             .addTo(map);
            //     }

            //     var markerArray = [
            //     L.marker([51.48902723702328, 117.70312607288362]),
            //     L.marker([58.48902723702328, 117.70312607288362]),
            //     L.marker([56.48902723702328, 117.70312607288362]),
            //     L.marker([52.48902723702328, 117.70312607288362])
            // ];
            //     //markerArray.push(L.marker([51.505, -0.09]));
               
            //     var group = L.featureGroup(markerArray).addTo(map);
            //     map.fitBounds(group.getBounds());

    ////////////////////////////////////////////////////////////////////////////////////// MARKER SINGLE
    // $scope.room_name_clicked = function(data){
    //         var marker = L.marker([66.15385236732068, 100.54687500000001],
    //             {title: 'Hover Text'}
    //             )
    //            .addTo(map);
    // }

  
    
    ////////////////////////////////////////////////////////////////////////////////////// GET LAT LNG OF MAP
     

////////////////////////////////// MARKERS ////////////////////
           var marker;
           
        
    $scope.room_name_clicked = function(data){
        // console.log(data);

        if(marker){
            map.removeLayer(marker); // remove
            map.removeControl(marker); // remove
        }

        // // console.log($scope.modal_info.rooms);
        angular.forEach($scope.modal_info.rooms, function(value, key){
            if(value.room_name === data){
                $('#info_modal').modal('toggle')
               
                var temp = value.coordinates;
                var result = temp.slice(1,-1);
                var coordinates = result.split(",");

                 marker = L.marker(coordinates,
                                {title: data}
                                )
               .addTo(map);
               marker.bindPopup('<b>"' + value["room_name"] + '"</b>' ).openPopup();
            }
        });   
    }
    var polygon;
    $scope.sub_event_clicked = function(place, data_info){
        // // console.log(place);
        if(marker){
            map.removeLayer(marker); // remove
            map.removeControl(marker); // remove
        }
  

        var building_id = data_info['building_id'];
        var room_id = data_info['room_id'];


        // // console.log($scope.building_data);
        if(data_info['room_id'] == null){
            angular.forEach($scope.building_data, function(value, key){
                if(value['id'] === building_id){
                    $scope.marker_coor = value['coordinates_specific'];

                        $('#eventsModal').modal('toggle')
               
                        var temp =  $scope.marker_coor;
                        var result = temp.slice(1,-1);
                        var coordinates = result.split(",");
        
                         marker = L.marker(coordinates,
                                        {title: data}
                                        )
                       .addTo(map);

                       
                       marker.bindPopup('<b>"' + data_info["sub_event_name"] + '"</b>' + '<br>' +
                                        "<b style='color:red !important;'>" + data_info['sub_show_start_time'] + " - " + data_info  ['sub_show_end_time'] + "</b>" ).openPopup();
                   
                     $('#eventsModal').modal('toggle')

                }else{
    
                }
            });  

        }else{
        angular.forEach($scope.building_data, function(value, key){
            if(value['id'] === building_id){
                angular.forEach(value['rooms'], function(value1, key1){
                    if(value1['id'] === room_id){
                        $scope.marker_coor = value1['coordinates'];

                        $('#eventsModal').modal('toggle')
               
                        var temp =  $scope.marker_coor;
                        var result = temp.slice(1,-1);
                        var coordinates = result.split(",");
        
                         marker = L.marker(coordinates,
                                        {title: data}
                                        )
                       .addTo(map);

                       
                       marker.bindPopup('<b>"' + data_info["sub_event_name"] + '"</b>' + '<br>' +
                                        "<b style='color:red !important;'>" + data_info['sub_show_start_time'] + " - " + data_info  ['sub_show_end_time'] + "</b>" ).openPopup();
                    }else{

                    }
                });   
            }else{

            }
        });  

    }


        // angular.forEach($scope.modal_info.rooms, function(value, key){
        //     if(value.room_name === data){
        //         $('#info_modal').modal('toggle')
               
        //         var temp = value.coordinates;
        //         var result = temp.slice(1,-1);
        //         var coordinates = result.split(",");

        //          marker = L.marker(coordinates,
        //                         {title: data}
        //                         )
        //        .addTo(map);
        //     }
        // });   
    }


    $scope.SearchFunction = function(query){
        $scope.mustbe = [];
        $scope.roomie = [];
        $scope.buildie = [];
        // // console.log(query);
        // // console.log($scope.building_data);

        var str = query;
        var res = str.toUpperCase();
        angular.forEach($scope.building_data, function(value, key){
            // // console.log(query + " " + value['building_name']);
            var deci = distance(res, value['building_name']);
            var percentage = deci * 100;
            // // console.log(query + " vs " + value['building_name'] + " = " + percentage);
              if(percentage >= 70){
                $scope.buildie.push(value);
                }else{

                }

            angular.forEach(value['rooms'], function(value1, key1){
                var deci1 = distance(res, value1['room_name']);
                var percentage1 = deci1 * 100;
                // // console.log(query + " vs " + value1['room_name'] + " = " + percentage);
                if(percentage1 >= 70){
                    $scope.roomie.push(value1);
                }else{

                }

            });  

          
        });  

        $scope.mustbe = {
            'building' : $scope.buildie,
            'room'     : $scope.roomie
        };

        // // console.log($scope.mustbe);
        // var sagot = distance('JOEL', 'JOELA');
           // // 0.961
        //    // console.log(sagot * 100);
        //    // console.log("HELLO THERE");
           // $scope.sessionverify = function(){
    }

    // $scope.room_name_clicked
    $scope.search_click_room = function(data){
        var roomname = data;

        for(i in map._layers) {
            if(map._layers[i]._path != undefined) {
                try {
                    map.removeLayer(map._layers[i]);
                }
                catch(e) {
                    // console.log("problem with " + e + map._layers[i]);
                }
            }
        }

        if(marker){
            map.removeLayer(marker); // remove
            map.removeControl(marker); // remove
        }
        $('.searchbox').modal('toggle')
               
        var temp = data.coordinates;
        var result = temp.slice(1,-1);
        var coordinates = result.split(",");

         marker = L.marker(coordinates,
                        {title: data["room_name"]}
                        )
       .addTo(map);
       marker.bindPopup('<b>"' + data["room_name"] + '"</b>' ).openPopup();

    }

    $scope.search_click_buil = function(data){
        var builname = data;

      
            for(i in map._layers) {
                if(map._layers[i]._path != undefined) {
                    try {
                        map.removeLayer(map._layers[i]);
                    }
                    catch(e) {
                        // console.log("problem with " + e + map._layers[i]);
                    }
                }
            }

            if(marker){
                map.removeLayer(marker); // remove
                map.removeControl(marker); // remove
            }
        
        $('.searchbox').modal('toggle')
        
        var polygon = L.polygon(JSON.parse(data['coordinates']), {color: 'red', weight: 2,
        opacity: 3,}).addTo(map);

        polygon.bindPopup('<b>"' + data["building_name"] + '"</b>' ).openPopup();
    //     if(marker){
    //         map.removeLayer(marker); // remove
    //         map.removeControl(marker); // remove
    //     }
    //     $('.searchbox').modal('toggle')
               
    //     var temp = data.coordinates;
    //     var result = temp.slice(1,-1);
    //     var coordinates = result.split(",");

    //      marker = L.marker(coordinates,
    //                     {title: data["room_name"]}
    //                     )
    //    .addTo(map);
    //    marker.bindPopup('<b>"' + data["room_name"] + '"</b>' ).openPopup();

    }



    mapMarkers= [];

    $scope.RealTimeEventCheckerStatic = function(){
        var today = new Date();
        var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
        var real_hour = today.getHours();
        var real_min  = today.getMinutes();
        var real_sec  = today.getSeconds();

        angular.forEach($scope.temp_event_data, function(value, key){
                    //AUTO REMOVE EVENT
                     var realdate = date.split("-");   //SPLIT Date for comparing
                     var savedate = value['event_date'].split("-");
                     var real_year  = parseInt(realdate[0]);
                     var real_month = parseInt(realdate[1]);
                     var real_day   = parseInt(realdate[2]);
    
                     var save_year  = parseInt(savedate[0]);
                     var save_month = parseInt(savedate[1]);
                     var save_day   = parseInt(savedate[2]);
                    //  console.log(save_year + " " + real_year);
                    //  console.log(save_month + " " + real_month);
                    //  console.log(save_day + " " + real_day);
                     if(save_year < real_year){
                         
                        $scope.PastEventsRemover(value['id']);
                     }else{
                        if(save_month < real_month){
                            
                            $scope.PastEventsRemover(value['id']);
                        }else if(save_month > real_month){

                        }else{
                            if(save_day < real_day){
                                $scope.PastEventsRemover(value['id']);
                            }else{
                                angular.forEach(value.sub_events, function(value1, key1){

                                    var save_start = value1['sub_event_time_start'].split(":");
                                    var save_end   = value1['sub_event_time_end'].split(":");

                                    var save_start_hour  =  parseFloat(save_start[0] + "." + save_start[1]);
                                    var save_end_hour    =  parseFloat(save_end[0] + "." + save_end[1]);
                                    var real_curr_hour   =  parseFloat(real_hour + "." + real_min);
                                    
                                    if(real_curr_hour >= save_start_hour && real_curr_hour <= save_end_hour){
                                        //SUB_EVENT_IN_TIME
                                    }else if(real_curr_hour < save_start_hour){
                                        //SUB_EVENT_COMING_SOON
                                    }else if(real_curr_hour > save_end_hour){
                                        //SUB_EVENT_PAST_HOUR
                                        $scope.PastSubEventsRemover(value['id']);
                                    }
                                    });
                                }
                            }
                            }
        });  
        
    
    
    }


    $scope.RealTimeEventChecker = function(){
        var today = new Date();
        var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
        var real_hour = today.getHours();
        var real_min  = today.getMinutes();
        var real_sec  = today.getSeconds();
    
     
        if(marker){
            map.removeLayer(marker); // remove
            map.removeControl(marker); // remove
            map.removeLayer(marker); // remove
            map.removeControl(marker); // remove
            for(var i = 0; i < mapMarkers.length; i++){
                map.removeLayer(mapMarkers[i]);
            }
        }
        
        
        angular.forEach($scope.temp_event_data, function(value, key){

             if(value['is_active'] == "0"){

             }else{
    
                    //AUTO REMOVE EVENT
                     var realdate = date.split("-");   //SPLIT Date for comparing
                     var savedate = value['event_date'].split("-");
                    // //  console.log(realdate);
                    // //  console.log(savedate);
    
                     var real_year  = parseInt(realdate[0]);
                     var real_month = parseInt(realdate[1]);
                     var real_day   = parseInt(realdate[2]);
    
                     var save_year  = parseInt(savedate[0]);
                     var save_month = parseInt(savedate[1]);
                     var save_day   = parseInt(savedate[2]);
    
                     if(save_year < real_year){
                        // // console.log("PAST YEAR");
                        // // console.log(value['id'] + " " + value['event_name']);
                        value['is_active'] = "0";
                        // $scope.PastEventsRemover(value['id']);
                     }else{
                        if(save_month < real_month){
                            // // console.log("PAST MONTH");
                            // // console.log(value['id'] + " " + value['event_name']);
                            value['is_active'] = "0";
                            // $scope.PastEventsRemover(value['id']);
                        }else if(save_month > real_month){}else{
                            if(save_day < real_day){
                                // // console.log("PAST DAY");
                                // // console.log(value['id'] + " " + value['event_name']);
                                value['is_active'] = "0";
                                // $scope.PastEventsRemover(value['id']);
                            }else{
                                // // console.log(value.sub_events);
                               if($scope.viewLiveEvents === 1){
                                    // if(marker){
                                    //     map.removeLayer(marker); // remove
                                    //     map.removeControl(marker); // remove
                                    // }

                                    angular.forEach(value.sub_events, function(value1, key1){

                                        if(value1['is_active'] == "0"){}else{
                                    var save_start = value1['sub_event_time_start'].split(":");
                                    var save_end   = value1['sub_event_time_end'].split(":");
    
                                    var save_start_hour  =  parseFloat(save_start[0] + "." + save_start[1]);
                                    var save_end_hour    =  parseFloat(save_end[0] + "." + save_end[1]);
                                    var real_curr_hour   =  parseFloat(real_hour + "." + real_min);
                                   
                                    // var save_start_min  =  parseInt(save_start[1]);
                                    // var save_end_min    =  parseInt(save_end[1]);
                                    
                                   
                                    // // console.log(value1['sub_event_name']);
                                    if(real_curr_hour >= save_start_hour && real_curr_hour <= save_end_hour){
                                        // // console.log("SHOW MARKER");
                                        // // console.log( value1["sub_event_name"] + ": " + save_start_hour + " >= " + real_curr_hour +" <= " + save_end_hour);
                    /////////////////////////////////////////////////////////////////////////////////
                                     
                                        angular.forEach($scope.building_data, function(value2, key2){
                                           
                                            // // console.log(real_curr_hour + " > " + save_start_hour +" " + save_end_hour);
                                            if(value2['id'] === value1['building_id']){
                                               if(value1['room_id'] == null){
                                                    $scope.marker_coor = value2['coordinates_specific'];
                                                
                                                    var temp =  $scope.marker_coor;
                                                    var result = temp.slice(1,-1);
                                                    var coordinates = result.split(",");
                                    
                                                    marker = L.marker(coordinates
                                                                    )
                                                .addTo(map);
                                                // {closeOnClick: false, autoClose: false});
                                                // console.log(value1["sub_event_desc"]+ " " + value1['sub_show_start_time']+"-"+ value1['sub_show_end_time']);
                                                
                                                var message = "";
                                                if(save_year > real_year){
                                                   var total_year =  save_year - real_year;
                                                   var message = "Event in " + total_year + " year/s";

                                                }else if (save_month > real_month){
                                                    var total_month =  save_month - real_month;
                                                    var message = "Event in " + total_month + " month/s";

                                                }else if (save_day > real_day){
                                                    var total_day =  save_day - real_day;
                                                    var message = "Event in " + total_day + " day/s";
                                                }else{
                                                    var message = "Event Today!";
                                                }
                                                



                                                var audio = document.getElementById("audio");
                                                audio.play();
                                                marker.bindPopup('<strong style="color:blue !important; " >' + message + '</strong>' + '<br>' +
                                                    '<b>"' + value1["sub_event_name"] + '"</b>' + '<br>' +
                                                                    // "<b style='color:red !important;'>" + value1['sub_show_start_time'] + " - " + value1['sub_show_end_time'] + "</b>" ).openPopup();
                                                                    "<b style='color:red !important;'>" + value1['sub_show_start_time'] + " - " + value1['sub_show_end_time'] + "</b>",{closeOnClick: false, autoClose: false}).openPopup();
                                                mapMarkers.push(marker);
                                               }else if (value1['room_id'] !== null){
                                                   
                                                   angular.forEach(value2['rooms'], function(value3, key3){
                                                    if(value3['id'] === value1['room_id']){
                                                        $scope.marker_coor = value3['coordinates'];
                                               
                                                        var temp =  $scope.marker_coor;
                                                        var result = temp.slice(1,-1);
                                                        var coordinates = result.split(",");
                                        
                                                         marker = L.marker(coordinates
                                                                        )
                                                       .addTo(map);

                                                       var message = "";
                                                       if(save_year > real_year){
                                                          var total_year =  save_year - real_year;
                                                          var message = "Event in " + total_year + " year/s";
       
                                                       }else if (save_month > real_month){
                                                           var total_month =  save_month - real_month;
                                                           var message = "Event in " + total_month + " month/s";
       
                                                       }else if (save_day > real_day){
                                                           var total_day =  save_day - real_day;
                                                           var message = "Event in " + total_day + " day/s";
                                                       }else{
                                                           var message = "Event Today!";
                                                       }
                                
                                                       var audio = document.getElementById("audio");
                                                        audio.play();
                                                    //    console.log(value1["sub_event_desc"]+ " " + value1['sub_show_start_time']+"-"+ value1['sub_show_end_time']);
                                                       marker.bindPopup('<strong style="color:blue !important; " >' + message + '</strong>' + '<br>' +
                                                           '<b>"' + value1["sub_event_name"] + '"</b>' + '<br>' +
                                                                        // "<b style='color:red !important;'>" + value1['sub_show_start_time'] + " - " + value1['sub_show_end_time'] + "</b>" ).openPopup();
                                                                        "<b style='color:red !important;'>" + value1['sub_show_start_time'] + " - " + value1['sub_show_end_time'] + "</b>",{closeOnClick: false, autoClose: false}).openPopup();
                                                mapMarkers.push(marker);
                                                    }else{}
                                                });  
                                            }
                                        }else{}
                                    });  
                        /////////////////////////////////////////////////////////////////////////////////
                                    }else if(real_curr_hour < save_start_hour){
                                        // // console.log( value1["sub_event_name"] + ": " + real_curr_hour + " < " + save_start_hour);
                                        // // console.log("MARKER COMING SOON");
                                    }else if(real_curr_hour > save_end_hour){
                                        // // console.log( value1["sub_event_name"] + ": " + real_curr_hour + " < " + save_start_hour);
                                        // // console.log("MARKER IS PAST THE HOUR");
                                        value1['is_active'] = "0";
                                        
                                    }
                                }
                                }); 
    
                               //GET COORDINATES
                               //PUT ALL MARKERS WITH ACTIVE
                            }else{}
                        }
                    }
                }
                    //  $scope.event_data.push($scope.temp_event_data[key]);
            }       
        });  
        
        $scope.event_data = [];
        angular.forEach($scope.temp_event_data, function(value, key){
            if(value['is_active'] === '1'){
                $scope.event_data.push($scope.temp_event_data[key]);
            }else{}
    }); 
    
    $scope.event_data.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a['event_date']) - new Date(b['event_date']);
      });

    //   array.sortBy(function(o){ return o.date });
    
    
    }

    $scope.viewActiveEvents = function(){
        
        if($scope.viewLiveEvents === 0){
          
        alertify.confirm('Do you want to View active Events? <b>" <br>' + 
                            '<small style="color:red;">*Viewing active events will turn-off FREE VIEWING</small>',
                function(){
                    $scope.viewLiveEvents = 1;
                    $scope.viewLiveEventsMenu = "Real Time View";
                    alertify.success('REAL TIME EVENTS ACTIVE!');
                },
                function(){
                    $scope.viewLiveEvents = 0;
                    $scope.viewLiveEventsMenu = "Free View";
                    alertify.error('REAL TIME VIEWING CANCELLED');
                }  
                ).setHeader('<em> Alert! </em> ');
      }else{
        alertify.confirm('Do you want to go to back to Free Viewing? <b>" <br>' + 
        '<small style="color:red;">*REAL TIME EVENTS feature will be deactivated</small>',
            function(){
                $scope.viewLiveEvents = 0;
                $scope.viewLiveEventsMenu = "Free View";
                if(marker){
                    map.removeLayer(marker); // remove
                    map.removeControl(marker); // remove
                }
                alertify.success('FREE VIEW ACTIVATED!');
            },
            function(){
                $scope.viewLiveEvents = 1;
                $scope.viewLiveEventsMenu = "Real Time View";
                alertify.error('FREE VIEW CANCELLED');
            }  
            ).setHeader('<em> Alert! </em> ');
      }
    }

     
    $http.post('handler/getAllEventHandler.php').then(function(data){
        $scope.temp_event_data = data.data;


          angular.forEach($scope.temp_event_data, function(value, key){
              var temp_counter =  value.sub_events.length;
            value['sub_count'] = temp_counter;
            angular.forEach(value.sub_events, function(value1, key1){
                
                    var timestr1_1 = value1.sub_event_time_start;
                    var timestr2_1 = value1.sub_event_time_end;

                    var splitime1 = timestr1_1.split(":");
                    var splitime2 = timestr2_1.split(":"); 
                    
                    var spl1ampm = timestr1_1 >= '12:00' ? 'pm' : 'am' 
                    var spl2ampm = timestr2_1 >= '12:00' ? 'pm' : 'am' 

                    //CHECK IF START TIME IS AM OR PM // Then Minus 12 if PM  
                        if(spl1ampm == 'pm'){
                            var startHour =  parseInt(splitime1[0]);
                            var startMin =  parseInt(splitime1[1]);
                            
                            if(startHour == 12){
                                var finalStartTime = startHour + ":" + splitime1[1]  + " " + spl1ampm;
                            }else{
                                var hourstart = startHour - 12;

                            var finalStartTime = hourstart + ":" + splitime1[1]  + " " + spl1ampm;
                            }
                            


                            
                        }else{
                            var startHour1 =  parseInt(splitime1[0]);
                            var startMin1 =  parseInt(splitime1[1]);

                            if(startHour1 == 00){

                                var hourstart1 = 12;
                                var finalStartTime = hourstart1 + ":" + splitime1[1]  + " " + spl1ampm;
                            }else{
                                var finalStartTime = timestr1_1 + " " + spl1ampm;
                            }
                        }

                    //CHECK IF END TIME IS AM OR PM // Then Minus 12 if PM  
                    if(spl2ampm == 'pm'){
                        var endHour =  parseInt(splitime2[0]);
                        var endMin =  parseInt(splitime2[1]);

                        if(endHour == 12){
                            var finalEndTime = endHour + ":" + splitime2[1] + " " + spl2ampm;
                        }else{
                            var hourend =  endHour - 12;

                            var finalEndTime = hourend + ":" + splitime2[1] + " " + spl2ampm;
                        }
                        
                        

                    }else{
                            var endHour1 =  parseInt(splitime2[0]);
                            var endMin1 =  parseInt(splitime2[1]);

                            if(endHour1 == 00){

                                var hourend1 = 12;
                                var finalEndTime = hourend1 + ":" + splitime2[1]  + " " + spl2ampm;
                            }else{
                                var finalEndTime = timestr2_1 + " " + spl2ampm;
                            }
                    }
                    value1['sub_show_start_time'] = finalStartTime;
                    value1['sub_show_end_time'] = finalEndTime;
                
            });  


        });  

     

        $scope.RealTimeEventCheckerStatic($scope.temp_event_data);
        $scope.RealTimeEventChecker($scope.temp_event_data);
  
// //    console.log($scope.event_data);

     });

     $scope.removeEvent = function(param){

        // console.log(param['id']);
        // // console.log($scope.event_data);
            alertify.confirm('Do you want to Remove the Event? <b>" <br>' + 
            '<small style="color:red;">*This is not reversible</small>',
            function(){
    
        $scope.past_id = JSON.stringify(param['id']);
                
        $http.post('handler/removeEventHandler.php', $scope.past_id).then(function(data){
            // $scope.PMCTQ_unit = unittemp;
        });
    
    
                angular.forEach($scope.event_data, function(value, key){
                    if(param['id'] === value['id']){
                        // // console.log($scope.event_data.indexOf(value['event_name']) + " " + 'event_name')
                        // var tempindex = $scope.event_data.indexOf(value['event_name']);
                        $scope.event_data.splice(key, 1);
                    }else{
                        // // console.log("NOT MATCH");
                    }
                });  
    
    
    
            alertify.success('REMOVE SUCCESSFUL!');
            },
            function(){
            alertify.error('REMOVE CANCELLED!');
            }  
            ).setHeader('<em> Alert! </em> ');
    
    
    }
           
    $scope.ClickHandler = function(data){
        var data = $scope.building_code;

        $scope.modal_func(data);
    }







    ////////////////////////////////// BUILDING DESCRIPTIONS ////////////////////////////////////////////////////////////////////////

    $scope.modal_func = function(data) {
        var modalparam = data;
        var modal_param = JSON.stringify(modalparam);
        
        
            $http.post('handler/homeHandler.php', modal_param).then(function(data){
                $scope.modal_info = data.data[0];
                // // console.log( $scope.modal_info);

                $scope.classroom     = [];
                $scope.office        = [];
                $scope.facility      = [];
                $scope.comfortroom   = [];
               

                angular.forEach($scope.modal_info.rooms, function(value, key){
                   

                    if(value.room_type === '0'){
                        $scope.classroom.push($scope.modal_info.rooms[key]);
                        // // console.log(value.room_type + " CLASSROOM");
                    }else if (value.room_type === '1'){
                        $scope.office.push($scope.modal_info.rooms[key]);
                        // // console.log(value.room_type + " OFFICE");
                    }else if (value.room_type === '3'){
                        $scope.office.push($scope.modal_info.rooms[key]);
                        // // console.log(value.room_type + " OFFICE");
                    }else if (value.room_type === '2'){
                        $scope.comfortroom.push($scope.modal_info.rooms[key]);
                        // // console.log(value.room_type + " CR");
                    }else if (value.room_type === '4'){
                        $scope.facility.push($scope.modal_info.rooms[key]);
                        // // console.log(value.room_type + " FACILITY");
                    }
                });  
                // $scope.PMCTQ_unit = unittemp;
        });
        $('#info_modal').modal('toggle')
    }
          
            
   });
    }


///////////////////////  DATE TIME ////////////////////////////

    $scope.DateTime = function (){
      
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var hour = today.getHours();
        var ampm = hour >= 12 ? 'pm' : 'am';

        if (hour > 12) {
            hour -= 12;
        } else if (hour === 0) {
            hour = 12;
        }


        var time = hour + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + ampm;
        var dateTime = date+' '+time;
        $scope.datecurr = date;
        $scope.datetime = time;

    }

//////////////////  MARQUEE DATE TIME REFRESH RATE ////////////


    $scope.intervalFunction = function(){
        $timeout(function() {
            $scope.DateTime();
            $scope.intervalFunction();
            if($scope.viewLiveEvents == 0){

            }else{
                 $scope.RealTimeEventChecker();
            }
           
        }, 1000)
      };
false



$scope.PastEventsRemover = function(id){

  
        $scope.past_id = JSON.stringify(id);
                
        $http.post('handler/removeEventHandler.php', $scope.past_id).then(function(data){
            // $scope.PMCTQ_unit = unittemp;
        });
 
}



$scope.PastSubEventsRemover = function(id){

  
    $scope.past_id = JSON.stringify(id);
            
    $http.post('handler/removeSubEventHandler.php', $scope.past_id).then(function(data){
        // $scope.PMCTQ_unit = unittemp;
    });

}


init = function(){

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);  // Get Date Tomorrow // User cannot set a schedule less than tomorrow
        $( "#event_date" ).datepicker({minDate: tomorrow});
        $('#event_date').css('z-index',500);
        
      }


////////////////// EVENT CONTROLLER /////////////////
$scope.eventController = function(param){
    if(param == 1){    // SHOW VIEW INTERFACE
        $scope.defaultView = 1;
            $scope.defaultADDInputCriteria = 0;
    }else if(param == 2){ // SHOW ADD INTERFACE

        
        $scope.defaultView = 2;
    }else if(param == 3){ // SHOW EDIT INTERFACE
        $scope.defaultView = 3;
            $scope.defaultADDInputCriteria = 0;
    }else if(param == 4){ // SHOW Generate Temp Account
        $scope.defaultView = 4;
            $scope.defaultADDInputCriteria = 0;
    }


    
}



////////////////// ADD EVENT /////////////////
$scope.create_ADD_Date = function(){
    var getEventDate = (angular.element('#event_date').val());
    if(getEventDate == null || getEventDate == undefined || getEventDate == ""){
        alertify.alert("A date needs to be specified!").setHeader('<em> Alert! </em> '); 
    }else{

        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        //EVENT DATE
        $scope.defaultADDInputCriteria = 1;
            var res = getEventDate.split('/');
        if(res[0] == '01'){res[0] = month[0]}
        else if(res[0] == '02'){res[0] = month[1]}
        else if(res[0] == '03'){res[0] = month[2]}
        else if(res[0] == '04'){res[0] = month[3]}
        else if(res[0] == '05'){res[0] = month[4]}
        else if(res[0] == '06'){res[0] = month[5]}
        else if(res[0] == '07'){res[0] = month[6]}
        else if(res[0] == '08'){res[0] = month[7]}
        else if(res[0] == '09'){res[0] = month[8]}
        else if(res[0] == '10'){res[0] = month[9]}
        else if(res[0] == '11'){res[0] = month[10]}
        else if(res[0] == '12'){res[0] = month[11]}
        
        $scope.viewEventDate = res.join("  ");
        $scope.eventDate = getEventDate;
    }


    var getEventDate = (angular.element('#event_date').val());
    var getEventName = (angular.element('#event_Name').val());
    var getEventDescription = (angular.element('#eventDescription').val());
   


//    // console.log($scope.add);
    if(getEventDate == undefined || getEventDate == null || getEventDate == "" ||
    getEventName == undefined || getEventName == null || getEventName == "" ||
    getEventDescription == undefined || getEventDescription == null || getEventDescription == "" 
    ){
       alertify.alert("Please fill up all missing requirements!").setHeader('<em> Alert! </em> '); 
    
   }else{
       $scope.EventHoldertemp = {  
                   "event_name" : getEventName,
                   "event_date" : getEventDate,
                   "event_description" : getEventDescription,
                   "sub_specification" : []
               };
   }






}

$scope.addBuildingChange = function(){
    var selectedBui = $scope.add.buildingName
   

            $scope.addRoom = [];
            angular.forEach($scope.building_data, function(value, key){
                if(value.building_name === selectedBui){
                        // console.log(value.building_name + " IS EQUAL " + selectedBui);

                            if(value.rooms.length == 0){
                            $scope.addRoom.push("None");

                            }else{
                            angular.forEach(value.rooms, function(value1, key1){
                            $scope.addRoom.push(value1.room_name);
                            });
                        }

                }else{

                }
            });  
}

$scope.addSubEvent = function(){

  
             var getSubEventName = (angular.element('#subevent_name').val());
             var getStartTimeFrom = (angular.element('#event_start_time').val());
             var getEndTimeFrom = (angular.element('#event_end_time').val());
             var getBuilding = (angular.element('#repeatSelectBui').val());
             var getRoom = (angular.element('#repeatSelectRoom').val());
             var getSubEventDescription = (angular.element('#subEventDescription').val());
             var getSubEventHost = (angular.element('#subevent_host').val());

             if(
             getSubEventName == undefined || getSubEventName == null || getSubEventName == "" || getSubEventName.length == 0 || 
             getStartTimeFrom == undefined || getStartTimeFrom == null || getStartTimeFrom == "" || getStartTimeFrom.length == 0 ||
             getEndTimeFrom == undefined || getEndTimeFrom == null || getEndTimeFrom == "" || getEndTimeFrom.length == 0 ||
             getBuilding == undefined || getBuilding == null || getBuilding == "" || getBuilding.length == 0 || typeof getBuilding === 'undefined' ||  getBuilding === '? object:null ?' || getBuilding === '? undefined:undefined ?' ||
             getRoom == undefined || getRoom == null || getRoom == "" || getRoom.length == 0 || typeof getRoom === 'undefined' || getRoom === '? object:null ?' || getRoom === '? undefined:undefined ?' ||
             getSubEventDescription == undefined || getSubEventDescription == null || getSubEventDescription == "" || getSubEventDescription.length == 0 ||
             getSubEventHost == undefined || getSubEventHost == null || getSubEventHost == "" || getSubEventHost.length == 0 
             ){
                alertify.alert("Please fill up all missing requirements!").setHeader('<em> Alert! </em> '); 
              
            }else{
                
                timestr1 = getStartTimeFrom;
                timestr2 = getEndTimeFrom;
            if(timestr1 > timestr2){
                alertify.alert("<p style='color:red;'>Invalid Start time and End time!</p>").setHeader('<em> Alert! </em> '); 
            }else{
                            if(getRoom === 'None'){
                                var getBuiRoo = getBuilding;
                            }else{
                                var getBuiRoo = getBuilding + ' - ' + getRoom;
                            }



                var timestr1_1 = getStartTimeFrom;
                var timestr2_1 = getEndTimeFrom;

                var splitime1 = timestr1_1.split(":");
                var splitime2 = timestr2_1.split(":"); 
                
                var spl1ampm = timestr1_1 >= '12:00' ? 'pm' : 'am' 
                var spl2ampm = timestr2_1 >= '12:00' ? 'pm' : 'am' 

                //CHECK IF START TIME IS AM OR PM // Then Minus 12 if PM  
                    if(spl1ampm == 'pm'){
                        var startHour =  parseInt(splitime1[0]);
                        var startMin =  parseInt(splitime1[1]);
                        
                        if(startHour == 12){
                            var finalStartTime = startHour + ":" + startMin  + " " + spl1ampm;
                        }else{
                            var hourstart = startHour - 12;

                        var finalStartTime = hourstart + ":" + startMin  + " " + spl1ampm;
                        }
                        


                        
                    }else{
                        var startHour1 =  parseInt(splitime1[0]);
                        var startMin1 =  parseInt(splitime1[1]);

                        if(startHour1 == 00){

                            var hourstart1 = 12;
                            var finalStartTime = hourstart1 + ":" + startMin1  + " " + spl1ampm;
                        }else{
                            var finalStartTime = timestr1_1 + spl1ampm;
                        }
                    }

                //CHECK IF END TIME IS AM OR PM // Then Minus 12 if PM  
                if(spl2ampm == 'pm'){
                    var endHour =  parseInt(splitime2[0]);
                    var endMin =  parseInt(splitime2[1]);

                    if(endHour == 12){
                        var finalEndTime = endHour + ":" + endMin + " " + spl2ampm;
                    }else{
                        var hourend =  endHour - 12;

                         var finalEndTime = hourend + ":" + endMin + " " + spl2ampm;
                    }
                    
                    

                }else{
                        var endHour1 =  parseInt(splitime2[0]);
                        var endMin1 =  parseInt(splitime2[1]);

                        if(endHour1 == 00){

                            var hourend1 = 12;
                            var finalEndTime = hourend1 + ":" + endMin1  + " " + spl2ampm;
                        }else{
                            var finalEndTime = timestr2_1 + spl2ampm;
                        }




                }

                


                // if (timestr1_1 > '12:59') {
                //     hour -= 12;
                // } else if (hour === 0) {
                //     hour = 12;
                // }


                        var counter = $scope.EventHoldertemp.sub_specification.length;
                        $scope.event_temp = 
                                {
                                    "id" : counter,
                                    "sub_event_name" : getSubEventName,
                                    "sub_event_start_time" : getStartTimeFrom,
                                    "sub_event_end_time" : getEndTimeFrom,
                                    "sub_event_building" : getBuilding,
                                    "sub_event_room" : getRoom,
                                    "sub_event_description" : getSubEventDescription,
                                    "sub_event_hosted_at"   : getBuiRoo,
                                    "sub_event_hosted_by"   : getSubEventHost,
                                    "show_start"   : finalStartTime,
                                    "show_end"   : finalEndTime
                                };

                                $scope.EventHoldertemp.sub_specification.push($scope.event_temp);
                                (angular.element('#subevent_name').val(""));
                                (angular.element('#event_start_time').val(""));
                                (angular.element('#event_end_time').val(""));
                                (angular.element('#repeatSelectBui').val(""));
                                (angular.element('#repeatSelectRoom').val(""));
                                (angular.element('#subEventDescription').val(""));
                                (angular.element('#subevent_host').val(""));

                                
                }

            }
}


$scope.removeSubEvent = function(id, name){
    alertify.confirm('Do you want to remove <b>"' + name +  '"</b> sub-event?',


            function(){

                angular.forEach($scope.EventHoldertemp.sub_specification, function(value, key){
                    if(id === value['id']){
                        $scope.EventHoldertemp.sub_specification.splice(key, 1);
                    }else{
                    }
                });  
                
                // $scope.EventHoldertemp.sub_specification.splice(id, 1);
                alertify.success('Remove Succesfully');
            },
            function(){
                alertify.error('Remove Cancelled');
            }  
            ).setHeader('<em> Alert! </em> ');

              
  
}




$scope.saveEvent = function(name){
    // console.log($scope.EventHoldertemp);
    // console.log($scope.EventHoldertemp.sub_specification);
    if($scope.EventHoldertemp.sub_specification.length == 0){

        alertify.alert("<b style='color:red;'>You need to create a schedule of sub-events first!</b>").setHeader('<em> Alert! </em> '); 
    }else{
           alertify.confirm('<p style="color:red;">WARNING! </p>Do you want to Save  <b>"' + name +  '"</b> event? <br>',



            function(){

                $scope.EventHolder = JSON.stringify($scope.EventHoldertemp);
                
                    $http.post('handler/insertEventHandler.php', $scope.EventHolder).then(function(data){
                        $scope.save_result =data.data;
                        console.log($scope.save_result);
                        if($scope.save_result == 0 || $scope.save_result == '0' ){
                            alertify.alert("<b style='color:red;'>Time Conflict! Please Check You Sub Events that there is no conflicting or in-betweent time schedules.</b>").setHeader('<em> Alert! </em> '); 
                        }else{
                            alertify.success('Saved Succesfully');
                            $('#eventsModal').modal('toggle')
                             window.location.reload();
                        }
                    });

              
               
            },
            function(){
                alertify.error('Save Cancelled');
            }  
            ).setHeader('<em> Confirm! </em> ');
    }
}

$scope.submitLogIn = function(user, pass){
   
    var logparam = {
        'user' : user,
        'pass' : pass
        };

    

            if((user == "" && pass == "" )||(user == undefined && pass == undefined) ){

            }else{
                var log_param = JSON.stringify(logparam);
              
                $http.post('handler/loginValidationHandler.php', log_param).then(function(data){
                    $scope.login_information =JSON.parse(data.data);
                    

                if($scope.login_information == "false_user"){
                    // console.log("USER");
                    alertify.alert("<p style='color:red;'>No Existing User!</p>").setHeader('<em> INVALID! </em> ');
                }else if($scope.login_information == "false_pass"){
                    // console.log("PASS");
                    alertify.alert("<p style='color:red;'>Incorrect Password!</p>").setHeader('<em> Alert! </em> '); 
                }else{
                    // console.log($scope.login_information);
                     $scope.sessionverify();
                     alertify.success('Welcome ' + $scope.login_information + '!'); 
                    $('#accessModal').modal('toggle')
                }

                });
              
                
            }

  
}

$scope.getAllUsers = function(){
    $http.post('handler/getAllUsersHandler.php').then(function(data){
        $scope.user_data =data.data;


    });

}

$scope.generatePassword = function(id){

    // // console.log(id);
     angular.forEach($scope.user_data, function(value, key){
         angular.forEach(value, function(value1, key1){
             if(value1['id'] == id){
                 
                  value1['temp_pass'] = Math.random().toString(36).substr(2, 10);
                  var userparam = {
                    'id' : id,
                    'pass' : value1['temp_pass']
                    };
                  $http.post('handler/insertTempPassHandler.php', userparam).then(function(data){

                    });

             }else{}
       
        });  
    });  
    
}


$scope.submitLogOut = function(){
   
    $http.post('login/logout.php').then(function(data){
     });

     $scope.sessionverify();
     window.location.reload();
     $('#accessModal').modal('toggle').
     angular.element('#usernameInput').val(undefined);
     angular.element('#InputPassword').val(undefined);
  
}

 



      $scope.newDiv = function(){
        var iDiv = document.createElement('div');
        iDiv.id = 'block';
        iDiv.className = 'block';
        document.getElementById('generateEvent').append(iDiv);
        
        iDiv.innerHTML = "I'm the first div";
      }


    // $scope.mapmapparam = function() {
    // //    console.log($scope.savers);
     
    // }

   

    
    // $scope.DateTime();
    // $(document).ready(
    //     function() {
    //     setInterval(function() {
    //     var someval = Math.floor(Math.random() * 100);
    //     //  $('#sample').text('Test' + someval);
    //     $scope.DateTime();
    //     }, 5000);  //Delay here = 5 seconds 
    //    });
    

    $scope.load_init();
   
    $scope.intervalFunction();
    init();
    
}
