
<?php              
$conn=mysqli_connect('localhost','root','','pizzodb');
if(isset($_POST['done'])){

 
  $t1 = $_POST['t1'];
  $t2 = $_POST['t2'];
  $t3 = $_POST['t3'];
  $t4 = $_POST['t4'];
  $t5 = $_POST['t5'];

  $s1 = $_POST['s1'];
  $s2 = $_POST['s2'];
  $s3 = $_POST['s3'];
  $s4 = $_POST['s4'];
  $s5 = $_POST['s5'];

  $v1 = $_POST['v1'];
  $v2 = $_POST['v2'];
  $v3 = $_POST['v3'];
  $v4 = $_POST['v4'];
  $v5 = $_POST['v5'];

  $c1 = $_POST['c1'];
  $c2 = $_POST['c2'];
  $c3 = $_POST['c3'];
  $c4 = $_POST['c4'];
  $c5 = $_POST['c5'];



  $q1 = " update inventory set thin= '$t1'";
  $q2 = " update inventory set thick= '$t2'";
  $q3 = " update inventory set sicilian= '$t3'";
  $q4 = " update inventory set pan= '$t4'";
  $q5 = " update inventory set deep= '$t5'";

   $q6 = " update inventory set red= '$s1'";
   $q7 = " update inventory set bbq= '$s2'";
   $q8 = " update inventory set pesto= '$s3'";
   $q9 = " update inventory set alfredo= '$s4'";
   $q10 = " update inventory set mari= '$s5'";

   $q11 = " update inventory set mozz= '$c1'";
   $q12 = " update inventory set havarti= '$c2'";
   $q13 = " update inventory set provolone= '$c3'";
   $q14 = " update inventory set cheddar= '$c4'";
   $q15 = " update inventory set ultimate= '$c5'";

   $q16 = " update inventory set squash= '$v1'";
   $q17 = " update inventory set pepper= '$v2'";
   $q18 = " update inventory set broc= '$v3'";
   $q19 = " update inventory set corn= '$v4'";
   $q20 = " update inventory set eggplant= '$v5'";

  $query1 = mysqli_query($conn,$q1);
  $query2 = mysqli_query($conn,$q2);
  $query3 = mysqli_query($conn,$q3);
  $query4 = mysqli_query($conn,$q4);
  $query5 = mysqli_query($conn,$q5);

 $query6 = mysqli_query($conn,$q6);
 $query7 = mysqli_query($conn,$q7);
 $query8 = mysqli_query($conn,$q8);
 $query9 = mysqli_query($conn,$q9);
 $query10 = mysqli_query($conn,$q10);

 $query11 = mysqli_query($conn,$q11);
 $query12 = mysqli_query($conn,$q12);
 $query13 = mysqli_query($conn,$q13);
 $query14 = mysqli_query($conn,$q14);
 $query15 = mysqli_query($conn,$q15);

 $query16 = mysqli_query($conn,$q16);
 $query17 = mysqli_query($conn,$q17);
 $query18 = mysqli_query($conn,$q18);
 $query19 = mysqli_query($conn,$q19);
 $query20 = mysqli_query($conn,$q20);
}

$conn->close();
?>


<!DOCTYPE html>
<html>

<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </link>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'>
  </link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

</head>


