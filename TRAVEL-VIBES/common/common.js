$(function(){
    $("#header").load("./common/header.html");
    $("#footer").load("footer.html");
})

$("#header").load("./common/header.html", function() {
    setTimeout(() => {
        let menuBtn = document.querySelector(".menu");
        let closeBtn = document.querySelector(".closed");

        let searchBtn = document.querySelector(".searchinput");
        let searchCont = document.querySelector(".searchpop");
        let popclBtn = document.querySelector(".popclbtn");

        let msearchBtn = document.querySelector(".search");


        if (menuBtn) {
            menuBtn.addEventListener("click", () => {
                console.log("버튼 클릭됨!");
                document.querySelector(".m-submn-bx").style.display = "block";
            });
        }
        if(closeBtn) {
            closeBtn.addEventListener("click", () => {
                console.log("버튼 클릭됨!");
                document.querySelector(".m-submn-bx").style.display = "none";
            });
        }
        if(searchBtn){
            searchBtn.addEventListener("click", () => {
                console.log("search");
                searchCont.style.display = "block";
            });
        }
        if(msearchBtn){
            msearchBtn.addEventListener("click", () => {
                console.log("searchmm");
                searchCont.style.display = "block";
            });
        }
        if(popclBtn){
            popclBtn.addEventListener("click", () => {
                console.log("popclBtn");
                searchCont.style.display = "none";
            });
        }
    }, 100);
});