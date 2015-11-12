# max-height-percentage

In some circumstances CSS max-height given by percents is not working. This jQuery plugin can fix that problem.

## Usage

**$('TARGET_SELECTOR').maxHeightPercentage(PERCENTAGE, $SOURCE)**
* TARGET_SELECTOR: selector for element on which max-height is applyed
* PERCENTAGE: max-height in percents to apply
* $SOURCE: jQuery object to get as relatve parent for percentage calculations

## Example
``` html

<div calss="parent-source">
  <div calss="target">
    some content
  </div>
</div>

<!-- include script file to your project -->
<script src="local/thumbor.js"></script>

<!-- initialize jQuer plugin on element -->
<script>
  var RETURNED_OBJECT = $('.target').maxHeightPercentage(100, $('.parent-source'))
</script>


````

## Public methods

**process**
Used to manuali triger calcilations. Notice thet calculations are automatically triggered on $(document).ready, $(window).load, $(window).resize .

``` javascript
  RETURNED_OBJECT.process();
```

##Requirements

jQuery

