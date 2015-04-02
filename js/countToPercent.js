/*
*
* Author Karo Hakobyan
*
*/

(function($){
		
	$.fn.countToPercent = function( options ){
	
		var settings = $.extend({
			degree : 1
		}, options);
		
		return this.each(function(i, elem){
			
			var self = $(elem);
			var total = 0;
	
			$(".voting-total", self).each(function(i, elem){				
				total += Number($(elem).text());
			});
			
			if( total > 0 ) {
			
				$(".voting-total", self).each(function(i, elem){
					
					var percent = ((parseFloat($(elem).text()) / total) * 100).toFixed(settings.degree);
					
					$(elem).width(percent + "%");
					$(elem).attr("data-percent", percent + "%");
					$(elem).attr("data-total", $(elem).text());
					
				});
				
				$(".voting-total-box", self).hover(function(){
					$(".voting-total", $(this)).text( $(".voting-total", $(this)).attr("data-percent") );
				}, function(){
					$(".voting-total", $(this)).text( $(".voting-total", $(this)).attr("data-total") );
				});
			
			}
			
		});
		
	};

})(jQuery);