(function($){

  setTimeout(function(){
    $(".collapse-toggle").eq(0).click();
  },300);

  setTimeout(function(){
    $(".collapse-toggle").eq(1).click();
  },600);

  $('#ref-letters-title').click(function(){
    setTimeout(function(){
      var topCoord = $('#reference-letter').position().top;
      $('body').animate({scrollTop:topCoord}, '250', 'swing');
    },300);
  })

})($)