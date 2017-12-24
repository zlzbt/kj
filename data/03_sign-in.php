<?php
//获取初始数据
require("00_init.php");
//获取用户名 手机 邮箱 密码
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
//验证用户名 密码 是否符合格式
/*$uPattern='/[a-z0-9]{3,12}/';
//密码
$pPattern='/[a-z0-9]{3,12}/';
*/
//判断是否符合格式
/*if(!preg_match($uPattern,$uname)){
    echo '{"code":-1,msg:"用户名输入格式不正确"}';
}else if(!preg_match($pPattern,$upwd)){
    echo '{"code":-1,"msg":"密码格式错误"}';
}*/
//sql语句  验证用户名和密码是否正确
$sql="select * from kj_user where uname='$uname' AND upwd='$upwd'";
//执行sql语句
$result=mysqli_query($conn,$sql);
//输出执行结果  DQL:失败-false  成功-查询结果的描述对象
if($result==false){
    echo '{"code":-3,"msg":"sql语句错误，请检查"}';
}else{
    //抓取影响的行数
    //试着从查询结果集中抓取一行记录
	//$row = mysqli_fetch_row($result); //返回一个索引数组
	//$row = mysqli_fetch_assoc($result); //返回一个关联数组
    $row=mysqli_fetch_assoc($result);
    if($row==null){
        echo '{"code":-2,"msg":"用户名或密码错误"}';
    }else{
        echo '{"code":1,"msg":"登录成功"}';
    }
}