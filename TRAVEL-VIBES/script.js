//메인 슬라이드
var swiper = new Swiper(".mainsl-bx", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//cont1 국내
var swiper = new Swiper(".ktrl", {
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
      1024: {slidesPerView: 5,spaceBetween: 20,},
    }
  });

    //cont2 축제
var swiper = new Swiper(".rc-list", {
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
var swiper = new Swiper(".ftrl", {
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
      1024: {slidesPerView: 5,spaceBetween: 20,},
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