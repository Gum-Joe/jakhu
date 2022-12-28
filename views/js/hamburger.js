(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

$(window).on('scroll',
	{
	    previousTop: 0
	},
	function () {
	    var currentTop = $(window).scrollTop();
	    //check if user is scrolling up
	    if (currentTop < this.previousTop ) {
	    	//if scrolling up...
	    	//add class 'is-visible' to the main navigation
	    	//if currentTop == 0, remove 'is-fixed' and 'is-visible' classes
	    } else {
	    	//if scrolling down...
	    	//add the 'is-fixed' class to the main navigation as soon as it is no longer visible
	    	//add class 'is-visible' to the main navigation
	    }
	    //set previousTop for the next iteration
	    this.previousTop = currentTop;
	}
);
