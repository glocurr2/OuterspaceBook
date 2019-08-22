<?php 
ini_set('display_errors', 'On');
error_reporting(E_ALL);
header('Content-type: application/json');


 $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $db);

 if (!$connection) {
    die("Database connection failed: " . mysqli_error());
} else {


if (!empty($_GET)){
$this_id = $_GET['id'];
$sql = "SELECT id, title, author, image, description, author_image, about_author FROM book_info where id = $this_id";
} else {
$sql = "SELECT id, title, author, image, description, author_image, about_author FROM book_info where id < 103";
}

$result = mysqli_query($connection, $sql);
	
$arrRows = array();

while ($data = mysqli_fetch_assoc($result)) {
   $data = array_map("stripslashes", $data);
	array_push($arrRows, $data);
}
//var_dump($arrRows);

$myjson = json_encode($arrRows);
$myjson = '{"results":' . $myjson . '}';
echo $myjson;
	 
}

if (isset($connection)) {
    mysqli_close($connection);
    unset($connection);
}

?>







