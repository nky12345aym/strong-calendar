
<?php
	$SCHEDULE = $_POST['schedule'];
	$DATE = $_POST['date'];
	$TIME = $_POST['time'];
	$PLACE = $_POST['place'];
	$NOTES = $_POST['notes'];
	
	print("$date");
	
	$DBSERVER = "localhost";
	$DBUSER = "root";
	$DBPASSWORD = "";
	$DBNAME = "calDB";
	$TABLENAME = "todoTable";
	
	$key[0] = "id";//判別キー
	$key[1] = "todo";//予定
	$key[2] = "date";//日付
	$key[3] = "time";//時間
	$key[4] = "place";//場所
	$key[5] = "etc";//備考
	
	$db= mysql_connect($DBSERVER, $DBUSER, $DBPASSWORD){
		
	}
	
?>