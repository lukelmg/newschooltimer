<!DOCTYPE html>
<html>
<head>
  <title>Find Your SchoolTimer</title>
  <meta charset="UTF-8">	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
<script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=BenchNine:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css">
  <script>
    $(document).ready( function () {
      $('#example').DataTable();
      $('#example2').DataTable();
    } );
  </script>
  </head>
<body>
<h5 class="pageHeader">Find Your School's Timer</h5>
<h5 class="verifiedHeader">Verified Timers</h5>


<table id="example" class="display" style="width:100%">
<thead>
  <tr>
    <th>School</th>
    <th>Country</th>
    <th>State</th>
    <th>City</th>
    <th>Timer Code</th>
  </tr>
</thead>
  <tr>
    <td>Parkland High School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Allentown</td>
    <td><a href="https://www.lukegutman.com/PHS">PHS</a></td>
  </tr>
  <tr>
    <td>Orefiel Middle School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Orefield</td>
    <td><a href="https://www.lukegutman.com/OREFIELD">OREFIELD</a></td>
  </tr>
  <tr>
    <td>Springhouse Middle School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Allentown</td>
    <td><a href="https://www.lukegutman.com/SPRINGHOUSE">SPRINGHOUSE</a></td>
  </tr>
  <tr>
    <td>Emmaus High School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Emmaus</td>
    <td><a href="https://www.lukegutman.com/EMMAUS">EMMAUS</a></td>
  </tr>
   <tr>
    <td>Allentown Central Catholic High School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Allentown</td>
    <td><a href="https://www.lukegutman.com/ACCHS">ACCHS</a></td>
  </tr>
   <tr>
    <td>William Allen High School</td>
    <td>United States</td>
    <td>Pennsylvania</td>
    <td>Allentown</td>
    <td><a href="https://www.lukegutman.com/WILLIAMALLEN">WILLIAMALLEN</a></td>
  </tr>
</table>
 <br><br><br>

<h5 class="verifiedHeader">User Created Timers</h5>
<table id="example2" class="display" style="width:100%;">
  <thead>  <tr>
      <th>School</th>
      <th>Country</th>
      <th>State</th>
      <th>City</th>
      <th>Timer Code</th>
    </tr>
  </thead>
<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "Bananasluke@123";
$dbname = "SchoolTimer";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT school, country, state, city, shorturl FROM urlshortener";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      //  echo "School:". $row["school"]. " - Country: ". $row["country"]. " - State: " . $row["state"] .  " - City: " . $row["city"] . " - Shorturl: " . $row["shorturl"] . "<br>";
                echo '<tr>';
                  echo '<td>'. $row['school'] .'</td>';
                  echo '<td>'. $row['country'] .'</td>';
                  echo '<td>'. $row['state'] .'</td>';
                  echo '<td>'. $row['city'] .'</td>';
                  echo '<td class="caps"><a href="https://www.lukegutman.com/' . $row['shorturl']. ' "> '. $row['shorturl'] .'</a></td>';
                echo '</tr>';
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</table>

</body>
</html>

<style>

.caps {
  text-transform:uppercase;
}


</style>