<body onload="portion()">
  <div class="d-flex bg-white" id="wrapper">

    <div class="bg-dark text-white" id="sidebar-wrapper">
      <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold  border-bottom">Admin Suparna
      </div>
      <div class="list-group bg-dark list-group-flush my-3" style="height: 700px">
        <a href="#" class="list-group-item list-group-item-action bg-dark second-text fw-bold"><i
            class="text-white fas fa-shopping-cart me-2"></i><button class="bg-dark text-white"
            style="border:none; font-weight:bold;font-size:17px" onclick="invent()">Inventory
            Stock</button></a><br />
        <a href="#" class="list-group-item list-group-item-action bg-dark second-text fw-bold"><i
            class="text-white fas fa-users me-2"></i><button class="bg-dark text-white"
            style="border:none; font-weight:bold;font-size:17px" onclick="customer()">Customer
            Information</button></a><br />
        <a href="#" class="list-group-item list-group-item-action bg-dark second-text fw-bold"><i
            class="text-white fas fa-project-diagram me-2"></i><button class="bg-dark text-white"
            style="border:none; font-weight:bold;font-size:17px" onclick="cart()">Analytics</button></a><br />
        <a href="#" class="list-group-item list-group-item-action bg-dark text-danger fw-bold"><i
            class="fas fa-power-off me-2" style="color:  #ffaf4d"></i><button class="bg-dark"
            style="border:none; color: #ffaf4d" class="text-danger fw-bold" type="button" data-bs-toggle="modal"
            data-bs-target="#exampleModal"><b>Logout</b></button></a><br />
      </div>
    </div>





    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Log out Session</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to Log out...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Stay Back</button>
            <button type="button" class="btn btn-danger"><a href="http://localhost:3000/"
                style="text-decoration : none; color:white">Log Out</a></button>
          </div>
        </div>
      </div>
    </div>



    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div class="d-flex align-items-center">
          <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
          <h2 class="fs-2 m-0">Dashboard</h2>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <p class=" ms-auto" style="position:absolute; top:15px;left:1000px">
            <i class="fas fa-user me-2"></i> Suparna Das <br> adminsuparna@gmail.com
          </p>

        </div>
      </nav>



      <form method="post">

        <div class="container-fluid px-4" id="invent">
          <div class="row my-0 col-lg-12">
            <h3 class="fs-4 mb-3 text-center">Availability of Ingredients</h3>
            <div class="col">
              <div class="container">
                <div class="row align-items-start">
                  <div class="col-sm-6">
                    <div class="card">
                      <h2 align="center">Pizza Base</h2>
                      <ul>

                        <?php

                          $conn=mysqli_connect('localhost','root','','pizzodb');
                          $sql="SELECT * FROM inventory";
                          $result=mysqli_query($conn,$sql);
                          $nums=mysqli_num_rows($result);  
                          while($row = mysqli_fetch_assoc($result)){
                         ?>

                        <li class="d-flex">Thin Crust <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="t1"
                            value="<?php echo $row['thin']; ?> ">
                        <li class="d-flex">Thick Crust <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="t2"
                            value="<?php echo $row['thick']; ?> ">
                        <li class="d-flex">Sicilian Crust<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="t3"
                            value="<?php echo $row['sicilian']; ?> ">
                        <li class="d-flex">Pan Pizza Crust <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="t4"
                            value="<?php echo $row['pan']; ?> ">
                        <li class="d-flex">Deep Dish Crust <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="t5"
                            value="<?php echo $row['deep']; ?> ">
                      </ul>

                    </div>
                    <br />

                    <div class="card">
                      <h2 align="center">Sauce Types</h2>
                      <ul>
                        <li class="d-flex">Spicy Red Sauce <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="s1"
                            value="<?php echo $row['red']; ?> ">
                        <li class="d-flex">BBQ Sauce <span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="s2" value="<?php echo $row['bbq']; ?> ">
                        <li class="d-flex">Pesto Sauce<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="s3"
                            value="<?php echo $row['pesto']; ?> ">
                        <li class="d-flex">Alfredo Sauce<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="s4"
                            value="<?php echo $row['alfredo']; ?> ">
                        <li class="d-flex">Marinara Sauce<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="s5"
                            value="<?php echo $row['mari']; ?> ">

                      </ul>

                    </div>

                  </div>

                  <div class="col-sm-6">

                    <div class="card">
                      <h2 align="center">Cheese Types</h2>
                      <ul>

                        <li class="d-flex">Mozzarella<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="c1" value="<?php echo $row['mozz']; ?> ">
                        <li class="d-flex">Aged Havarti<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="c2"
                            value="<?php echo $row['havarti']; ?> ">
                        <li class="d-flex">Provolone<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="c3" value="<?php echo $row['provolone']; ?> ">
                        <li class="d-flex">Cheddar<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="c4" value="<?php echo $row['cheddar']; ?> ">
                        <li class="d-flex">The Ultimate Cheese Pizza <span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="c5"
                            value="<?php echo $row['ultimate']; ?> ">

                      </ul>

                    </div> <br />
                    <div class="card">
                      <h2 align="center">Veggies Types</h2>
                      <ul>
                        <li class="d-flex">Yellow Squash<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="v1"
                            value="<?php echo $row['squash']; ?> ">
                        <li class="d-flex">Bell Peppers<span style="width:30%"></span> <input
                            class="form-control ms-auto" placeholder="20" style="width:30%" name="v2"
                            value="<?php echo $row['pepper']; ?> ">
                        <li class="d-flex">Broccoli<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="v3" value="<?php echo $row['broc']; ?> ">
                        <li class="d-flex">Corn<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="v4" value="<?php echo $row['corn']; ?> ">
                        <li class="d-flex">Eggplant<span style="width:30%"></span> <input class="form-control ms-auto"
                            placeholder="20" style="width:30%" name="v5" value="<?php echo $row['eggplant']; ?> ">

                          <?php
                  } 
           ?>
                      </ul>

                    </div>

                  </div>
                </div>
              </div>

              <br>
              <center><button class="btn btn-danger" type="submit" name="done"
                  onclick="alert('Records Edited Successfully!!!')">Edit Changes</button></center>

            </div>



          </div>
        </div>
    </div>
  </div>
  </div>

  </form>



  <div id="customer">

    <table class='table container container-fluid table-bordered text-center'
      style="width:75%; position:absolute; top:18%;left:20%">
      <h3 align="center" style="position:absolute;top:10%; left:50%">User Data</h3>
      <tr class='btn-primary'>
        <th>ID</th>
        <th>NAME</th>
        <th>PASSWORD</th>
        <th>EMAIL ID</th>
        <th>CONTACT</th>
        <th>NICKNAME</th>
        <th>DATE OF REGISTRATION</th>
        <th>Deliver Status</th>
      </tr>
      <?php
$mysqli = new mysqli('localhost', 'root', '', 'pizzodb');

if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Fetch data from the database
$query = "SELECT * FROM userform";
$result = $mysqli->query($query);

