<?php
$username = filter_input(INPUT_POST, 'longurl');
$password = filter_input(INPUT_POST, 'shorturl');
if (!empty($username)){
if (!empty($password)){
$host = "localhost";
$dbusername = "website";
$dbpassword = "";
$dbname = "SchoolTimer";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
$check=mysqli_query($conn,"select * from clients where firstname='$firstname' and lastname='$lastname'");
$checkrows=mysqli_num_rows($check);



if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{



$sql = "INSERT INTO urlshortener (longurl, shorturl)
values ('$username','$password')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Password should not be empty";
die();
}
}
else{
echo "Username should not be empty";
die();
}
?>
