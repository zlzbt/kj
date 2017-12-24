<?php
header("Content-Type:application/json;charset=utf-8");
//session_start();
/*
此文件不应被用户直接请求！
此文件中含有其它页面都需要的一些公共代码，应该被其它页面包含
*/

//2.连接到数据库服务器
//$conn = mysqli_connect('127.0.0.1',"root","","kj",3306);

//执行一条特殊的SQL语句：设置后面要执行的语句的字符编码
//$sql = "SET NAMES UTF8";
//mysqli_query($conn, $sql);

$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'kj';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);

//解决跨域请求的问题
header('Access-Control-Allow-Origin:http://localhost:80');
header('Access-Control-Allow-Credentials:true');

mysqli_query($conn, "SET NAMES $db_charset");