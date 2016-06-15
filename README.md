#jQuery Swatchable

A lightweight JS color swatch picker.

## Usage
Include the JS and CSS files following within your pages `<head>` tags:

    <script src="dist/swatchable.js"></script>
    <link href="dist/swatchable.css" rel="stylesheet" type="text/css">
    
Add a `<ul class="swatchable"></ul>` placeholder element.

Call the plugin like so:

    <script>
        $(function() {
            $('ul.swatchable').swatchable();
        });
    </script>
    
 See demo.html for a working example.
    
## Options
The picker supports two options:

* `colors` - An array of color options to display.
* `formFieldElement` - The form field element to send the selected value to.

An example using both below:

    <script>
        $(function() {
            $('ul.swatchable').swatchable({
                colors: ['#A6CE39', '#006E90', '#D7263D'],
                formFieldElement: $('input[name=colour]')
             });
        });
    </script>
 