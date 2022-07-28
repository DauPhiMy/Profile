// Sidebar-Content
const items = document.querySelectorAll(".sidebar__item");
const contents = document.querySelectorAll(".content");

items.forEach((item, index) => {
  item.onclick = () => {
    const content = contents[index];
    document.querySelector(".sidebar__item.active").classList.remove("active");
    document.querySelector(".content.active").classList.remove("active");

    item.classList.add("active");
    content.classList.add("active");
  };
});

window.onscroll = function() {myFunction()};

const navbar = document.querySelector(".sidebar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Slider

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
