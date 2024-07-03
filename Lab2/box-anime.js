var $box = $('.box');
      var positions = [
        { left: 0, top: 0 ,width:200,height:200,color:'blue'},
        { left: 300, top: 0 ,width:100,height:100,color:'yellow'},
        { left: 300, top: 300, width:150,height:150,color:'green'},
        { left: 0, top: 300,width:100,height:100,color:'red'},
        { left: 0, top: 0,width:200,height:200,color:'red'}
		];
      var currentPos = 0;
      
      function animateBox() {
        var color = positions[currentPos].color;
        $box.animate({
          'width': positions[currentPos].width+'px',
          'height': positions[currentPos].height+'px',
		  'left': positions[currentPos].left + 'px',
          'top': positions[currentPos].top + 'px'
        }, 2000, function() {
        $(this).css('background',color),
          currentPos = (currentPos + 1) ;
          animateBox();
        });
	}
animateBox();

//$(".box").css('background-color', 'pink');