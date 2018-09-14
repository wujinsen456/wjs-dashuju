let lis=document.querySelectorAll("nav ul li");
lis.forEach(function (v,i) {
    v.onclick=function () {
        lis.forEach(function (ele) {
            ele.className="";
        });
        lis[i].className="click";
    }
});
let lies=document.querySelectorAll(".experiment_left_nav_box li");
let hide=document.querySelectorAll(".experiment_left_nav_hide");
let icon=document.querySelectorAll(".icon-sanjiaokuai");
let hide_in=document.querySelectorAll(".experiment_left_nav_hide_in");
console.log(hide_in);
console.log(icon);
console.log(hide);
console.log(lies);
lies.forEach(function (element,index) {
    lies[index].onmouseenter=function () {
        console.log("1");
        lies[index].style.color="#4381e6";
        hide[index].style.display="block";
        icon[index].style.display="block";
        // hide.forEach(function (v,i) {
        //     hide[i].style.display="block";
        // })

    }
    lies[index].onmouseleave=function () {

        hide[index].style.display="none";
        lies[index].style.color="#a3a3a3";
        icon[index].style.display="none";
    }
})
hide_in.forEach(function (v,i) {
    hide_in[i].onmouseenter=function () {
        hide_in[i].style.color="#4381e6";
    }
    hide_in[i].onmouseleave=function () {
        hide_in[i].style.color="#a3a3a3";
    }


})