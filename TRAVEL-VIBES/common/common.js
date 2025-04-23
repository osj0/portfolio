$(function(){
    $("#header").load("./common/header.html");
    $("#footer").load("./common/footer.html");
})

$("#header").load("./common/header.html", function() {
    setTimeout(() => {
        let menuBtn = document.querySelector(".menu");
        let closeBtn = document.querySelector(".closed");

        let searchInput = document.querySelector(".sinput");
        let searchCont = document.querySelector(".searchpop");
        let popclBtn = document.querySelector(".popclbtn");

        let msearchBtn = document.querySelector(".search");

        const searchBtn = document.querySelector(".searchbtn");
        let searchList = [];


        searchInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault(); // 폼 전송 막기 (있다면)
                addSearch();
            }
        });
        searchBtn.addEventListener("click",addSearch);
            function addSearch() {
                let taskCont = searchInput.value;
                const index = searchList.indexOf(taskCont);
                if (index > -1) searchList.splice(index, 1); 
                searchList.push(taskCont);
            
                if (searchList.length > 7) {
                    searchList.shift();
                }
            
                render();
                searchInput.value = "";
            }
            
        

            function render() {
                let resultHTML = "";
                
                // 최근 검색어를 역순으로 출력
                searchList.slice().reverse().forEach((item, i) => {
                    const realIndex = searchList.length - 1 - i;
                    resultHTML += `
                        <div class="tag">
                            <p>${item}</p>
                            <button onclick="deleteSearch(${realIndex})">
                                <img src="./img/popclbtn.png" alt="삭제">
                            </button>
                        </div>
                    `;
                });
            
                document.querySelector(".hcont").innerHTML = resultHTML;
            }
            
            window.deleteSearch = function(index) {
                searchList.splice(index, 1);
                render();
            };
            document.querySelector(".history .delete").addEventListener("click", function() {
                searchList = [];
                render();
            });
            
            

        if (menuBtn) {
            menuBtn.addEventListener("click", () => {
                document.querySelector(".m-submn-bx").style.display = "block";
            });
        }
        if(closeBtn) {
            closeBtn.addEventListener("click", () => {
                document.querySelector(".m-submn-bx").style.display = "none";
            });
        }
        if(searchInput){
            searchInput.addEventListener("click", () => {
                // console.log("input click")
                searchCont.style.display = "block";
            });
        }
        if(msearchBtn){
            msearchBtn.addEventListener("click", () => {
                searchCont.style.display = "block";
            });
        }
        if(popclBtn){
            popclBtn.addEventListener("click", () => {
                searchCont.style.display = "none";
            });
        }
    }, 100);
});

//검색창

