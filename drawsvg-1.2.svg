$.fn.drawSVG = function(opts) {
	if (typeof opts == "undefined") { opts = new Object(); } 	
	if (typeof opts.outlineColor == "undefined") { opts.outlineColor = "000"; } else { opts.outlineColor.replace("#",""); }
	if (typeof opts.outlineWidth == "undefined") { opts.outlineWidth = 2; }	
	if (typeof opts.fillColor == "undefined") { opts.fillColor = "ddd"; } else { opts.fillColor.replace("#",""); }
	if (typeof opts.drawTime == "undefined") { opts.drawTime = 2000; }		
	original = $(this);
	$(this).find("g").each(function(){		
		$(this).find("path").each(function(){		
			origPath = $(this);
			origPath.attr("stroke","#"+opts.outlineColor);
			origPath.attr("stroke-width",opts.outlineWidth);
			origPath.attr("stroke-miterlimit",10);				
			
			path = $(this)[0];	
			length = path.getTotalLength();
			console.log(length);
			
			path.style.strokeDashoffset = length; //starting position
			path.style.strokeDasharray = length + ', ' + length;
			path.style.fill = "none"; //make it have no fill to begin with
			path.style.transition = path.style.WebkitTransition = 'none';
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+(opts.drawTime/1000)+'s ease-in-out';
			path.style.strokeDashoffset = '0'; //finishing position
			$(path).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', //drawing complete
			function(e) {					
				$(this)[0].style.fill = "#"+opts.fillColor; //fill image
			});
		});
	});	
}
