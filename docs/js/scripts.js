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


// click function for project grid to display preview and start slick
$('.project-tile').click(function(e){
  $('.project-tile').removeClass('selectedItem')
  // $selectedItem.removeClass('.selectedItem');
  let $target = $(e.currentTarget);
  $target.addClass('selectedItem');
  $('.project-description').hide();
  let $targetId = $target.attr('data-target');
  $(`#${$targetId}-description`).removeClass('hidden').hide().fadeIn(700);
  $('.project-row2').css('margin-top', '-4em')
  let $slick = $(`#${$targetId}-slick`);
  $slick.slick()
})
