$(function(){
  $(".btn-gnabi").on("click",function(){
    var rightVal = 0;
    if($(this).hadClass("open")){
      rightVal = -300;
      $(this).removeClass("open");
    } else{
      $(this).addClass("open");
    }
$("#global-navi").stop().animate({
 right: rightVal
}, 200);    
  });
});