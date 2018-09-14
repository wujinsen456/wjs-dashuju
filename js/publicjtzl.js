let lis=document.querySelectorAll("nav ul li");
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
    }
});
console.log($("section .nrhead button"));
	
$("section .nrhead button").click(function(){
	$(".yinying").css({"position":"absolute","z-index":"50"});
});
$(".yinying .cjjq .btn .qx").click(function(){
	$(".yinying").css({"position":"","z-index":"0"});
});
$(".yinying .gb button").click(function(){
	$(".yinying").css({"position":"","z-index":"0"});
});




