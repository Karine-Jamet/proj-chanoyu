
function hideMenu() {
  $(".acceuil").hide();

}

$(document).ready(function() {
  $(".menu a").on("click", function(e) {
    e.preventDefault;
    $(e.target.hash).show();
	console.log(e.target.hash);
    $('html, body').animate({
      scrollTop: $(e.target.hash).offset().top
    }, 'slow', "linear", hideMenu);

  });


 



});
