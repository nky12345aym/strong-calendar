
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
	
	$key[0] = "id";//���ʃL�[
	$key[1] = "todo";//�\��
	$key[2] = "date";//���t
	$key[3] = "time";//����
	$key[4] = "place";//�ꏊ
	$key[5] = "etc";//���l
	
	$db= mysql_connect($DBSERVER, $DBUSER, $DBPASSWORD){
		
	}
	
?>