/**
 * Created by UID on 2017/11/18.
 */
$("[name='submit']").click(function(){
    //获取用户输入数据
    var u=$("[name='uname']").val();
    var p=$("[name='upwd']").val();
    //验证用户输入的数据
    var ureg = /^[a-z0-9]{3,12}$/i;
    var preg = /^[a-z0-9]{3,12}$/i;
    if(!ureg.test(u)){
        //alert("用户名格式不正确: 只能是3~6 位字母或数字");
        //return;
        $("[name='u']").html("用户名格式不正确: 只能是3~6 位字母或数字").css("color","red");
    }else{
        $("[name='u']").html("");
    }
    if(!preg.test(p)){
        $("[name='p']").html("密码格式不正确: 只能是3~6 位字母或数字").css("color","red");
        /*alert("密码格式不正确: 只能是3~6 位字母或数字");
        return;*/
    }else{
        $("[name='p']").html("");
    }
    //alert(u+":"+p);

        //发送ajax请求完成业务处理
        $.ajax({
            type:"get",
            url:"data/03_sign-in.php",
            //uname 和 upwd 是数据库存储的变量
            //u,p是用户输入的变量
            data:{uname:u,upwd:p},
            //data作为参数进行接收从php传来的数据  可随意命名
            success:function(data){
                // console.log(data.code);
                if(data.code==-2){
                    alert("用户名或密码错误");
                }else if(data.code==1){
                    alert("登录成功，跳转到首页");
                    location.href="04_firstPage.html";
                }else{
                    alert("网络故障");
                }
            },
            error:function(){
                alert("网络故障请检查");
            }
        });
});