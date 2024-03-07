/*burger*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBranding = document.querySelector(".nav-branding-2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBranding.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

/*carrousel*/

  let cardWidth = document.querySelector('.card').offsetWidth + 10;
  let scrollContainer = document.querySelector(".list-artwork");
  let backBtn = document.getElementById("back-btn");
  let nextBtn = document.getElementById("next-btn");
  scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehviour = "auto";
    });
    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehviour = "smooth";
        scrollContainer.scrollLeft += 210;
       // scrollContainer.scrollLeft -= cardWidth;
    });
    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehviour = "smooth";
        scrollContainer.scrollLeft -= 210;
       // scrollContainer.scrollLeft += cardWidth;
    });

    /*2eme carroussel*/ 
  let cardWidth2 = document.querySelector('.card2').offsetWidth + 10;
  let scrollContainer2 = document.querySelector(".list-artwork2");
  let backBtn2 = document.getElementById("back-btn2");
  let nextBtn2 = document.getElementById("next-btn2");
  scrollContainer2.addEventListener("wheel", (evt2)=>{
    evt2.preventDefault();
    scrollContainer2.scrollLeft += evt2.deltaY;
    scrollContainer2.style.scrollBehviour = "auto";
    });
    nextBtn2.addEventListener("click", ()=>{
        scrollContainer2.style.scrollBehviour = "smooth";
        scrollContainer2.scrollLeft += 210;
       // scrollContainer.scrollLeft -= cardWidth;
    });
    backBtn2.addEventListener("click", ()=>{
        scrollContainer2.style.scrollBehviour = "smooth";
        scrollContainer2.scrollLeft -= 210;
       // scrollContainer.scrollLeft += cardWidth;
    });

    /*3eme carroussel*/ 
  let cardWidth3 = document.querySelector('.card3').offsetWidth + 10;
  let scrollContainer3 = document.querySelector(".list-artwork3");
  let backBtn3 = document.getElementById("back-btn3");
  let nextBtn3 = document.getElementById("next-btn3");
  scrollContainer3.addEventListener("wheel", (evt3)=>{
    evt3.preventDefault();
    scrollContainer3.scrollLeft += evt3.deltaY;
    scrollContainer3.style.scrollBehviour = "auto";
    });
    nextBtn2.addEventListener("click", ()=>{
        scrollContainer3.style.scrollBehviour = "smooth";
        scrollContainer3.scrollLeft += 210;
       // scrollContainer.scrollLeft -= cardWidth;
    });
    backBtn2.addEventListener("click", ()=>{
        scrollContainer3.style.scrollBehviour = "smooth";
        scrollContainer3.scrollLeft -= 210;
       // scrollContainer.scrollLeft += cardWidth;
    });

