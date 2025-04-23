//메인 슬라이드
var swiper1 = new Swiper(".mainsl-bx", {
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
});

//cont1 국내
var swiper2 = new Swiper(".ktrl", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".ktrl-page",
      clickable: true,
    },
    breakpoints: {
      500: {slidesPerView:2,spaceBetween: 20,},
      768: {slidesPerView: 3,spaceBetween: 20,},
      1024: {slidesPerView: 4,spaceBetween: 20,},
    }
  });

    //cont2 축제
var swiper3 = new Swiper(".rc-list", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  navigation: {
      nextEl: ".rc-next",
      prevEl: ".rc-prev",
  },
  breakpoints: {
    500: {slidesPerView:2,spaceBetween: 0,},
    768: {slidesPerView: 3,spaceBetween: 0,},
    1024: {slidesPerView: 4,spaceBetween: 0,},
  }
});


  //cont3 해외
var swiper4 = new Swiper(".ftrl", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {slidesPerView:2,spaceBetween: 20,},
      768: {slidesPerView: 3,spaceBetween: 20,},
      1024: {slidesPerView: 4,spaceBetween: 20,},
    }
  });
//장소
let regionGroup = {};
const loadBtns = document.querySelectorAll('.load-btn');
const subregionButtonsDiv = document.getElementById('subregion-buttons');

// 데이터 불러오기 버튼 클릭 이벤트
loadBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.add-place');
        if (!parent) return;

        const reBtn = parent.querySelector('.rebtn-bx');
        if (!reBtn) return;
        // 다른 모든 팝업 닫기
        closeAllPopupsExcept(parent); 
        reBtn.style.display = 'flex'; // 팝업 열기

        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data)) {
                    throw new Error("데이터 형식 오류");
                }

                // 지역별로 그룹화 (region과 subregion)
                data.forEach(country => {
                    const region = country.region || "기타";
                    const subregion = country.subregion || "기타";
                    const countryName = (country.translations && country.translations.kor && country.translations.kor.common)
                                        ? country.translations.kor.common
                                        : country.name.common;

                    if (!regionGroup[region]) {
                        regionGroup[region] = { subregions: {}, countries: {} };
                    }

                    if (!regionGroup[region].subregions[subregion]) {
                        regionGroup[region].subregions[subregion] = [];
                    }
                    regionGroup[region].subregions[subregion].push(countryName);
                });

                // 지역 버튼 채우기
                const regionButtonsDiv = parent.querySelector('#region-buttons');
                regionButtonsDiv.innerHTML = ''; // 기존 버튼들 초기화
                Object.keys(regionGroup).sort().forEach(region => {
                    const button = document.createElement('button');
                    button.classList.add('region-button');
                    button.textContent = region;
                    button.addEventListener('click', () => loadSubregions(region, parent));
                    regionButtonsDiv.appendChild(button);
                });

            })
            .catch(error => {
                console.error("오류:", error);
            });
    });
});

// 지역 버튼 클릭 시 하위지역 버튼 동적으로 추가
function loadSubregions(selectedRegion, parent) {
    const subregionButtonsDiv = parent.querySelector('#subregion-buttons');
    subregionButtonsDiv.innerHTML = ''; // 기존 하위지역 버튼 초기화
    const subregions = Object.keys(regionGroup[selectedRegion].subregions).sort();

    subregions.forEach(subregion => {
        const button = document.createElement('button');
        button.classList.add('subregion-button');
        button.textContent = subregion;
        button.addEventListener('click', () => {
            displaySelectedSubregion(subregion, parent);
        });
        subregionButtonsDiv.appendChild(button);
    });

    // 하위지역 버튼 표시
    subregionButtonsDiv.style.display = 'block';
    const allSubregionButtons = subregionButtonsDiv.querySelectorAll('.subregion-button');
    allSubregionButtons.forEach(btn => {
        btn.style.display = 'block';
    });
}

// 선택된 하위지역을 화면에 표시
function displaySelectedSubregion(subregion, parent) {
    const loadBtn = parent.querySelector('.load-btn');
    if (loadBtn) {
        loadBtn.textContent = subregion;
    }

    // 팝업 닫기
    const reBtn = parent.querySelector('.rebtn-bx');
    if (reBtn) {
        reBtn.style.display = 'none';
    }
}

// 다른 모든 팝업 닫기 (현재 클릭된 팝업 제외)
function closeAllPopupsExcept(currentParent) {
    const allPopups = document.querySelectorAll('.rebtn-bx');
    allPopups.forEach(popup => {
        if (popup !== currentParent.querySelector('.rebtn-bx')) {
            popup.style.display = 'none';
        }
    });
}

