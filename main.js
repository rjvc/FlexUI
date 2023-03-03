// STICKY NAVBAR 
/*
$(document).ready(function() {
  // grab the initial top offset of the navigation 
     var navbar = $('.navbar').offset().top;
     var vpheight = $(window).height();
     // our function that decides weather the navigation bar should have "fixed" css position or not.
     var stickyNav = function(){
          var scrollTop = $('.section').scrollTop(); // our current vertical position from the top
              
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > vpheight) { 
              $('.navbar').addClass('fixed-nav');
          } else {
              $('.navbar').removeClass('fixed-nav'); 
          }
      };

  stickyNav();
  // and run it again every time you scroll
  $('.wrapper').scroll(function() {
    stickyNav();
  });
});
*/


jQuery(function($) {

  var $nav = $('.navbar');
  var $win = $('.wrapper');
  var winH = $(window).height()-1;   // Get the window height.
  $('.fixed-nav-logo').addClass("hide");
  $win.on("scroll", function () {
      if ($('.wrapper').scrollTop() > winH ) {
          $nav.addClass("fixed-nav");
          $('.fixed-nav-logo').addClass("show");
          $('.fixed-nav-logo').removeClass("hide");
      } else {
          $nav.removeClass("fixed-nav");
          $('.fixed-nav-logo').addClass("hide");
          $('.fixed-nav-logo').removeClass("show");
      }
  })
  $(window).on("resize", function(){ // If the user resizes the window
     winH = $(window).height()-1; // you'll need the new height value
  });

});

//btns


$('.wrapper').on("scroll", function () {
  if ($('.wrapper').scrollTop() > 50 ) {
    alert("1111");
    const btn_top = document.querySelector('.btn-top');
    const btn_start = document.querySelector('.btn-start');
    btn_top.classList.add('appear');
    btn_top.classList.remove('hidden');
    btn_top.classList.add('show');
    btn_start.classList.add('hidden'); 
  } else {
    const btn_start= document.querySelector(".btn-top");
    (btn_start).classList.remove('show');
    (this).classList.add('hidden'); 
  }
})



//---------------------------------------------
// button click -> scroll to content
function scrollToAnchor(aid){
  let destination = $("."+ aid);
  $('.wrapper').animate({
    scrollTop: destination.offset().top
  }, 1000 );
}

$(document).on('click', '.btn-start, .foreground', function(){
  const btn_top = document.querySelector('.btn-top');
  const btn_start = document.querySelector('.btn-start');
  scrollToAnchor('section');
  btn_start.classList.add('jump');
  btn_top.classList.add('appear');
  btn_top.classList.remove('hidden');
  btn_top.classList.add('show');
  setTimeout(() => {
    btn_start.classList.remove('jump');
    btn_start.classList.add('hidden'); 
  }, "1000")
})

$(document).on('click', '.btn-top', function(){
  const btn_start= document.querySelector(".btn-top");
  scrollToAnchor('toppage');
  (this).classList.remove('show');
  (this).classList.add('hidden');
  
}) 

//---------------------------------------------
// LIST MENU

function ListMenu() {
  var listMenu = document.getElementById("myLinks");
  if (listMenu.style.display === "flex") {
    listMenu.style.display = "none";
  } else {
    listMenu.style.display = "flex";
  }
}