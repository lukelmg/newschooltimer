<!DOCTYPE html>
<html>
<body>

<table name="boi">
    <tr>
      <th>School</th>
      <th>Country</th>
      <th>State</th>
      <th>City</th>
      <th>Timer Code</th>
    </tr>
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
                  echo '<td>'. $row['shorturl'] .'</td>';
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
