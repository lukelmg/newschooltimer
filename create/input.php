<?php
$servername = "localhost";
$username = "website";
$password = "";
$dbname = "SchoolTimer";

$school = filter_input(INPUT_POST, 'schoolNameID');
$longurl = filter_input(INPUT_POST, 'longurl');
$shorturl = filter_input(INPUT_POST, 'shorturl');

/*
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
*/

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO urlshortener (school, longurl, shorturl)
VALUES ('$school', '$longurl', '$shorturl')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
