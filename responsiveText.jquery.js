(function($) {

    $.responsiveText = function(element, options) {

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;
             
        var defaults = {
            minWidth: null,
            maxWidth: null,
            minFontSize: 0.0,
            maxFontSize: 0.0
        }
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
        }
        
        plugin.resize = function() {
			    var maxWidth = ( plugin.settings.maxWidth == null )? parseInt($(element).css('max-width')) : parseInt(plugin.settings.maxWidth);
			    var width = parseInt($(element).width());

			    if( plugin.settings.minWidth != null && parseInt(plugin.settings.minWidth) > width ){
					width = parseInt(plugin.settings.minWidth);
				}
				var percentage = width / maxWidth;
				percentage = (parseFloat(plugin.settings.minFontSize) > percentage)? plugin.settings.minFontSize : percentage;
				percentage = (parseFloat(plugin.settings.maxFontSize) < percentage)? plugin.settings.maxFontSize : percentage;
				$(element).css('font-size', percentage+'em');
        }
        
        plugin.init();
        
        

    }

    $.fn.responsiveText = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('responsiveText')) {
                var plugin = new $.responsiveText(this, options);
                $(this).data('responsiveText', plugin);
            }
			$(this).data('responsiveText').resize();
			$(window).bind('resize.responsiveText', $(this).data('responsiveText').resize );
        });

    }

})(jQuery);
