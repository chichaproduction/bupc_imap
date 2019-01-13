<!DOCTYPE html>
<html ng-app="bupc_imap" ng-controller="bupc_imap_Controller">
    <head>
        <title>{{title}}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
            <!-- BOOTSTRAP -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap.css" rel="stylesheet">
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
                <a class="nav-link" href="#">Events</a>
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
    <div>
    <!-- <img src="img/Main MAP.jpg" width="1920" height="1080" usemap="#mapmapping"> -->
      <img id="map" src="img/Main MAP.jpg" width="1920" height="1080" orgWidth="1920" orgHeight="1080" usemap="#bupcmap" alt="" style="align:center;"/>
      <map name="bupcmap">
        <area shape="rect" coords="1918,1078,1920,1080" alt="Image Map" style="outline:none;" title="Image Map" href="http://www.image-maps.com/index.php?aff=mapped_users_0" />
        <area id="avr"     alt="" title="Audio Visual Room"         shape="poly" coords="628,716,628,696,720,644,777,656,777,677,686,726" style="outline:none;" target="_self"     />
        <area id="gym"     alt="" title="GYM"                       shape="poly" coords="1065,428,1018,418,963,444,922,438,900,450,881,451,801,436,803,416,780,410,778,364,773,361,775,347,784,341,821,324,929,270,979,272,1024,280,1059,291,1076,300,1092,320,1090,352,1089,378,1079,387,1077,404,1087,412,1083,414" style="outline:none;" target="_self"     />
        <area id="canteen" alt="" title="CANTEEN"                   shape="poly" coords="1031,491,1099,504,1122,493,1120,488,1120,485,1141,470,1142,464,1141,462,1103,448,1072,448,1028,472" style="outline:none;" target="_self"     />
        <area id="rm"      alt="" title="RM Building"               shape="poly" coords="1348,553,1451,484,1456,462,1354,442,1328,460,1330,478,1342,481,1319,496,1153,466,1121,486,1125,510" style="outline:none;" target="_self"     />
        <area id="nursing" alt="" title="NURSING"                   shape="poly" coords="1466,462,1497,443,1498,411,1299,375,1192,439,1192,470,1256,484,1329,437" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title="TB 3"                      shape="poly" coords="1166,466,1190,452,1191,437,1240,408,1243,399,1180,387,1098,436,1100,447,1142,458,1146,466,1154,465,1157,463" style="outline:none;" target="_self"     />
        <area id="dorm"    alt="" title="Dorm"                      shape="poly" coords="1287,356,1286,333,1317,315,1505,348,1504,373,1477,390,1397,377,1392,381,1365,377" style="outline:none;" target="_self"     />
        <area id="tb"      alt="" title="TB Technology Building"    shape="poly" coords="1213,346,1244,330,1242,277,1253,271,1101,244,1087,259,1039,251,1002,269,1007,275,1062,290,1083,304,1095,315,1094,325,1092,333,1095,340,1105,343,1129,331" style="outline:none;" target="_self"     />
        <area id="sb"      alt="" title="SB Salceda Building"       shape="poly" coords="1271.0000305175781,608,1271.0000305175781,573,1282.0000305175781,565,1284.0000305175781,555,1242.0000305175781,534,1210.0000305175781,539,1070.0000305175781,629,1024.0000305175781,620,1100.0000305175781,572,1099.0000305175781,533,1106.0000305175781,528,1106.0000305175781,520,1067.0000305175781,500,1042.0000305175781,505,953.0000305175781,558,853.0000305175781,615,829.0000305175781,637,836.0000305175781,642,836.0000305175781,681,1078.0000305175781,735" style="outline:none;" target="_self"     />
        <area id="cesd"    alt="" title="CESD Building"             shape="poly" coords="552.0000305175781,515,648.0000305175781,466,697.0000305175781,476,701.0000305175781,473,774.0000305175781,489,821.0000305175781,502,819.0000305175781,535,742.0000305175781,577,742.0000305175781,563,749.0000305175781,558" style="outline:none;" target="_self"     />
        <area id="ab"      alt="" title="AB Admin Building"         shape="poly" coords="496.0000305175781,504,749.0000305175781,558,742.0000305175781,564,742.0000305175781,601,700.0000305175781,625,588.0000305175781,601,573.0000305175781,610,545.0000305175781,603,554.0000305175781,593,458.0000305175781,571,456.0000305175781,530,445.0000305175781,525" style="outline:none;" target="_self"     />
        <area id="er_r"    alt="" title="ER Building | Registrar"   shape="poly" coords="151,620,200,632,365,553,365,530,316,520,148,598" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="322,517,368,529,366,546,388,550,473,509,475,489,414,475" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="446,461,447,471,489,490,569,452,570,430,529,422" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="589.0000305175781,372.00000762939453,600.0000305175781,379.00000762939453,643.0000305175781,396.00000762939453,632.0000305175781,405.00000762939453,633.0000305175781,418.00000762939453,653.0000305175781,421.00000762939453,762.0000305175781,370.00000762939453,761.0000305175781,340.00000762939453,771.0000305175781,334.00000762939453,772.0000305175781,332.00000762939453,708.0000305175781,318.00000762939453" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="809.0000305175781,293.00000762939453,810.0000305175781,312.00000762939453,835.0000305175781,316.00000762939453,852.0000305175781,308.00000762939453,909.0000305175781,280.00000762939453,912.0000305175781,273.00000762939453,877.0000305175781,260.00000762939453" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="1018.0000305175781,518.0000305175781,945.0000305175781,560.0000305175781,914.0000305175781,556.0000305175781,912.0000305175781,532.0000305175781,949.0000305175781,508.0000305175781,986.0000305175781,507.0000305175781" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="841.0000152587891,589,857.0000152587891,579,879.0000152587891,586,878.0000152587891,600,857.0000152587891,613,843.0000152587891,612" style="outline:none;" target="_self"     />
        <area id="tb3"     alt="" title=""                          shape="poly" coords="1020,830.0000305175781,1057,839.0000305175781,1123,792.0000305175781,1123,789.0000305175781,1095,778.0000305175781,1081,776.0000305175781,1021,820.0000305175781" style="outline:none;" target="_self"     />
        <area id="field" ng-click="modal_func(id)" data-toggle="modal" data-target="#exampleModalLong" alt="" title="Field" href="" shape="poly" coords="444.00001525878906,581,675.0000152587891,638,568.0000152587891,699,312.00001525878906,646" style="outline:none;" target="_self"     />
      </map>
    </div>
    
    <footer class="page-footer font-small blue pt-4 fixed-bottom bg-dark-green" ng-app="">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-lg-12">
            <input ng-model="search.find" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <!-- <div class="footer-copyright text-center py-3">© 2018 Copyright  </div> -->
    
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Launch demo modal
          </button> -->
    </footer>
    
    <!-- BUILDING MODALS -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="img/TED new Building.jpg" width="100%">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
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

        <!-- JQUERY priority 1 -->
        <script src="js/jquery.min.js"></script>

        <!-- BOOTSTRAP priority 2 -->
        <script src="js/bootstrap.min.js"></script>

        <!-- Angular JS Scripts -->
        <script src="js/angular.min.js"></script>
        <script src="js/angular-route.min.js"></script>
        
        <!-- AngularJS Application Specific Scripts -->
        <script src="app/app.js"></script>
        <script src="app/controllers/homeController.js"></script>   
        <script src="app/controllers/aboutController.js"></script>
    </body>
</html>