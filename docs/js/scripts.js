// project orbit
$('.project-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true
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

$('.project-tile').click(function(e){
  let $slickId = $(this).attr('id');
  let $target = $(e.currentTarget);
  console.log($slickId)
  $('.project-description').hide();
  let $targetId = $target.attr('data-target');
  $(`#${$targetId}-description`).removeClass('hidden').slideDown(1000);
  $('.screenshot-orbit').slick();
})
