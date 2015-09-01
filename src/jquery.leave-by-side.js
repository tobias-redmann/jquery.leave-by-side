/**
 * jquery.leave-by-side - jQuery Plugin to detect on which side the mouse leaves an element
 *
 * (c) 2015 Tobias Redmann / Besserdich & Redmann GmbH / tr@besserdich-redmann.com
 */

(function($) {

    $.fn.leaveBySide = function(options) {


        var settings = $.extend({
            top: null,
            bottom: null,
            right: null,
            left: null
        }, options );


        return this.each(function() {

            var elem = $(this);

            var elementTop = elem.offset().top;
            var elementBottom = elem.offset().top + elem.height();
            var elementLeft = elem.offset().left;
            var elementRight = elem.offset().left + elem.width();

            if (settings.top != null) {
                elem.mouseleave(function (e) {
                    if (e.pageY <= elementTop) {
                        settings.top(elem);
                    }
                });
            }

            if (settings.bottom != null) {
                elem.mouseleave(function (e) {
                    if (e.pageY >= elementBottom) {
                        settings.bottom(elem);
                    }
                });
            }

            if (settings.left != null) {
                elem.mouseleave(function (e) {
                    if (e.pageX <= elementLeft) {
                        settings.left(elem);
                    }
                });
            }

            if (settings.right != null) {
                elem.mouseleave(function (e) {
                    if (e.pageX >= elementRight) {
                        settings.right(elem);
                    }
                });
            }


        });
    };

}(jQuery));