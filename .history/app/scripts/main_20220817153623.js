// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
const isExpandClass = "is-expand";
const headerTop = document.querySelector(".header-top");
headerToggle.addEventListener("click", function() {
    headerMenu.classList.add(isExpandClass);
    }
)
window.addEventListener("click", function(e) {
    // console.log(e.target);
    if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
        headerMenu.classList.remove(isExpandClass);
    }
})

$(document).ready(function () {
      $(".quote-container").slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"
      })
});