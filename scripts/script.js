
// Search
document.querySelector('.js-search-button').addEventListener('click', () => {
  searchAnything();
});


function searchAnything(){
  const product= document.querySelector('.js-search-input');
  console.log(product.value);
}



// Nav
const hamburger =document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.toggle("remove");
  navLinks.classList.toggle("remove");
}))

// Carousel
let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("picture-slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

// Subscribe
document.querySelector('.js-subs-button').addEventListener('click', () => {
  isSucceed();
});
function isSucceed(){
  const email = document.querySelector('.js-subs-input');
  console.log(email.value);

  document.querySelector('.js-subs-notif').innerHTML = "You have successfully subscribed Simple Home Newsletter";
}
