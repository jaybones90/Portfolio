
$('.project-container').slick({
  infinite: true,
  dots: true
});

$('.project').click(function(){
  var $selected = $(this).attr('value');
  var $overlay = $('.overlay');
  $('.overlay').show();
  $('.overlay').text('hey')
})
