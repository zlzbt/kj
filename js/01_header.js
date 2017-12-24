/**
 * Created by Administrator on 2017/10/18.
 */
//加载header
(()=>{
    ajax("get","01_header.html","","text").then(html=>{
        document.getElementById("header").innerHTML=html;
    });
})();
$("#header").on("mouseover",".drop_down",function(e){
    e.preventDefault();
    var $div=$(this);
    //查找div的直接子元素最后一个
    var $menu=$div.children().last();
    $menu.css({height:217,opacity:1});
}).on("mouseout",".drop_down",function(){
    var $div=$(this);
    var $menu=$div.children().last();
    $menu.css({height:0,opacity:0});
});