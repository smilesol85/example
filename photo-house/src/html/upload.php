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
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="../css/stylesheet.min.css" />
<script src="../../bower_components/jquery/dist/jquery.js"></script>
</head>
<body>
<?php
include 'info.php';

$link = mysql_connect($servername, $username, $password);
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>
<div id="wrap">
	<div class="header">
		<h1>JungHoYoung</h1>
		<span class="countUpload">upload: 11403</span>
	</div>
	<div class="section">
		<div class="upload">
			<!-- <input type="file"><br>
			<input type="text"><br>
			<button type="button">UPLOAD</button> -->
            <form action="send-ok.php" method="POST" enctype="multipart/form-data" />
                    <input type="file" id="file" name="file" required />
                    <input type="submit" value="UPLOAD" />
                </form>

		</div>
	</div>
</div>
</body>
</html>
