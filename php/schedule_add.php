
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
	$DBNAME = "calenDB";
	$TABLENAME = "todoTable";
	
	$db= mysql_connect($DBSERVER, $DBUSER, $DBPASSWORD)
	
	//読み込み文字コード
	mysql_query("set names utf8");
	
	$selectdb = mysql_select_db($DBNAME);
	
	$sql = "SELECT * from ". DBNAME;
	
	//発行
	$rst = mysql_query($sql);
	
	//結果セット破棄
	mysql_free_result($rst);
	//接続解除
	$db = mysql_close($db);
	
	/* */
?>