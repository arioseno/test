$('.ln-hero-title').typeIt({
     strings: 'We Build Awesome Products based on Artificial Intelligence.',
     speed: 100,
     autoStart: false
});

// count milestone

(function($) {


		"use strict";


		function count($this){


		var current = parseInt($this.html(), 10);


		current = current + 1; /* Where 50 is increment */	


		$this.html(++current);


			if(current > $this.data('count')){


				$this.html($this.data('count'));


			} else {    


				setTimeout(function(){count($this)}, 120);


			}


		}        	


		$(".stat-count").each(function() {


		  $(this).data('count', parseInt($(this).html(), 10));


		  $(this).html('0');


		  count($(this));


		});


   })(jQuery);

   new WOW().init();