// STICKY NAVBAR 
// element references
const navbar = document.querySelector(".navbar");
const title = document.querySelector(".title");

// handler
const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  if (spotIsVisible) navbar.classList.remove("fixed-top") & title.classList.remove("fixed-title");
  else navbar.classList.add("fixed-top") & title.classList.add("fixed-title");
};

//---------------------------------------------
// button click -> scroll to content
function scrollToAnchor(aid){
  let destination = $("."+ aid);
  $('.wrapper').animate({
    scrollTop: destination.offset().top
  }, 1000 );
}

$(document).on('click', '.btn-start', function(){
  const btn_top = document.querySelector(".btn-top");
  scrollToAnchor('section');
  (this).classList.add('jump');
  btn_top.classList.remove('hidden');
  btn_top.classList.add('show');
  (this).classList.remove('jump');
})

$(document).on('click', '.btn-top', function(){
  const btn_start= document.querySelector(".btn-top");
  scrollToAnchor('toppage');
  (this).classList.remove('show');
  (this).classList.add('hidden');
  
}) 

//---------------------------------------------


