<?php
$servername = "localhost";
$username = "website";
$password = "";
$dbname = "SchoolTimer";

$uniqueid = filter_input(INPUT_POST, 'uniqueid');
$timeanddate = filter_input(INPUT_POST, 'timeanddate');
$longurl = filter_input(INPUT_POST, 'longurl');
$shorturl = filter_input(INPUT_POST, 'shorturl');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO urlshortener (uniqueid, timeanddate, longurl, shorturl)
VALUES ('$uniqueid', '$timeanddate', '$longurl', '$shorturl')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
