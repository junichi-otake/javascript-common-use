if( typeof(icu) === 'undefined' ){ icu = {}; }
icu.image = {
  loadImageCheckedSize: function( imgId, imageUrl, baseSize ){
    if( typeof(baseSize) === 'undefined' ) baseSize=100;
    var dom = $('#'+imgId);
    var img = new Image();
    img.onload = function(){
      var rate = img.height/img.width;
      top = 0;
      left = 0;
      if( rate > 1 ){
        left = parseInt((baseSize-(baseSize/rate))/2);
      }else{
        top = parseInt((baseSize-(baseSize*rate))/2);
      }
      dom.css('top', top+'px' );
      dom.css('left', left+'px' );
      dom.attr('src', imageUrl);
    }
    img.src=imageUrl;
  }
};
