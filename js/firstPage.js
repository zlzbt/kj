/**
 * Created by UID on 2017/11/1.
 */
/*广告轮播*/
$("#banner").on("mouseover","#banner",function(e){
    e.preventDefault();
    var $div=$(this);
    var $a=$div.children("a[class='ck-slide']");
    $a.css({opacity:1});
}).on("mouseout","#banner",function(){
    e.preventDefault();
    var $div=$(this);
    var $a=$div.children("a[class='ck-slide']");
    $a.css({opacity:0});
});