if ($result) {

    while ($row = $result->fetch_assoc()) {

      echo"<tr>";
      echo "<td>".$row['uid']."</td>";
      echo "<td>".$row['uname']."</td>";
      echo "<td>".$row['upwd']."</td>";
      echo "<td>".$row['uemail']."</td>";
      echo "<td>".$row['ucontact']."</td>";
      echo "<td>".$row['unick']."</td>";
      echo "<td>".$row['udt']."</td>";
      echo "<td><input type='checkbox' id='myCheck' onclick='myFunction()''></td>";
      echo"</tr>";
    }

    // Free the result set
    $result->free();
} else {
    // Error handling if the query fails
    echo "Error: " . $mysqli->error;
}


// Close the database connection
$mysqli->close();

?>
    </table>

  </div>





  <div id="analytic" style="margin-top: -50% ">
    <div class="row align-items-start">
      <div class="col-sm-3"></div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-0">
                <h5 class="card-title">Overall Growth</h5>

              </div>

              <div class="col-auto">
                <div class="stat text-primary">
                  <i class="fas fa-chart-line"></i>
                </div>
              </div>
            </div>
            <h1 class="mt-1 mb-3">2.382</h1>
            <div class="mb-0">
              <span class="badge badge-primary-light"> -3.65% </span>
              <span class="text-muted">6.65% Since last week</span>
            </div>
          </div>
        </div>


        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-0">
                <h5 class="card-title">Deliver Orders</h5>

              </div>

              <div class="col-auto">
                <div class="stat text-primary">
                  <i class="fas fa-truck"></i>
                </div>
              </div>
            </div>
            <h1 class="mt-1 mb-3">10000</h1>
            <div class="mb-0">
              <span class="badge badge-primary-light"> -3.65% </span>
              <span class="text-muted">20.65% Since last week</span>
            </div>
          </div>
        </div>


      </div>
      <div class="col-sm-4">


        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-0">
                <h5 class="card-title">Customers Visited</h5>

              </div>

              <div class="col-auto">
                <div class="stat text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-users align-middle">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>

                </div>
              </div>
            </div>
            <h1 class="mt-1 mb-3">7000</h1>
            <div class="mb-0">
              <span class="badge badge-success-light"> 5.25% </span>
              <span class="text-muted">2.65% Since last week</span>
            </div>
          </div>
        </div>



        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-0">
                <h5 class="card-title">Financial Status</h5>

              </div>

              <div class="col-auto">
                <div class="stat text-primary">
                  <i class="fas fa-coins"></i>
                </div>
              </div>
            </div>
            <h1 class="mt-1 mb-3">5.6%</h1>
            <div class="mb-0">
              <span class="badge badge-danger-light"> -2.25% </span>
              <span class="text-muted">40.65% Since last week</span>
            </div>
          </div>
        </div>

      </div>
    </div>


    <br>

    <div>

      <div class="container">
        <div class="row align-items-start">
          <div class="col-sm-2">


          </div>
          <div class="col-sm-5">
            <div class="card">
              <div id="myChart" style="width:600px"></div>
            </div>
          </div>


          <div class="col-sm-4">
            <div class="card">
              <div id="pie" style="width:600px;"></div>
            </div>

          </div>

        </div>
      </div>


      <!-- ending analytic-->
    </div>


  </div>


  <script>
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const data = google.visualization.arrayToDataTable([
        ['Months', 'Sales'],
        ['Jan', 55],
        ['Feb', 49],
        ['March', 44],
        ['April', 24],
        ['May', 15],
        ['June', 64],
        ['July', 74],
        ['August', 44],
        ['September', 84],
        ['October', 90],
        ['November', 24],
        ['December', 24],
      ]);

      const options = {
        title: 'Sales Growth for Year 2023'
      };

      const chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }
  </script>
  <script>
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Pizzo House', 'Mhl'],
        ['Base', 54.8],
        ['Sauce', 48.6],
        ['Cheese', 44.4],
        ['Veggies', 23.9],
        ['Pepporoni', 14.5]
      ]);

      var options = {
        title: 'Pizza Categories',
        is3D: true
      };

      var chart = new google.visualization.PieChart(document.getElementById('pie'));
      chart.draw(data, options);
    }
  </script>


  <script>

    function portion() {
      document.getElementById("customer").style.display = "none";
      document.getElementById("analytic").style.display = "none";
    }

    function customer() {
      document.getElementById("customer").style.display = "block";
      document.getElementById("invent").style.display = "none";
      document.getElementById("analytic").style.display = "none";
    }
    function invent() {
      document.getElementById("customer").style.display = "none";
      document.getElementById("invent").style.display = "block";
      document.getElementById("analytic").style.display = "none";
    }

    function cart() {
      document.getElementById("analytic").style.display = "block";
      document.getElementById("customer").style.display = "none";
      document.getElementById("invent").style.display = "none";

    }
    function myFunction() {

      var checkBox = document.getElementById("myCheck");
      if (checkBox.checked == true) {
        alert('Deliver status updated');
      } else {

      }
    }



  </script>

</body>

</html>
