(function ($) {
	$.choones = function (title, message) {
		var args = arguments[2] || {};
		if (typeof(message) == 'object') {
		  args = message;
		  message = '';
		}
		
		init(title, message, args);
	}
	
	//
	// == Public methods
	//
	$.extend($.choones, {
	  settings: {
	    type: 'success',
			display_time: 5000
	  },
	  
		display: function () {
		  // Nicer animation and as a bonus actually work in safari with position:fixed
			$('#choones').animate({opacity: "show", height: "show"});
			this.timeout = setTimeout(function () {
				$('#choones').animate({opacity: "hide", height: "hide"});
			}, $.choones.settings.display_time);
		}
	});
	
	//
	// == Private methods
	//
	
	init = function (title, message, args) {
		display = {title: title, message: message};
		$.choones.settings = $.extend($.choones.settings, args);
		
		resetTimeout();
		setType();
		setMessage();
		$.choones.display();
	}
	
	resetTimeout = function () {
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
	}
	
	// Set either a success or failure state
	setType = function () {
		$('#choones')[0].className = ($.choones.settings.type == 'success') ? 'success' : 'failure';
	}
	
	setMessage = function () {
		$('#choones').children('h1').text(display.title);
		$('#choones').children('p').text(display.message || '');
	}

	// 
	// == Events
	//
	
	// If there is a message to display already in the DOM, display it
  $(function(){
    if($('#choones').children('p').text() != 'Message') {
      $.choones.display();
    }    
	})
})(jQuery);