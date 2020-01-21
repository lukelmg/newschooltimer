<?php
$con=mysqli_connect("localhost","website","","SchoolTimer");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM urlshortener");

echo "<table border='1'>
<tr>
<th>Long URL</th>
<th>Short URL</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['longurl'] . "</td>";
echo "<td>" . $row['short'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>
