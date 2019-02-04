<!DOCTYPE html>
<html ng-app="bupc_imap" ng-controller="bupc_imap_Controller">
    <head>
        <title>{{title}}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">
            <!-- BOOTSTRAP -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="node_modules/leaflet/dist/leaflet.css" rel="stylesheet">
        <link href="css/datepicker.css"  rel="stylesheet">
        <!-- <link href="css/select.css"  rel="stylesheet"> -->
        <link href="css/select.min.css"  rel="stylesheet">
        <link href="css/select2.css"  rel="stylesheet">
        <link href="css/select2.min.css"  rel="stylesheet">
        <!-- main -->
        <link href="css/alertify.min.css" rel="stylesheet">

            <!-- main -->
        <link href="css/full.css" rel="stylesheet">
       

        
          <!-- JQUERY priority 1 -->
          <script src="js/jquery.min.js"></script>

          <!-- BOOTSTRAP priority 2 -->
          <script src="js/bootstrap.min.js"></script>

          <!-- Angular JS Scripts -->
          <script src="js/angular.min.js"></script>
          <script src="js/angular-route.min.js"></script>

          <!-- LEAFLET -->
          <script src="node_modules/leaflet/dist/leaflet.js"></script>

          <!-- DatePicker -->
          <script src="js/datepicker.js"></script>
          <script src="js/i18n/datepicker.en.js"></script>
          <!-- SANITIZE -->
          <script src="js/angular-sanitize.js"></script>
          <script src="js/angular-sanitize.min.js"></script>
          <!-- UI SELECT -->
          <script src="js/select.js"></script>
          <!-- <script src="js/select.min.js"></script> -->
           <!-- SELECT 2 -->
          <!-- <script src="js/select2.js"></script> -->
          <!-- <script src="js/select2.min.js"></script> -->



          <!-- <script src="bower_components/air-datepicker/dist/js/datepicker.min.js"></script>
          <script src="bower_components/air-datepicker/dist/js/datepicker.en.js"></script>
          <script src="bower_components/air-datepicker/dist/js/air-datepicker.js"></script> -->
          <!-- main -->
          <!-- <script src="js/full.js"></script> -->

          <!-- alertify -->
          <script src="js/alertify.min.js"></script>

          <!-- AngularJS Application Specific Scripts -->
          <script src="app/app.js"></script>
          <script src="app/controllers/homeController.js"></script>   
          <script src="app/controllers/aboutController.js"></script>




    </head>
    <body>

        <!-- Navigation -->
        
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-green fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">BUPC MAP INTERACTIVE</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"  data-toggle="modal" data-target=".eventsModal" >Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Free View</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container navtopfix full" style="height:100%; padding:0;">
      <div id="map"></div>
      </div>

      <!-- Large modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".eventsModal">Large modal</button> -->

        <div class="modal fade eventsModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

                  <div class="modal-header bg-success textWhite">
                    <h5 class="modal-title" id="info_modal_title">EVENTS</h5>
                  
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                <div class="modal-body">
                  <marquee  behavior="scroll" scrollamount="2" bgcolor="yellow" loop="-1" width="100%"><i>
                    <strong><font color="blue">Date:</font> <span>{{datecurr}}</span></strong>
                    <strong><font color="blue">Time:</font> <span>{{datetime}}</span></strong>
                  
                  </i></marquee> 

            <!--       EVENT WOKRPLACE       -->

                          <!-- ADD Event -->
                          <div class="card" ng-show="defaultView == 2" >
                            <div class="card-body dark_blue_green borderraidus">
                            <div class="row">
                                  <div class="col-lg-12">
                                    <div class="input-group input-group-sm">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Event Name</span>
                                      </div>
                                      <input id="event_Name" ng-model="add.eventName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ng-required="true">
                                    </div>
                                  </div>
                            </div>

                            <div class="row">
                                  <div class="col-lg-12">
                                    Event Description:
                                    <textarea ng-model="add.eventDescription" class="form-control" id="eventDescription" rows="2" ng-required="true"></textarea>  
                                  </div>     
                              </div>
                              <div class="row">
                                    <div class="col-lg-12">
                                    Event Date:
                                        <input id="event_date" 
                                        style="width:100%;"
                                        ng-model="add.eventDate" 
                                        type='text' 
                                        class="datepicker-here" 
                                        data-position='bottom left'
                                        autocomplete="off"
                                        data-language='en'
                                        />
                                    </div>
                              </div>
                                <br>
                              <div class="row">
                                  <div class="col-lg-12">
                                    <button type="button" class="btn btn-dark " ng-click="create_ADD_Date()" style="width:100%;">Create Event</button>
                                  </div>
                              </div>
                            </div>
                          </div>

                          <hr ng-show="defaultView == 2">
                                          <!-- ADD Event CRITERIA-->
                                        <div class="card" ng-show="defaultADDInputCriteria == 1" >
                                          <div class="card-body dark_blue_green borderraidus">

                                            <div><h3>{{add.eventName}}</h3></div>
                                                  <div><h5><small>Date:</small> {{viewEventDate}}</h5></div>
                                          
                                          

                                            <hr class="subEventHR">
                                            
                                            <h6>Add Sub-Events:</h6>

                                            <div class="row">
                                                  <div class="col-lg-12">
                                                    <div class="input-group input-group-sm">
                                                      <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-sm">Sub-Event Name</span>
                                                      </div>
                                                      <input id="subevent_name" type="text" ng-model="add.subEventName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ng-required="true">
                                                    </div>
                                                  </div>
                                            </div>
                                            <div class="row">
                                                  <div class="col-lg-6">
                                                    Start Time: <input id="event_start_time" ng-model="add.event_start_time" name="event_start_time"  type="time" style="width:100% !important;" ng-required="true">
                                                    </div>
                                                    <div class="col-lg-6">
                                                    End Time:   <input id="event_end_time"   ng-model="add.event_end_time"    name="event_end_time"  type="time" style="width:100% !important;" ng-required="true">
                                                  </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                Select Building / Campus Location / Department Building:
                                                  <select name="repeatSelect" id="repeatSelectBui" ng-model="add.buildingName" style="width:100% !important;" ng-change="addBuildingChange(add.buildingName)" ng-required="true">
                                                    <option ng-repeat="building in building_data" value="{{building.building_name}}">{{building.building_name}}</option>
                                                  </select>   
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                Select Specific Facility / Room:
                                                  <select name="repeatSelect" id="repeatSelectRoom" ng-model="add.roomName" style="width:100% !important;" ng-disabled="add.buildingName == undefined" ng-required="true"> 
                                                    <option ng-repeat="room in addRoom" value="{{room}}">{{room}}</option>
                                                  </select>   
                                                </div>     
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                  Sub-Event Description:
                                                  <textarea class="form-control" ng-model="add.subEventDescription" id="subEventDescription" rows="2" ng-required="true"></textarea>  
                                                </div>     
                                            </div>


                                            


                                            <br>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                  <button style="width:100% !important;" type="button" class="btn btn-danger" ng-click="eventController(2)">[-] Delete Sub-Event</button>
                                                </div>     
                                                <div class="col-lg-6">
                                                  <button style="width:100% !important;" type="button" class="btn btn-success" ng-click="addSubEvent()">[+] Add Sub-Event</button>
                                                </div>   
                                            </div>

                                          </div>
                                      </div>
                                      
                                        <!-- VIEW SUBEVENTS-->
                                      <div class="card"  ng-show="defaultADDInputCriteria == 1" >
                                        <div class="card-body">

                                          <div class="row">
                                                <div class="col-lg-12 text-center">
                                                  <h2 style="mar">{{EventHoldertemp.event_name}}<h2>
                                                </div>
                                          </div>
                                          <div class="row">
                                                <div class="col-lg-12 text-center">
                                                  <h4 style="mar">{{EventHoldertemp.event_date}}<h4>
                                                </div>
                                          </div>
                                          <div class="row">
                                                <div class="col-lg-12 text-center">
                                                  <h6 style="mar">{{EventHoldertemp.event_description}}<h6>
                                                </div>
                                          </div>

                                          <div class="row" ng-repeat="(key, value) in EventHoldertemp.sub_specification track by $index">
                                          <div class="col-lg-12 table-responsive table-responsive-sm"> 
                                                  <!-- ID:       {{value.id}}
                                                  <h6>Sub-Event Name: {{value.sub_event_name}}<h6>  <span> Start: {{value.sub_event_start_time}}</span>
                                                  
                                                  End: {{value.sub_event_end_time}} <br>
                                                  @{{value.sub_event_building}} - {{value.sub_event_room}}
                                                  {{value.sub_event_description}} -->


                                                  <table class="table table-sm">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col" colspan="5" class="bg-success">{{value.sub_event_name}}</th>
                                                      </tr>
                                                      <tr class="table-success">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Start</th>
                                                        <th scope="col">End</th>
                                                        <th scope="col">Hosted at</th>
                                                        <th scope="col">Description</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr class="table-success">
                                                        <th scope="row">{{value.id}}</th>
                                                        <td>{{value.sub_event_start_time}}</td>
                                                        <td>{{value.sub_event_end_time}}</td>
                                                        <td>@ {{value.sub_event_building}} - {{value.sub_event_room}}</td>
                                                        <td>{{value.sub_event_description}}</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>

                                                  
                                          </div>
                                          </div>

                                        </div>
                                      </div>


                                         <!-- VIEW SUBEVENTS-->
                                         <div class="card"  ng-show="defaultADDInputCriteria == 1" >
                                        <div class="card-body">
                                        <button type="button" class="btn btn-primary btn-lg btn-block">SAVE EVENT</button>
                                        </div>
                                      </div>
                          
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" ng-click="eventController(1)">View Event</button>
                  <button type="button" class="btn btn-success" ng-click="eventController(2)">Add Event</button>
                  <button type="button" class="btn btn-warning" ng-click="eventController(3)">Edit Event</button>
                  <button type="button" class="btn btn-danger"   ng-click="eventController(4)">Remove Event</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>


        </div>
      </div>
    </div>

      

