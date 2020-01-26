<?php
$mysqli = new mysqli("localhost", "website", "", "SchoolTimer");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT uniqueid, timeanddate, longurl, shorturl
FROM urlshortener WHERE uniqueid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "</tr>";
echo "</table>";
?>
