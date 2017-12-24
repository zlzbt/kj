<?php
/**
* 接收客户端
*/
header('Content-Type: application/json;charset=UTF-8');

@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');

require_once('00_init.php');
$sql = "INSERT INTO kj_user(uname,upwd) VALUES('$uname','$upwd')";
$result = mysqli_query($conn,$sql);

if(!$result){
  echo('{"code":-1, "msg":"sql语句有误"}');
}else {
  $uid = mysqli_insert_id($conn);
  echo('{"code":1, "msg":"注册成功", "uid":'.$uid.'}');
}