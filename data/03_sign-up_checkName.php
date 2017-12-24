<?php
/**
* 接收客户端提交的uname，验证此用户名是否已经存在。
* 若不存在，则返回{"code":200, "msg":"non-exists"}
* 若存在，则返回{"code":201, "msg":"exists"}
*/
require("00_init.php");

@$uname=$_REQUEST['uname'];

//preg_match验证正则
/*if(!preg_match('$uname')){
    echo '{"code":-1,"msg":"uname required"}';
}*/


$sql="select uid from kj_user where uname='$uname' LIMIT 1";
$result = mysqli_query($conn,$sql);

//sql语句执行失败 有误
if(!$result){
    echo '{"code":-2,"msg":"sql语句有误，请检查"}';
}else{
    //试着从查询结果集中抓取一行记录
    $row=mysqli_fetch_assoc($result);
    if($row==null){
        echo '{"code":1,"msg":"注册成功"}';
    }else{
        echo '{"code":-3,"msg":"用户名称已存在"}';
    }
}