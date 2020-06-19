$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    console.log($(this).attr("data-target"));
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  let mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        sliderOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
