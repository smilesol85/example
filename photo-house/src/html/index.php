<!DOCTYPE html>
<html lang="ko">
<head>
<title>photo house</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0">
<meta name="keywords" content="photo house">
<meta name="description" content="photo house">
<!--
<meta property="og:title" content="LINE Music">
<meta property="og:url" content="">
<meta property="og:image" content="200x200">
<meta property="og:description" content="LINE MUSIC is a music streaming service with an expansive collection of music available for unlimited play and sharing with friends on LINE. ">
-->
<!-- <link rel="shortcut icon" type="image/x-icon" href="../img/favicon64.png"> -->
<link rel="stylesheet" href="../css/stylesheet.min.css" />
<script src="../../bower_components/jquery/dist/jquery.js"></script>

</head>
<body>
<?php
include 'info.php';
$dbname = "photo-house";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name, tag, meta FROM info";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["tag"]. " " . $row["meta"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
<div id="wrap">
	<div id="container">
		<div class="section">
			<div class="photoList">
				photo
			</div>
			test
		</div>
	</div>
</div>
</body>
</html>
