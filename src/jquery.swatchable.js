/*
 * Swatchable
 * 
 * @author Oliver Green <green2go@gmail.com>
 * @license  https://opensource.org/licenses/MIT
 */
(function($){
    "use strict";
    
    $.fn.swatchable = function(options) {

        var $ele = $(this), $li;

        var settings = $.extend({
            formFieldElement: null,
            colors: ['red', 'green', 'blue', 'yellow', 'orange', 'purple']
        }, options);

        if (! settings.formFieldElement) {
            settings.formFieldElement = $('<input type="hidden" name="color">');
            $ele.after(settings.formFieldElement);
        }

        for (var k in settings.colors) {
            $li = $('<li style="background-color:'+settings.colors[k]+';" data-color="'+settings.colors[k]+'"></li>');

            $li.click(function() {
                settings.formFieldElement.val($(this).data('color'));
                $ele.find('li').removeClass('selected');
                $(this).addClass('selected');
            });

            if (settings.formFieldElement.val() === settings.colors[k]) {
                $li.addClass('selected');
            }

            $ele.append($li);

            $li = null;
        }

        return $ele;
    };
}(jQuery));