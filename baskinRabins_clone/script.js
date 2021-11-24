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

// 풀페이지
new fullpage('#full-page', {
    licenseKey: '',
    sectionsColor: ['#00ff00', '#0000ff', '#aaaaaa'],
    slidesNavigation: true,
    // slidesNavPosition: bottom,
    navigation: true,
});

