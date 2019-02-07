var bupc_imapControllers = angular.module("bupc_imap.Controllers", ['ngRoute', 'ui.select',
'ngSanitize']);
bupc_imapControllers.controller('bupc_imap_Controller', hello);

// function hello($scope,piValue,ourPlanet,user,APP_NAME,APP_VERSION,API_URL, helloFactory, VAT, helloService)
function hello($scope,$http,$timeout,APP_NAME,APP_VERSION,API_URL)
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

    // // $scope.function

    

 

    load_init = function(){
        $scope.defaultView = 1;  // 1 = VIEW || 2 = ADD || 3 = EDIT 
        $scope.defaultADDInputCriteria = 0;

        $http.post('handler/getAllInfoHandler.php').then(function(data){
            $scope.building_data = data.data;
            

            // $scope.addBuilding = [];
            // angular.forEach($scope.building_data, function(value, key){
            //     console.log(value.building_name);
            //     $scope.addBuilding.push(value['building_name']);
            // });  

            // console.log($scope.addBuilding);

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
            // var marker = L.marker([66.15385236732068, 100.54687500000001],
            //     {title: 'Hover Text'}
            //     )
            //    .addTo(map);

    
    ////////////////////////////////////////////////////////////////////////////////////// GET LAT LNG OF MAP
            // function onMapClick(e) {
            //     // alert(e.latlng);
            //     var rrr = e.latlng
                
            //   $scope.savers = "[" + rrr.lat + ", " + rrr.lng + "]";
            //   alertify.alert($scope.savers);
            // //   $scope.mapmapparam();
            // }



////////////////////////////////// MARKERS ////////////////////
           var marker;
        
    $scope.room_name_clicked = function(data){
        console.log(data);

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
            }
        });   
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
                console.log( $scope.modal_info);

                $scope.classroom     = [];
                $scope.office        = [];
                $scope.facility      = [];
                $scope.comfortroom   = [];
               

                angular.forEach($scope.modal_info.rooms, function(value, key){
                   

                    if(value.room_type === '0'){
                        $scope.classroom.push($scope.modal_info.rooms[key]);
                        console.log(value.room_type + " CLASSROOM");
                    }else if (value.room_type === '1'){
                        $scope.office.push($scope.modal_info.rooms[key]);
                        console.log(value.room_type + " OFFICE");
                    }else if (value.room_type === '3'){
                        $scope.office.push($scope.modal_info.rooms[key]);
                        console.log(value.room_type + " OFFICE");
                    }else if (value.room_type === '2'){
                        $scope.comfortroom.push($scope.modal_info.rooms[key]);
                        console.log(value.room_type + " CR");
                    }else if (value.room_type === '4'){
                        $scope.facility.push($scope.modal_info.rooms[key]);
                        console.log(value.room_type + " FACILITY");
                    }
                });  
                // $scope.PMCTQ_unit = unittemp;
        });
        $('#info_modal').modal('toggle')
    }
           // map.on('click', onMapClick);
            
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
        }, 1000)
      };
false

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
    }else if(param == 4){ // SHOW REMOVE INTERFACE
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
   


   // console.log($scope.add);
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
                        console.log(value.building_name + " IS EQUAL " + selectedBui);

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


                        (angular.element('#subevent_name').val(""));
                        (angular.element('#event_start_time').val(""));
                        (angular.element('#event_end_time').val(""));
                        (angular.element('#repeatSelectBui').val(""));
                        (angular.element('#repeatSelectRoom').val(""));
                        (angular.element('#subEventDescription').val(""));
                        (angular.element('#subevent_host').val(""));

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
                }

            }
}


$scope.removeSubEvent = function(id, name){
    alertify.confirm('Do you want to remove <b>"' + name +  '"</b> sub-event?',



            function(){
                $scope.EventHoldertemp.sub_specification.splice(id-1, 1);
                alertify.success('Remove Succesfully');
            },
            function(){
                alertify.error('Remove Cancelled');
            }  
            ).setHeader('<em> Alert! </em> ');
  
}


$scope.saveEvent = function(name){
    console.log($scope.EventHoldertemp);
    console.log($scope.EventHoldertemp.sub_specification);
    if($scope.EventHoldertemp.sub_specification.length == 0){

        alertify.alert("<b style='color:red;'>You need to create a schedule of sub-events first!</b>").setHeader('<em> Alert! </em> '); 
    }else{
           alertify.confirm('<p style="color:red;">WARNING! </p>Do you want to Save  <b>"' + name +  '"</b> event? <br>',



            function(){

                $scope.EventHolder = JSON.stringify($scope.EventHoldertemp);
                
                    $http.post('handler/insertEventHandler.php', $scope.EventHolder).then(function(data){
                        // $scope.PMCTQ_unit = unittemp;
                    });

                alertify.success('Saved Succesfully');
            },
            function(){
                alertify.error('Save Cancelled');
            }  
            ).setHeader('<em> Confirm! </em> ');
    }


 
  
}




      $scope.newDiv = function(){
        var iDiv = document.createElement('div');
        iDiv.id = 'block';
        iDiv.className = 'block';
        document.getElementById('generateEvent').append(iDiv);
        
        iDiv.innerHTML = "I'm the first div";
      }


    // $scope.mapmapparam = function() {
    //    console.log($scope.savers);
     
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
    load_init();
   
    $scope.intervalFunction();
    init();
}
