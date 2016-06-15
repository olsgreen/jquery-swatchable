/*
 * Swatchable
 * 
 * @author Oliver Green <green2go@gmail.com>
 * @license  https://opensource.org/licenses/MIT
 */
!function(e){"use strict";e.fn.swatchable=function(l){var o,r=e(this),n=e.extend({formFieldElement:null,colors:["red","green","blue","yellow","orange","purple"]},l);n.formFieldElement||(n.formFieldElement=e('<input type="hidden" name="color">'),r.after(n.formFieldElement));for(var t in n.colors)o=e('<li style="background-color:'+n.colors[t]+';" data-color="'+n.colors[t]+'"></li>'),o.click(function(){n.formFieldElement.val(e(this).data("color")),r.find("li").removeClass("selected"),e(this).addClass("selected")}),n.formFieldElement.val()===n.colors[t]&&o.addClass("selected"),r.append(o),o=null;return r}}(jQuery);