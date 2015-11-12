(function($) {

  $.fn.maxHeightPercentage = function(pct, $source) {

    pct = pct || 100;
    $source = $source || $this.offsetParent();    
    var $this = $(this);   
    
    $this.addClass('max-height-'+pct+'pct-js');
    
    var publicR = {};

    publicR.process = function() {
      var h = Math.floor($source.innerHeight() * (pct / 100));
      $this.css({maxHeight: h + "px"});
    };

    $(document).ready(publicR.process);
    $(window).load(publicR.process);
    $(window).resize(publicR.process);
    $source.resize(publicR.process);
    publicR.process();

    return publicR;

  };

})(jQuery);
