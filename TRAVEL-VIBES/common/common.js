$(function(){
    $("#header").load("./common/header.html");
    $("#footer").load("footer.html");
})

$("#header").load("header.html", function() {
    setTimeout(() => {
        let menuBtn = document.querySelector(".menu");
        let closeBtn = document.querySelector(".closed");

        let searchBtn = document.querySelector(".searchinput");
        let searchCont = document.querySelector(".searchpop");

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
    }, 100); // 약간의 지연을 줘서 요소가 렌더링될 시간을 확보
});