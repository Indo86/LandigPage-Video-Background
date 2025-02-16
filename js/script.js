$(document).ready(function() {
  $('.background-video').on('loadeddata', function() {
    setTimeout(function() {
      $('.content').css('visibility', 'visible').addClass('animate__animated animate__fadeInUp');
    }, 500);
  });
});