<!-- 
    <div class="container col-12">
      <img id="map" src="img/Main MAP.jpg" width="1920" height="1080" orgWidth="1920" orgHeight="1080" usemap="#bupcmap" alt="" style="align:center;"/>
      <map name="bupcmap">
        <area shape="rect" coords="1918,1078,1920,1080" alt="Image Map" style="outline:none;" title="Image Map" href="http://www.image-maps.com/index.php?aff=mapped_users_0" />
        <area id="avr"       ng-click="modal_func('avr')"      alt="" title="Audio Visual Room"                                      data-toggle="modal" data-target="#info_modal"     shape="poly" coords="628,716,628,696,720,644,777,656,777,677,686,726" style="outline:none;" target="_self"     />
        <area id="gym"       ng-click="modal_func('bg')"       alt="" title="Gymnasium"                                              data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1065,428,1018,418,963,444,922,438,900,450,881,451,801,436,803,416,780,410,778,364,773,361,775,347,784,341,821,324,929,270,979,272,1024,280,1059,291,1076,300,1092,320,1090,352,1089,378,1079,387,1077,404,1087,412,1083,414" style="outline:none;" target="_self"     />
        <area id="canteen"   ng-click="modal_func('c')"        alt="" title="Canteen"                                                data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1031,491,1099,504,1122,493,1120,488,1120,485,1141,470,1142,464,1141,462,1103,448,1072,448,1028,472" style="outline:none;" target="_self"     />
        <area id="nursing"   ng-click="modal_func('nd')"       alt="" title="Nursing Building"                                       data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1348,553,1451,484,1456,462,1354,442,1328,460,1330,478,1342,481,1319,496,1153,466,1121,486,1125,510" style="outline:none;" target="_self"     />
        <area id="nursing"   ng-click="modal_func('nd')"       alt="" title="Nursing Building"                                       data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1466,462,1497,443,1498,411,1299,375,1192,439,1192,470,1256,484,1329,437" style="outline:none;" target="_self"     />
        <area id="ft"        ng-click="modal_func('ftb')"      alt="" title="Food Technology Building"                               data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1166,466,1190,452,1191,437,1240,408,1243,399,1180,387,1098,436,1100,447,1142,458,1146,466,1154,465,1157,463" style="outline:none;" target="_self"     />
        <area id="dorm"      ng-click="modal_func('d')"        alt="" title="Dorm"                                                   data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1287,356,1286,333,1317,315,1505,348,1504,373,1477,390,1397,377,1392,381,1365,377" style="outline:none;" target="_self"     />
        <area id="tb"        ng-click="modal_func('tb')"       alt="" title="Technology Building"                                    data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1213,346,1244,330,1242,277,1253,271,1101,244,1087,259,1039,251,1002,269,1007,275,1062,290,1083,304,1095,315,1094,325,1092,333,1095,340,1105,343,1129,331" style="outline:none;" target="_self"     />
        <area id="sb"        ng-click="modal_func('sb')"       alt="" title="Salceda Building"                                       data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1271.0000305175781,608,1271.0000305175781,573,1282.0000305175781,565,1284.0000305175781,555,1242.0000305175781,534,1210.0000305175781,539,1070.0000305175781,629,1024.0000305175781,620,1100.0000305175781,572,1099.0000305175781,533,1106.0000305175781,528,1106.0000305175781,520,1067.0000305175781,500,1042.0000305175781,505,953.0000305175781,558,853.0000305175781,615,829.0000305175781,637,836.0000305175781,642,836.0000305175781,681,1078.0000305175781,735" style="outline:none;" target="_self"     />
        <area id="cesd"      ng-click="modal_func('cesd')"     alt="" title="CESD Building"                                          data-toggle="modal" data-target="#info_modal"     shape="poly" coords="552.0000305175781,515,648.0000305175781,466,697.0000305175781,476,701.0000305175781,473,774.0000305175781,489,821.0000305175781,502,819.0000305175781,535,742.0000305175781,577,742.0000305175781,563,749.0000305175781,558" style="outline:none;" target="_self"     />
        <area id="ab"        ng-click="modal_func('ab')"       alt="" title="Admin Building"                                         data-toggle="modal" data-target="#info_modal"     shape="poly" coords="496.0000305175781,504,749.0000305175781,558,742.0000305175781,564,742.0000305175781,601,700.0000305175781,625,588.0000305175781,601,573.0000305175781,610,545.0000305175781,603,554.0000305175781,593,458.0000305175781,571,456.0000305175781,530,445.0000305175781,525" style="outline:none;" target="_self"     />
        <area id="cb"        ng-click="modal_func('cb')"       alt="" title="Cacapit Building"                                       data-toggle="modal" data-target="#info_modal"     shape="poly" coords="151,620,200,632,365,553,365,530,316,520,148,598" style="outline:none;" target="_self"     />
        <area id="atb"       ng-click="modal_func('atb')"      alt="" title="Automotive Building"                                    data-toggle="modal" data-target="#info_modal"     shape="poly" coords="322,517,368,529,366,546,388,550,473,509,475,489,414,475" style="outline:none;" target="_self"     />
        <area id="repc"      ng-click="modal_func('repc')"     alt="" title="Research Extension, and Production Center Building"     data-toggle="modal" data-target="#info_modal"     shape="poly" coords="446,461,447,471,489,490,569,452,570,430,529,422" style="outline:none;" target="_self"     />
        <area id="arec"      ng-click="modal_func('arec')"     alt="" title="AREC Building"                                          data-toggle="modal" data-target="#info_modal"     shape="poly" coords="589.0000305175781,372.00000762939453,600.0000305175781,379.00000762939453,643.0000305175781,396.00000762939453,632.0000305175781,405.00000762939453,633.0000305175781,418.00000762939453,653.0000305175781,421.00000762939453,762.0000305175781,370.00000762939453,761.0000305175781,340.00000762939453,771.0000305175781,334.00000762939453,772.0000305175781,332.00000762939453,708.0000305175781,318.00000762939453" style="outline:none;" target="_self"     />
        <area id="mwsb"      ng-click="modal_func('mwsb')"     alt="" title="Machine and Welding Shop Building"                      data-toggle="modal" data-target="#info_modal"     shape="poly" coords="809.0000305175781,293.00000762939453,810.0000305175781,312.00000762939453,835.0000305175781,316.00000762939453,852.0000305175781,308.00000762939453,909.0000305175781,280.00000762939453,912.0000305175781,273.00000762939453,877.0000305175781,260.00000762939453" style="outline:none;" target="_self"     />
        <area id="css"       ng-click="modal_func('css')"      alt="" title="Council Student Service Building"                       data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1018.0000305175781,518.0000305175781,945.0000305175781,560.0000305175781,914.0000305175781,556.0000305175781,912.0000305175781,532.0000305175781,949.0000305175781,508.0000305175781,986.0000305175781,507.0000305175781" style="outline:none;" target="_self"     />
        <area id="sf"        ng-click="modal_func('sf')"       alt="" title="Soccer Field"                                           data-toggle="modal" data-target="#info_modal"     shape="poly" coords="1360,316,1674,380,1765,317,1434,267" style="outline:none;" target="_self"     />
        <area id="m"         ng-click="modal_func('m')"        alt="" title="Motorpool"                                              data-toggle="modal" data-target="#info_modal"     shape="poly" coords="531,392,546,424,576,433,572,443,589,448,631,430,631,403,638,398,577,371" style="outline:none;" target="_self"     />
