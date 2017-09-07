
$('.project-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true
});

$('.project').hover(
  function jerry()  {
    var $selected = $("#" + $(this).attr('value'));
    $selected.fadeIn(600);
  }, function() {
    var $selected = $("#" + $(this).attr('value'));
    $selected.fadeOut(600);
  }
);
