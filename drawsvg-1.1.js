$.fn.drawSVG = function(opts) {
	if (typeof opts == "undefined") { opts = new Object(); } 	
	if (typeof opts.outlineColor == "undefined") { opts.outlineColor = "000"; } else { opts.outlineColor.replace("#",""); }
	if (typeof opts.outlineWidth == "undefined") { opts.outlineWidth = 2; }	
	if (typeof opts.fillColor == "undefined") { opts.fillColor = "ddd"; } else { opts.fillColor.replace("#",""); }
	if (typeof opts.drawTime == "undefined") { opts.drawTime = 2000; }		
	
	origPath = $(this).find("path");
	origPath.attr("stroke","#"+opts.outlineColor);
	origPath.attr("stroke-width",opts.outlineWidth);
	origPath.attr("stroke-miterlimit",10);	
	opts.drawTime = opts.drawTime / 1000;	
	selector = origPath.selector;	
	console.log(selector);
	path = document.querySelector(selector);	
	length = path.getTotalLength();
	
	path.style.strokeDashoffset = length; //starting position
	path.style.strokeDasharray = length + ', ' + length;
	path.style.fill = "none"; //make it have no fill to begin with
	path.style.transition = path.style.WebkitTransition = 'none';
	path.getBoundingClientRect();
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+opts.drawTime+'s ease-in-out';
	path.style.strokeDashoffset = '0'; //finishing position
	$(selector).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', //drawing complete
	function(e) {			
		path.style.fill = "#"+opts.fillColor; //fill image
	});
}