<!DOCTYPE html>
<html>
<body>

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
          echo $row["school"];
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>
