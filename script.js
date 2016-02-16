
var where = ".acceuil";

function hideMenu() {
  $(".acceuil").hide();

}

$(document).ready(function() {
  $(".menu a").on("click", function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$(e.target.hash).show();
		where = e.target.hash;
		$(".top-nav").show();
		
		$('html, body').animate({
		  scrollTop: $(".top-nav").offset().top
		}, 'slow', "linear", hideMenu);
		return false;

  });
  
    $(".top-nav a[href=#acceuil]").on("click", function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$(".acceuil").show();
		$('html, body').animate({
			scrollTop : $( window ).height()
		},0);
		$('html, body').animate({
			scrollTop : 0
		},'slow', "linear", function(){
			$(".top-nav").hide();
			$(where).hide();
			
		});
		
		return false;
  });


 



});
