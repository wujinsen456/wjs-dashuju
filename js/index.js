$(function () {
    //轮播图
    let now=next=0;
    let t=setInterval(move,2000);
    function move() {
        next++;
        if (next>=$(".lunbo").length) {
            next=0;
        }
        $(".lunbo").eq(next).css("left","400px").animate({left:0});
        $(".lunbo").eq(now).animate({left:-400});
        $(".spot div").eq(now).removeClass("white");
        $(".spot div").eq(next).addClass("white");
        now=next;
    }
    $(".biglun").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,2000);
    })
    $(".spot div").click(function () {
        let index=$(this).index();
        if (index==now){
            return;
        }else if (index>now) {
            $(".lunbo").eq(index).css("left","400px").animate({left:0});
            $(".lunbo").eq(now).animate({left:-400});
            $(".spot div").eq(now).removeClass("white");
            $(".spot div").eq(index).addClass("white");
        }else{
            $(".lunbo").eq(index).css("left","-400px").animate({left:0});
            $(".lunbo").eq(now).animate({left:400});
            $(".spot div").eq(now).removeClass("white");
            $(".spot div").eq(index).addClass("white");
        }
        now=next=index;
    })
    //登录
    let arr=[];
    let obj={};
    $(".right .login").click(function () {
        $(".right .no").css("display","block");
        $(".right .yes").css("display","block");
        $(".right .type").css("display","block");
    })
    //注册
    $(".right .zhuce").click(function () {
        obj['name']=$(".name").innerText;
        obj['mima']=$(".mima").innerText;
        arr.push(obj);
        $(".right").css("display","none");
        $(".right1").css("display","block");
    })
    //弹框出现
    $(".login1").click(function () {
        $(".tankuang").css("display","block");
    })
    //点击关闭
    $(".close").click(function () {
        $(".tankuang").css("display","none");
        $(".right1").css("display","none");
        $(".right2").css("display","block");
    })
    //再次登录
    $(".right2 .login").click(function () {
        if (arr['name']==$(".name").innerText){
            location.assign("publicjtzl.html");
        }else{
            $(".right2 .no").css("display","block");
            $(".right2 .yes").css("display","block");
            $(".right2 .type").css("display","block");
        }
    })
    //再次注册
    $(".right2 .zhuce").click(function () {
        $(".right2").css("display","none");
        $(".right1").css("display","block");
    })
})


