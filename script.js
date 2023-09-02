const menubtn =document.querySelector(".menu_btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// for vedio slider
const btns = document.querySelectorAll(".nav-btn");
 
var sliderNav = function(manual){
    btns[manual].classList.add("active");

}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});