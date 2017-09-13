// project orbit
$('.project-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true
});

$('.project-screenshots').slick({
  // arrows: false
});
// hover for project orbit
$('.project').hover(
  function jerry()  {
    var $selected = $("#" + $(this).attr('value'));
    $selected.fadeIn(600);
  }, function() {
    var $selected = $("#" + $(this).attr('value'));
    $selected.fadeOut(600);
  }
);
// smooth scroll function
$('a[href*="#"]').click(function(){
  let hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function() {
    window.location.hash = hash;
  });
});
// fade in headline
$('.headline').fadeIn(2000);

$('.project-screenshots').hover(
  function(){
    var $selected = $(this).attr(value);
    console.log($selected)
  }, function() {

  }
)
