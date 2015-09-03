$(document).ready( function () {
  var hidden = $('.hidden');
  var reveal = $('.reveal');
  hidden.hide();
  hidden.addClass("more");
  reveal.click( function () {
    var more = hidden.hasClass("more");
    if(more === true) {
      hidden.slideDown(200);
      reveal.text("Read Less");
      hidden.removeClass("more");
    } else {
      reveal.text("Read More");
      hidden.slideUp(200);
      hidden.addClass("more")
    }
    return false;
  })
});