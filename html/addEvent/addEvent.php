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
        <link href="css/select.css"  rel="stylesheet">
        <!-- main -->
        <link href="css/alertify.min.css" rel="stylesheet">

            <!-- main -->
        <link href="css/full.css" rel="stylesheet">
       

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
                <a class="nav-link" href="">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Free View</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ui-select ng-model="superhero.selected">
          <ui-select-match placeholder="Select or search a superhero in the list..."> {{$select.selected}}</ui-select-match>
          <ui-select-choices repeat="hero in superheroes | filter: $select.search">
            <div ng-bind="hero"></div>
          </ui-select-choices>
        </ui-select>

        <!-- ADD Event -->
        <div class="card ">
                    <div class="card-body dark_blue_green borderraidus">

                       <div class="row">
                      
                            <div class="col-lg-10">
                            Event Date/Dates:
                                <input id="date_from" 
                                style="width:100%;"
                                data-multiple-dates="31"
                                data-multiple-dates-separator=", "
                                ng-model="dateFrom" 
                                type='text' 
                                class="datepicker-here" 
                                data-position='bottom left'
                                autocomplete="off"
                                data-language='en'
                                />
                            </div>

                            <div class="col-lg-2">
                              <button type="button" class="btn btn-light" ng-click="createEventDate()" style="width:100%;">Create Event</button>
                            </div>

                           
                        </div>

                        <hr>

                          <div id="generateEvent" class="row">
                        
                          </div>


<!-- 





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
<!-- UI SELECT -->
<script src="js/select.js"></script>
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

       
    </body>
</html>