</map> -->

        
        <!-- <area id="tb3"     alt="" title=""                          shape="poly" coords="841.0000152587891,589,857.0000152587891,579,879.0000152587891,586,878.0000152587891,600,857.0000152587891,613,843.0000152587891,612" style="outline:none;" target="_self"     /> -->
        <!-- <area id="tb3"     alt="" title=""                          shape="poly" coords="1020,830.0000305175781,1057,839.0000305175781,1123,792.0000305175781,1123,789.0000305175781,1095,778.0000305175781,1081,776.0000305175781,1021,820.0000305175781" style="outline:none;" target="_self"     /> -->
        <!-- <area id="field"  data-toggle="modal" data-target="#info_modal" alt="" title="Field" href="" shape="poly" coords="444.00001525878906,581,675.0000152587891,638,568.0000152587891,699,312.00001525878906,646" style="outline:none;" target="_self"     />
      </map>
    </div> -->
    
    <!-- <footer class="page-footer font-small blue pt-4 fixed-bottom bg-dark-green" ng-app="">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-lg-12">
            <input ng-model="search.find" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div>
      </div> -->
      <!-- <div class="footer-copyright text-center py-3">© 2018 Copyright  </div> -->
    
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Launch demo modal
          </button> -->
    <!-- </footer> -->
    

    <!-- Modal -->
    <div class="container">
      <div class="modal fade" id="info_modal" tabindex="-1" role="dialog" aria-labelledby="info_modal_title" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content ">
            <div class="modal-header bg-success textWhite">
              <h5 class="modal-title" id="info_modal_title">{{modal_info.building_name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <img src={{modal_info.image_link}} width="100%">
            </div>

            <div class="col">
                <div id="accordion">
              <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx CARD 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
                  <div class="card ">
                    <div class="card-header bg-success textWhite" id="headingOne">
                      <h5 class="mb-0">
                        <span class="btn textWhite" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Description
                        </span>
                      </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body ">
                        {{modal_info.building_desc}}
                      </div>
                    </div>
                  </div>

                  <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx CARD 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
                  <div class="card ">
                    <div class="card-header bg-success textWhite" id="headingTwo">
                      <h5 class="mb-0">
                        <span class="btn textWhite collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Facilities
                        </span>
                      </h5>
                    </div>
                    <div id="collapseTwo" class=" collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div class="card-body">

                      <div class="row">
                          <!-- ROOOMS -->
                          <div class="table-responsive table-hover col-lg-6">
                            <table class="table light_green">
                              <thead>
                                <tr class="table-success">
                                    <td>Rooms</td>
                                </tr>
                              </thead>
                              <tbody >
                                <tr  ng-repeat="(key, value) in classroom track by $index">
                                  <td ng-click="room_name_clicked(value.room_name)">{{value.room_name}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <!-- OFFICES -->
                          <div class="table-responsive table-hover col-lg-6">
                            <table class="table light_green">
                              <thead>
                                <tr class="table-danger">
                                    <td>Office</td>
                                </tr>
                              </thead>
                              <tbody >
                                <tr  ng-repeat="(key, value) in office track by $index">
                                  <td ng-click="room_name_clicked(value.room_name)">{{value.room_name}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                    </div>
                    <div class="row">

                            <!-- FACILITY -->
                          <div class="table-responsive table-hover col-lg-6">
                            <table class="table light_green">
                              <thead>
                                <tr class="table-warning">
                                    <td>Facility</td>
                                </tr>
                              </thead>
                              <tbody >
                                <tr  ng-repeat="(key, value) in facility track by $index">
                                  <td ng-click="room_name_clicked(value.room_name)">{{value.room_name}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div class="table-responsive table-hover col-lg-6">
                            <table class="table light_green">
                              <thead>
                                <tr class="table-info">
                                    <td>Comfort Room</td>
                                </tr>
                              </thead>
                              <tbody >
                                <tr  ng-repeat="(key, value) in comfortroom track by $index">
                                  <td ng-click="room_name_clicked(value.room_name)">{{value.room_name}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                    </div>

                  </div>
              </div>
            </div>

                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx CARD 3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

                    <!-- <div class="card ">
                      <div class="card-header bg-success textWhite" id="headingThree">
                        <h5 class="mb-0">
                            <span class="btn textWhite collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Building Personnels
                            </span>
                        </h5>
                      </div>
                      <div id="collapseThree" class=" collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
              </div> -->

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              
        </div>
      </div>
    </div>
  </div>
        <!-- <div>Hi {{name}}, welcome to AngularJS Tutorial Series</div>
        
        <div ng-controller="AboutController">Brought to you by {{name}}.</div>

        <div>
            Welcome to AngularJS Modules Tutorial
            <h4>Values examples</h4>
            <p>The value of pi is: {{piValue}}</p>
            <p>Our planet is: {{ourPlanet}}</p>
            <p>Logged in user details</p>
            <ul>
                <li>id : {{user.id}}</li>
                <li>name : {{name}}</li>
                <li>email : {{name}} @gmail.com</li>
            </ul>
        </div>

        <h4>Factory examples</h4>
        <p>helloFactory returned: {{helloFactory}}</p>

        <p>The VAT amount is ${{vat}}</p>

        <h4>Service examples</h4>
        <p>helloService returned: {{helloService}}</p>
        <p>helloServiceName returned: {{helloServiceName}}</p> -->




       
    </body>
</html>