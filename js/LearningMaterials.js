$(function(){
    // let lie=$("td");
    // lie.css("text-align","center");
    let lie1=$("td:first-child");
    lie1.css("width","225px");
    let lie2=$("td:nth-child(2)");
    lie2.css("width","333px");
    lie2.css("white-space","nowrap");
    lie2.css("overflow","hidden");
    let lie3=$("td:nth-child(3)");
    lie3.css("width","171px");
    let lie4=$("td:nth-child(4)");
    lie4.css("width","141px");
    let lie5=$("td:nth-child(5)");
    lie5.css("width","225px");
    let hang=$("tr").not($("tr:first-child"));
    hang.css("height","62px");

    // 添加
    $("#button2").click(function(){
        $(".alert").css("display","block");

    })
    $(".delete").click(function(){
        $(".alert").css("display","none");
    });



    let tbody=$("tbody");
    $(".alert1 #button3").click(function(){
        let tr=document.createElement("tr");
        tr.innerHTML="<td></td>\n" +
            "                    <td></td>\n" +
            "                    <td></td>\n" +
            "                    <td><button>下载</button></td>\n" +
            "                    <td><button class=\"button4\">删除</button><button class=\"button5\">修改</button></td>"
        tr.style.height="63px";
        tbody.append(tr);
        change();
    })
    // add.onclick = function (event) {
    //     let src=event.target;
    //     if (src.innerHTML=="添加") {
    //         let tr = document.createElement("tr");
    //         tr.innerHTML="<td>1</td>\n" + "<td>2</td>\n" + "<td>3</td>\n" + "<td>4</td>\n" + "<td>5</td>\n" + "<td>6</td>\n" + "<td>7</td>\n" + "<td>8</td>\n" + "<td>9</td>\n" + "<td>10</td>\n" + "<td><button>删除</button></td>";
    //         tbody.appendChild(tr);
    //     }

    // 翻页
    $(".page li:first-child").addClass("change");
    let next=0;
    function run(type="before") {
        if (type=="before") {
            next++;
            if (next >= $(".page li").length) {
                next = $(".page li").length-1;
            }
        } else {
            next--;
            if (next <= 0) {
                next = 0;
            }
        }
        $(".page li").removeClass("change")
            .eq(next)
            .addClass("change")

    }
    $(".page li").click(function(){
        let index=$(this).index();
        $(".page li").removeClass("change")
            .eq(index)
            .addClass("change")
        next=index;
    })
    $(".after").click(function(){
        run("before");
    })
    $(".before").click(function(){
        run("after");
    })
    $(".tail").click(function(){
        next=$(".page li").length-2;
        run("before");
    })
    function change(){
        // 修改
        $(".button5").click(function(){
            $(".alert1").css("display","block");
            // let index=$(this).index();
            // $("#alert1 input").val("lie1.text;");
        })
        $(".delete").click(function(){
            $(".alert1").css("display","none");
        })
        // 删除
        $(".button4").click(function(event){
            let tr = event.target.parentNode.parentNode;
            tr.parentNode.removeChild(tr);
        })
    }
    change();

    function move(alert){
        alert.mousedown(function(event1){
            event=event1||window.event;
            let x0=event.pageX;
            let y0=event.pageY;
            let x=alert.offset().left;
            let y=alert.offset().top;
            // console.log(x0, y0,x,y);
            alert.mousemove(function(event2){
                event3=event2||window.event;
                let x1=event3.pageX;
                let y1=event3.pageY;
                let x2=x1-x0+x;
                let y2=y1-y0+y;
                // console.log(x1, y1,x2,y2);
                x2=x2<0?0:x2;
                x2=x2>$(document).width()-alert.outerWidth?$(document).width()-alert.outerWidth:x2;
                y2=y2<0?0:y2;
                y2=y2>$(document).height()-alert.outerHeight?$(document).height()-alert.outerHeight:y2;

                alert.css({'left':x2+'px','top':y2+'px'});
                alert.mouseup(function(){
                    alert.off("mousemove");
                    alert.off("mouseup");
                })
            })
            alert.mouseup(function(){
                alert.off("mousemove");
                alert.off("mouseup");
            })
        })
    }
    let alert1=$(".alert")
    move(alert1);
    let alert2=$(".alert1")
    move(alert2);

})