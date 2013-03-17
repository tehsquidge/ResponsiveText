(function($){
 
    $.fn.responsiveText = function() {
		
		return this.each( function(){
			var jNode = $( this );

			var resize = function() {
				var percentage = jNode.width() / parseInt(jNode.css("max-width"));
				jNode.css('font-size', percentage+'em');
			}
			resize();
			$(window).bind('resize.responsiveText', resize );
		});
    }
     
})(jQuery);
