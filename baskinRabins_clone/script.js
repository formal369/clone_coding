// const { fullpage } = require("jquery");

const trigger = document.querySelectorAll(".gnb");
const pop = document.querySelector(".pop_menu_area");

console.log(trigger);

for(item of trigger) {
    item.addEventListener("mouseover", e => {
        pop.style.display = "block";
    });
}
pop.addEventListener("mouseleave", e => {
    
    pop.style.display = "none";
});

// === Swiper ===
var mySwiper = new Swiper('#swiper-container1', {
    direction: 'horizontal',
      slidesPerView: 1, //슬라이드를 한번에 1개를 보여준다
      spaceBetween: 0, //슬라이드간 padding 값 0px 씩 떨어뜨려줌
      loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    debugger: true,
    autoplay: {  delay: 3000, disableOnInteraction: false, },
    centeredSlides: true,
    pagination: {  el: '.swiper-pagination', },
    navigation : { // 네비게이션 설정
          nextEl : '.swiper-button-next', // 다음 버튼 클래스명
          prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
      },
  });

// === Swiper2 ===
var mySwiper2 = new Swiper('#swiper-container2', {
    direction: 'horizontal',
      slidesPerView: 1, //슬라이드를 한번에 1개를 보여준다
      spaceBetween: 0, //슬라이드간 padding 값 0px 씩 떨어뜨려줌
      loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    debugger: true,
    autoplay: {  delay: 6000, disableOnInteraction: false, },
    centeredSlides: true,
    pagination: {  el: '.swiper-pagination2', },
  });

