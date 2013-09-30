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
			$(this).find("img.thumb").css("opacity","0.8");
			$(this).find("div.title-slider").addClass('active');
    	  	});    
		$(this).mouseleave (
			function () {
	 			$("img").css("opacity","1.0");        	
	 			$(this).find("div.title-slider").removeClass('active');         
    		});                                	
	   });
	   //Fancybox
	    $(".folio_link").fancybox({
		   type :'iframe',
		   afterLoad: function() {
		   	if ($(this.element).data('url')) {
        	this.title = this.title + '<a href="' + $(this.element).data('url') + '" class="outer-link">Visit Site</a>';
        	}
   		   },
		   helpers : {
        		title: {
            		type: 'inside',
            		position: 'top'
        		}
    		},
		});   
  });                 