$(document).ready(function(){
  $('.content').hide();

  $('.background-video').on('loadeddata', function(){
    console.log("Video sudah dimuat!");
    setTimeout(function(){
      $('.content').fadeIn(2000);
    }, 1000);
  });
});
