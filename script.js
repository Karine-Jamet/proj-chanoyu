
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
	var fukusa01 = s.polyline(50,50,150,50, 150,400, 50,400);
	var fukusa02 = s.polyline(150,50, 400, 50, 400,400, 150,400);


	fukusa01.attr({
    fill: "red",
    stroke: "darkred",
    strokeWidth: 1
	});
	fukusa02.attr({
    fill: "red",
    stroke: "darkred",
    strokeWidth: 1
	});

	var fukusa01_02 = [70,50,175,100,175,450,70,400];
	var fukusa02_02 = [175,100,320,50,320,400,175,450];
	var fukusa01_03 = [320,50,175,100,175,450,70,400];

	fukusa01.polyAnimate(fukusa01_02,1000, mina.linear);
	fukusa02.polyAnimate(fukusa02_02,1000, mina.linear);

	var fukusa01_03 = s.polyline[70,50,175,100,175,450,70,400];

	fukusa01_03.attr({
    fill: "red",
    stroke: "darkred",
    strokeWidth: 1
	});

	fukusa01_03.polyAnimate(fukusa02_02,1000, mina.linear);

});
