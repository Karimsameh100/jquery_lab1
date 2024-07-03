
$(document).ready(function () {
  var i=1;
  var cls = ["red", "blue", "orange", "green"]
  var randomIndex
    $('.red').one('click', generateBox);
    function generateBox() {
        randomIndex = Math.floor(Math.random() * cls.length);
        var box = $('<div>').addClass("box"+i).css('background-color', cls[randomIndex]);
        $(this).after(box).on('mouseout', function() {
        $(this).css('background-color', cls[randomIndex]);
        })
        $(document).one('click',".box"+i,generateBox);
        i++;
      }
      console.log(i)
      
      

    
    // function getRandomColor() {
    //     randomIndex = Math.floor(Math.random() * cls.length);
    //     var color = cls[randomIndex];
    //     return color,randomIndex

    // }
});
