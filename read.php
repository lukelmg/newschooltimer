<?php
ini_set('display_errors', 1);

$mysqli = new mysqli("localhost", "phpmyadmin", "Bananasluke@123", "SchoolTimer");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT school, timeanddate, longurl, shorturl
FROM urlshortener WHERE shorturl = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($school, $timeanddate, $longurl, $shorturl);
$stmt->fetch();
$stmt->close();

echo "<p id=longp>" . $longurl . "</p>";

echo "<table id=xmltable>";
echo "<tr>";
echo "<th>Unique ID</th>";
echo "<td>" . $school . "</td>";
echo "<th>Time and Date</th>";
echo "<td>" . $timeanddate . "</td>";
echo "<th>Long URL</th>";
echo "<td id=longurl>" . $longurl . "</td>";
echo "<th>Short URL</th>";
echo "<td id=shorturl value=$shorturl>" . $shorturl . "</td>";
echo "</tr>";
echo "</table>";

?>
