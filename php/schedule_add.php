
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
	
	//�ǂݍ��ݕ����R�[�h
	mysql_query("set names utf8");
	
	$selectdb = mysql_select_db($DBNAME);
	
	$sql = "SELECT * from ". DBNAME;
	
	//���s
	$rst = mysql_query($sql);
	
	//���ʃZ�b�g�j��
	mysql_free_result($rst);
	//�ڑ�����
	$db = mysql_close($db);
	
	/* */
?>