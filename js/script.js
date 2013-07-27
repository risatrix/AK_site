$(window).load(function() {
  $('#homeslider').flexslider({
    animation: "slide",
	useCSS: true,
	manualControls: "#pagenav li a.page-nav",
	slideshow: false,
	controlNav: true,              
    directionNav: false             
  });               
});    

$(document).ready(function(){
      //Sets up mouseovers animations for thumbnails     
  	  $('a.folio_link').each(function(index) {
      
   		
   		$(this).mouseenter (function () {
			//var thisTitle = $(this).attr("title") + " >>";
			//$(this).find("div.title-slider").text(thisTitle);
			$(this).find("img.thumb").css("opacity","0.8");
			$(this).find("div.title-slider").animate({
    			opacity: 1.0,
    			marginBottom: "100px",
    			fontSize: "1em",
    			borderWidth: "10px"
  				}, 100 );              
               
    	  		});    
		$(this).mouseleave (
			function () {
	 			$("img").css("opacity","1.0");        	
	 			$("div.title-slider").animate({
    				opacity: 0,
    				marginBottom: "0",
    				fontSize: "1em",
    				borderWidth: "10px"
  					}, 300 );             
    });                                 	
	   });
	   //Fancybox
	    $(".fancybox").fancybox({
		   type :'iframe',
			});
		
		 $(".Ifancybox").fancybox({
		     titlePosition: 'over',
			});        
  });                 