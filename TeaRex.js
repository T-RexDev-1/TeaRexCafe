$(function(){
  $(".toggle").on("click", function (){
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find("a").html("<ion-icon name='grid-outline'></ion-icon>");
    }
    else {
      $(".menu").addClass("active");
      $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
  });
});