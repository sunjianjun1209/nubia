<?php 
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$password = $_POST['password'];

	$password = md5(md5($password)."mdzz");
	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		echo "链接数据库失败";
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db("qd1806");
	$sql = "SELECT * FROM qd_users WHERE username='{$username}' AND password='{$password}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "登陆成功";
	}else{
		echo "用户名或密码错误";
	}
	mysql_close($link);
	
 ?>