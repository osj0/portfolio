var listHTML = $(".pf01-bx").html();
var listItems = listHTML.split("<div>");
$(".pf01-bx").html("");
$.each(listItems, function(i, v) {
  var item =
    '<div class="Title-mask"><span class="Title-line">' + v + "</span></div>";
  $(".pf01-bx").append(item);
});

// GSAP과 ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

// pf02-bx가 스크롤에 맞춰 위로 나타나는 애니메이션
gsap.to('.pf02-bx', {
  opacity: 1,
  y: 0, // 위로 올라오기
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.pf02-bx',  // pf02-bx가 스크롤에 의해 트리거
    start: 'top 80%',  // 스크롤이 pf02-bx가 화면의 80%에 도달할 때 시작
    toggleActions: 'play none none none'  // 스크롤 트리거가 활성화되면 애니메이션 시작
  }
});

window.onload = function() {
  window.scrollTo(0, 0);
};
