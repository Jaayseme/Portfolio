//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
//nav hide
let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

//books
let cardCheck = document.querySelectorAll(".card")
cardCheck.forEach(function(b){
    b.addEventListener("click", function(){
        
    })

})
//Back to top link

        $(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() - 200 > 0) {
            $('#to-top').stop().slideDown('fast'); // show the button
        } else {
            $('#to-top').stop().slideUp('fast'); // hide the button
        }
    });
});
    
    
        $(function () {
    // previous detection logic

    $("#to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });
});
/*BOOK JS*/



$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });