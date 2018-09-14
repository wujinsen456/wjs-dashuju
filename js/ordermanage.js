window.onload=function () {
    let navlis = document.querySelectorAll(".asidenav li");
    console.log(navlis.length);
    for (let i = 0; i < navlis.length; i++) {
        navlis[i].onclick = function () {
            for (let j = 0; j < navlis.length; j++) {
                navlis[j] .classList.remove("selected");
            }
            this.classList.add("selected");
        }

    }
}