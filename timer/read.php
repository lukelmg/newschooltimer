<?php
$mysqli = new mysqli("localhost", "website", "", "SchoolTimer");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT uniqueid, timeanddate, longurl, shorturl
FROM urlshortener WHERE longurl = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr);
$stmt->fetch();
$stmt->close();

echo "<table id=xmltable>";
echo "<tr>";
echo "<th>Unique ID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>Time and Date</th>";
echo "<td>" . $cname . "</td>";
echo "<th>Long URL</th>";
echo "<td id=longurl value=$name>" . $name . "</td>";
echo "<th>Short URL</th>";
echo "<td id=shorturl value=$adr>" . $adr . "</td>";
echo "</tr>";
echo "</table>";
?>
