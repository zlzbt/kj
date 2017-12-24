/**
 * Created by Administrator on 2017/10/18.
 */
//加载header
(()=>{
    ajax("get","02_footer.html","","text").then(html=>{
        document.getElementById("footer").innerHTML=html;
    });
})();