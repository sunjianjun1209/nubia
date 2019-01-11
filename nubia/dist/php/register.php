<?php 
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$password = $_POST['password'];
	$phone = $_POST['phone'];


	$password = md5(md5($password)."mdzz");
	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		echo "链接数据库失败";
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db("qd1806");

	$sql = "INSERT INTO qd_users(username, password, phone) VALUES('{$username}','{$password}','{$phone}')";
	$res = mysql_query($sql);
	if($res){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
	mysql_close($link);
	
 ?>