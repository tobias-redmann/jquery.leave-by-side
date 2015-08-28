# jquery.leave-by-side: A jQuery Plugin to detect on which side the mouse leaves an element

This jQuery plugin provides a basic mechanism to detect on which side the mouse leaves an given element. You can define callback function for every side. Supported sides are top, bottom, left and right.

Example:

	    $('#element').leaveBySide({
	        top: function() {
	            console.log('top');
	        },
	        bottom: function() {
	            console.log('bottom');
	        },
	        right: function() {
	            console.log('right');
	        },
	        left: function() {
	            console.log('left');
	        }
	    });

You can also access the element which fired the callback. Just pass an elem attribute.

Example:

	    $('#element2').leaveBySide({
	        top: function(elem) {
	            elem.css('border-top-color', 'red');
	            console.log('top2');
	        },
	        bottom: function(elem) {
	            elem.css('border-bottom-color', 'yellow');
	            console.log('bottom2');
	        },
	        right: function(elem) {
	            elem.css('border-right-color', 'blue');
	            console.log('right2');
	        },
	        left: function(elem) {
	            elem.css('border-left-color', 'green');
	            console.log('left2');
	        }
	    });

When your element is very thin or small and someone moves the mouse very fast, the detection could fail. I figured out a minimum height and width of 20px works good.

Feel free to fork an add additional work. This is just a basic idea which works fine for my use case.

Visit our website: [http://www.besserdich-redmann.com][1] or contact me tr@besserdich-redmann.com also via twitter @tobias\_redmann_

[1]:	http://www.besserdich-redmann.com