// project orbit
$('.project-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  prevArrow: "<img class='slick-prev' src='img/left-arrow-icon.png'>",
  nextArrow: "<img class='slick-next' src='img/right-arrow-icon.png'>"
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
function projectDisplay() {
var lastClick;
  $('.project-tile').click(function(e){
    let $target = $(e.currentTarget);
    let $targetId = $target.attr('data-target');
    let $slick = $(`#${$targetId}-slick`);
    if (lastClick === $targetId && ($('.project-tile').hasClass('selectedItem'))) {
      $('.project-description').hide();
      $('.project-tile').removeClass('selectedItem');
    } else {
      lastClick = $targetId;
      $('.project-tile').removeClass('selectedItem');
      $target.addClass('selectedItem');
      $('.project-description').hide();
      $(`#${$targetId}-description`).removeClass('hidden').fadeToggle(1000);
      $slick.slick({
        prevArrow: "<img class='slick-prev' src='img/left-arrow-icon.png'>",
        nextArrow: "<img class='slick-next' src='img/right-arrow-icon.png'>"
      });
    };
  });
};

projectDisplay();
