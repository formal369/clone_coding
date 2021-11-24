// === AOS ===
AOS.init({
  easing: 'ease-out-back',
  duration: 3000
});

// === Swiper ===
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
	slidesPerView: 3, //슬라이드를 한번에 3개를 보여준다
    spaceBetween: 30, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
  debugger: true,
  autoplay: {  delay: 2500, disableOnInteraction: false, },
  centeredSlides: true,
  pagination: {  el: '.swiper-pagination',  clickable: true, },
  navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
  

});

const down_arrow = document.getElementById("down_arrow");
const hidden = document.getElementById("hidden");
down_arrow.addEventListener("click", function () {
  hidden.style.display = ((hidden.style.display != 'none')? 'none' : 'block');
});

// === 롤링박스 ===
let rollingData = [
  '시스템 개선 및 점검안내',
  '[채용] 스타벅스 코리아 바리스타 채용 안내',
  '2021 플래너 쿠폰 3종 유효기간 연장 안내',
  '사이렌 오더 주문 건수 제한 안내(11/2~12/31)',
]    // 롤링할 데이터를 넣으면 됩니다 갯수 제한 없어요

let timer = 2500 // 롤링되는 주기 입니다 (1000 => 1초)

let first = document.getElementById('first'),
second = document.getElementById('second'),
third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1


first.children[0].innerHTML = rollingData[0]

setInterval(() => {
if(move == 2){
first.classList.remove('card_sliding')
first.classList.add('card_sliding_after')

second.classList.remove('card_sliding_after')
second.classList.add('card_sliding')

third.classList.remove('card_sliding_after')
third.classList.remove('card_sliding')

move = 0
} else if (move == 1){
first.classList.remove('card_sliding_after')
first.classList.add('card_sliding')

second.classList.remove('card_sliding_after')
second.classList.remove('card_sliding')

third.classList.remove('card_sliding')
third.classList.add('card_sliding_after')

move = 2
} else if (move == 0) {
first.classList.remove('card_sliding_after')
first.classList.remove('card_sliding')

second.classList.remove('card_sliding')
second.classList.add('card_sliding_after')

third.classList.remove('card_sliding_after')
third.classList.add('card_sliding')

move = 1
}

if(dataCnt < (rollingData.length - 1)) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt++
} else if(dataCnt == rollingData.length - 1) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt = 0
}

if(listCnt < 2) {
listCnt++
} else if (listCnt == 2) {
listCnt = 0
}

console.log(listCnt)
}, timer);