//날짜 등록
$(document).ready(function () {
  
  var dateSelect = $('#flight-datepicker');
  var dateDepart = $('#start-date');
  var dateReturn = $('#end-date');
  var spanDepart = $('.date-depart');
  var spanReturn = $('.date-return');
  var dateFormat = "yyyy년 mm월 dd일";

  dateSelect.datepicker({
    autoclose: true,
    format: "yyyy/mm/dd",
    startDate: "today",
    language: "ko"
  }).on('changeDate', function () {
    var start = dateDepart.datepicker('getDate');
    var end = dateReturn.datepicker('getDate');

    if (start) {
      spanDepart.text(moment(start).format(dateFormat)); 
    }
    if (end) {
      spanReturn.text(moment(end).format(dateFormat));
    }
  });
  
});


//도착일
document.addEventListener("DOMContentLoaded", function () {
  const roundTripBtn = document.querySelector(".trltab button:nth-child(1)"); // 왕복 버튼
  const oneWayBtn = document.querySelector(".trltab button:nth-child(2)"); // 편도 버튼
  const endDateInput = document.getElementById("end-date"); // 도착일 입력란
  const arrTxt = document.querySelector(".arr"); // 도착일 입력란

  oneWayBtn.addEventListener("click", function () {
      endDateInput.value = ""; // 값 초기화
      endDateInput.disabled = true; // 입력 비활성화
      arrTxt.classList.add("duisabled-label")
      endDateInput.classList.add("disabled-input"); // 스타일 추가
      oneWayBtn.classList.add("active");
      roundTripBtn.classList.remove("active");
  });

  roundTripBtn.addEventListener("click", function () {
      endDateInput.disabled = false; // 입력 활성화
      endDateInput.classList.remove("disabled-input"); // 스타일 제거
      arrTxt.classList.remove("duisabled-label")
      roundTripBtn.classList.add("active");
      oneWayBtn.classList.remove("active");
  });
});


let counts = [0, 0]; // 성인, 아동 카운트 배열

        function updateCounter(index) {
            document.querySelectorAll(".count")[index].innerText = counts[index];
        }

        function increase(index) {
            counts[index]++;
            updateCounter(index);
        }

        function decrease(index) {
            if (counts[index] > 0) counts[index]--;
            updateCounter(index);
        }


//타임어택
 const targetDate1 = new Date("2025-05-01T00:00:00Z");
 const targetDate2 = new Date("2025-04-26T00:00:00Z");

 function updateCountdown() {
     const now = new Date();
     
     // 첫 번째 타임어택
     const timeDifference1 = targetDate1 - now;
     if (timeDifference1 <= 0) {
         document.getElementById("timeRemaining1").textContent = "00:00:00";
         document.getElementById("daysRemaining1").textContent = "0";
     } else {
         const days1 = Math.floor(timeDifference1 / (1000 * 60 * 60 * 24));
         const hours1 = Math.floor((timeDifference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes1 = Math.floor((timeDifference1 % (1000 * 60 * 60)) / (1000 * 60));
         const seconds1 = Math.floor((timeDifference1 % (1000 * 60)) / 1000);
         document.getElementById("daysRemaining1").textContent = days1;
         document.getElementById("timeRemaining1").textContent = `${padZero(hours1)}:${padZero(minutes1)}:${padZero(seconds1)}`;
     }

     // 두 번째 타임어택
     const timeDifference2 = targetDate2 - now;
     if (timeDifference2 <= 0) {
         document.getElementById("timeRemaining2").textContent = "00:00:00";
         document.getElementById("daysRemaining2").textContent = "0";
     } else {
         const days2 = Math.floor(timeDifference2 / (1000 * 60 * 60 * 24));
         const hours2 = Math.floor((timeDifference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes2 = Math.floor((timeDifference2 % (1000 * 60 * 60)) / (1000 * 60));
         const seconds2 = Math.floor((timeDifference2 % (1000 * 60)) / 1000);
         document.getElementById("daysRemaining2").textContent = days2;
         document.getElementById("timeRemaining2").textContent = `${padZero(hours2)}:${padZero(minutes2)}:${padZero(seconds2)}`;
     }
 }

 setInterval(updateCountdown, 1000);
 updateCountdown();

 function padZero(num) {
     return num < 10 ? "0" + num : num;
 }