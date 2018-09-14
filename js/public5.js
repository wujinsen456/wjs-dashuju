let lis=document.querySelectorAll("nav ul li");
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
    }
});

let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let section3=document.querySelector(".section3");
let section4=document.querySelector(".section4");
let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
console.log(img1,img2);
btn2.onclick=function(){
	section4.style.display="block";
	section4.style.display="flex";
}
btn3.onclick=function(){
	section3.style.display="block";
	section3.style.display="flex";
}
img1.onclick=function(){
	section3.style.display="none";
}
img2.onclick=function(){
	section4.style.display="none";
}








