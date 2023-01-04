let index = 0;
const totalWorkItem = $(".workItem").length;

$(window).on("load",function(){
   $(".preloader").addClass("loaded");
})

 
$(document).ready(function(){

   // nav toggle
   $(".navToggle").click(function(){
      $(".header .nav").slideToggle();
   })

   $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
   })
   // fixed header
   $(window).scroll(function(){
      if($(this).scrollTop() > 100){
         $(".header").addClass("fixed")
      }
      else{
         $(".header").removeClass("fixed"); 
      }
   })
   
   // add scmooth scroll function (w3school)
   $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    // set lightBox img max height
   const wHeight = $(window).height();
   $(".lightBoxImg").css("max-height",wHeight+"px");

//    lightBox
   $("workItemInner").click(function(){
      index = $(this).parent(".workItem").index();
      $(".lightBox").addClass("open");
      lightBoxSlidShow();
   })
   $(".lightBox .preview").click(function(){
      if(index == 0){
         index = totalWorkItem-1;
      }
      else{
         index--;
      }
      lightBoxSlidShow();
   })
   $(".lightBox .next").click(function(){
      if(index == totalWorkItem-1){
         index=0;
      }
      else{
         index++;
      }
      lightBoxSlidShow();
   })
   $(".lightBoxClose").click(function(){
      $(".lightBox").removeClass("open");
   })
   $(".lightBox").click(function(event){
      if($(event.target).hasClass("lightBox")){
         $(this).removeClass("open");
      }
   })
})  

function lightBoxSlidShow(){
    const imgSrc = $(".workItem").eq(index).find("img").attr("data-lagre");
    const category = $(".workItem").eq(index).find("h4").html();
    $(".lightBoxImg").attr("src",imgSrc);
    $(".lightBoxCategory").html(category);
    $(".lighBoxCounter").html(totalWorkItem + "/" + (index + 1));
}