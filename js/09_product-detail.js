/**
 * Created by web-01 on 2017/12/7.
 */
//加载 点击产品出现下拉框
$("#main").on("click",".dropdown1",function(e){
    e.preventDefault();
    var $div=$(this);
    //查找div的直接子元素最后一个
    var $menu=$div.children().last();
    if($div.hasClass("active")){
        $menu.css({height:217,opacity:1});
        $div.removeClass("active");
    }else{
        $menu.css({height:0,opacity:0});
        $div.addClass("active");
    }
});

/*点击小图片*/
$(".sm-pic").on("click",'li',function (e) {
    e.preventDefault();
    var $li = $(this);
    if($li.hasClass("active")){
        $('.active').css({"border-color":"#0AA1ED"});
        //$li.siblings().removeClass("active").css({"border-color":"#0AA1ED"});
    }else{
        $li.addClass('active').css({"border-color":"#0AA1ED"});
        $li.siblings().removeClass("active").css({"border-color":"#CCC"});
    }
});

/*按钮点击动画效果*/
$(".color-size").on("click","a",function(e){
    e.preventDefault();
    var $a = $(this);
    var $li = $a.parent();
    if ($a.hasClass("choose")){
        $a.css({"border-color":"#f96868","color":"#f96868","background":"#fff"});
        $li.siblings().children().css({"border-color":"#ccc","color":"#657B8F"});
    }else{
        $a.addClass('choose').css({"border-color":"#f96868","color":"#f96868","background":"#fff"});
        $li.siblings().children().removeClass('choose').css({"border-color":"#ccc","color":"#657B8F"});
    }
});