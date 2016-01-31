
function hideMenu() {
  $(".acceuil").hide();

}

Snap.plugin( function( Snap, Element, Paper, global ) {
  Element.prototype.polyAnimate = function( destPoints, duration, easing, callback ) {
    var poly = this;
    Snap.animate( this.attr('points'), destPoints,  
       function( val ){ poly.attr({ points: val }) }, duration, easing, callback)
    };
});

$(document).ready(function() {
  $(".menu a").on("click", function(e) {
    e.preventDefault;
    $(e.target.hash).show();
    $('html, body').animate({
      scrollTop: $(e.target.hash).offset().top
    }, 'slow', "linear", hideMenu);

  });
  
  
  /*----------- Animation avec snap ---------------*/
  
    var s = Snap('#fukusaSabaki');
	var fukusa = s.polyline(50,50,150,50, 400, 50, 400,400, 150,400, 50,400);
	
	fukusa.attr({
    fill: "red",
    stroke: "darkred",
    strokeWidth: 1
	});
  
	var pos2 = [70,50,175,100,320,50,320,400,175,450,70,400];
	var pos3 = [320,50,175,100,320,50,320,400,175,450,320,400]

	fukusa.polyAnimate(pos2,1000, mina.linear, function(){
			var fukusa2 = s.polyline(175,100, 320, 50, 320,400, 175, 450);

	fukusa2.attr({
    fill: "red",
    stroke: "darkred",
    strokeWidth: 1
	});
		
	});
	

	
	fukusa.polyAnimate(pos3,1000, mina.linear);

});
