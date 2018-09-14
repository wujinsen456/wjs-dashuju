$(function () {
    let div=$("<div>");
    let li=$("nav ul li");
    div.appendTo(li).css({
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        margin:'auto',
        width:'0',
        height:'0',
        positionOrigin:'center',
        borderRadius:'50%',
        background:'rgba(100,100,100,0.4)'
    })
    li.click(function () {
        let index=$(this).index();
        $(this).removeClass("click");
        $("li>div").css({
            width:0,
            height:0
        })
        $(this).children("div").animate({
            width:300,
            height:300
        },300,function () {
            $(this).css({
                width:0,
                height:0
            })
            li.removeClass("click").eq(index).addClass("click");
        })
    })
    $("nav ul li:first").click(function () {
        location.assign("publicjtzl.html");
    })
    $("nav ul li:nth-child(2)").click(function () {
        location.assign("LearningMaterials.html");
    })
    $("nav ul li:nth-child(3)").click(function () {
        location.assign("sortManagement.html");
    })
    $("nav ul li:nth-child(4)").click(function () {
        location.assign("public.html");
    })
    $("nav ul li:nth-child(5)").click(function () {
        location.assign("wjs1.html");
    })
    $("nav ul li:nth-child(6)").click(function () {
        location.assign("wjs.html");
    })



})








