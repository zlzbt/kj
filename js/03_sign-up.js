/**
 * Created by web-01 on 2017/11/21.
 */
//验证用户名
//失去焦点时
$("[name='uname']").blur(function(){
    var u=$("[name='uname']").val();
    //alert(u);
    if (this.validity.valueMissing) {
        this.nextElementSibling.innerHTML = '用户名不能为空';
        this.nextElementSibling.className = 'msg-error';
    } else if (this.validity.tooShort) {
        this.nextElementSibling.innerHTML = '用户名不能少于3位';
        this.nextElementSibling.className = 'msg-error';
    }else {
       /* this.nextElementSibling.innerHTML = '';
        this.nextElementSibling.className = 'msg-default'*/
        $name = $("[name='uname']");
        //ajax向数据库发起请求
        $.ajax({
            type:"get",
            url:"data/03_sign-up_checkName.php",
            //u用户输入的
            data:{uname:u},
            success:function(data){
                //alert(data.code);
                if(data.code == -3){
                    $name.next().html('用户名已被占用');
                    if($name.next().className == 'msg-success'){
                        $name.next().removeClass('msg-success').addClass('msg-error');
                    }else{
                        $name.next().addClass('msg-error');
                    }

                }else if(data.code == 1){
                    $name.next().html('用户名可以使用');
                    $name.next().removeClass('msg-error').addClass('msg-success');
                    //$name.next().add()className = 'msg-success';
                }else{
                    alert('验证用户名出错！请稍后重试。');
                }
            },
            error:function(){
                alert("1网络故障请检查");
            }
        });
    }
});
//获取焦点时
$("[name='uname']").focus(function () {
    this.nextElementSibling.innerHTML = '用户名长度在6到9位之间';
    this.nextElementSibling.className = 'msg-default';
});

//对密码进行验证
//获取焦点时
$("[name='upwd']").focus(function () {
    this.nextElementSibling.innerHTML = '用户名长度在6到9位之间';
    this.nextElementSibling.className = 'msg-default';
});

$("[name='upwd']").blur(function(){
    //var p=$("[name='upwd']").val();
    if(this.validity.valueMissing){
        this.nextElementSibling.innerHTML = "密码不能为空";
        this.nextElementSibling.className = "msg-error"
    }else if(this.validity.tooShort){
        this.nextElementSibling.innerHTML = '密码长度不能少于6位';
        this.nextElementSibling.className = "msg-error"
    }else{
        this.nextElementSibling.innerHTML = '密码格式正确';
        this.nextElementSibling.className = 'msg-success';
    }
});

/*对确认密码进行验证*/
$("[name='reupwd']").focus(function () {
    this.nextElementSibling.innerHTML = '用户名长度在6到9位之间';
    this.nextElementSibling.className = 'msg-default';
});
$("[name='reupwd']").blur(function(){
    var p=$("[name='upwd']").val();
    if(this.validity.valueMissing){
        this.nextElementSibling.innerHTML = "重复密码不能为空";
        this.nextElementSibling.className = "msg-error"
    }else if(this.validity.tooShort){
        this.nextElementSibling.innerHTML = '重复密码长度不能少于6位';
        this.nextElementSibling.className = "msg-error"
    }else if(this.value !==p){
        this.nextElementSibling.innerHTML = '两次密码输入要一致';
        this.nextElementSibling.className = "msg-error"
    }else{
        this.nextElementSibling.innerHTML = '重复密码正确';
        this.nextElementSibling.className = 'msg-success';
    }
});


//对验证码是否输入进行验证

//点击切换验证码
$(".change_vcode").click(function(){
    // e.preventDefault();
    console.log("eeeWS");
    $(".change_img").attr("src","data/03_code.php");
});

/*注册按钮监听函数*/
$(".sign").click(function(){
    var count = 0;
    $('.form-group').each(function () {
        if ($(this).find('span').hasClass('msg-success')) {
            count++;
        }
    });
    // console.log(count);
    if (count == 3) {
        //serialize()输出序列化表单值的结果
        $.ajax({
                type: 'POST',
                url: 'data/03_sign-up.php',
                data: $('#form-register').serialize(),
                success: function(result){
                    //alert(result);
                    if(result.code===1){
                        alert('注册成功！点击“确定”后将跳转到登录页');
                        location.href = '03_sign-in.html';
                    }else if(result.code===-1){
                        alert('<b>注册失败！</b><p>错误消息：'+result.msg+'</p>')
                    }else{
                        alert("网络故障")
                    }
                },
                error:function(){
                    alert("网络故障,请检查");
                }
            }
        )
    }
});









