<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "Bananasluke@123";
$dbname = "SchoolTimer";

$school = filter_input(INPUT_POST, 'schoolNameID');
$longurl = filter_input(INPUT_POST, 'longurl');
$shorturl = filter_input(INPUT_POST, 'shorturl');

$country = filter_input(INPUT_POST, 'country');
$state = filter_input(INPUT_POST, 'state');
$city = filter_input(INPUT_POST, 'city');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO urlshortener (school, longurl, shorturl, country, state, city)
VALUES ('$school', '$longurl', '$shorturl', '$country', '$state', '$city')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
