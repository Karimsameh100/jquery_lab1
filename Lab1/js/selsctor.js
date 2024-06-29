//<-------------------------------------------------Q 1-------------------------------------->
var divColors=["red","blue","green"]
var pColors=["cyan","pink","orange"]
$('.container1 div').each(function(index){
  $(this).css('background-color', divColors[index]);
  $(this).find('p').css('color', pColors[index]);

})


//<-------------------------------------------------Q 2-------------------------------------->
$("a[href*='google']").text('Google');

$("a[href$='.org'").text('IEEE');

$("a[href*='https']").text('Facebook');


//<-------------------------------------------------Q 3-------------------------------------->

$('.container3 figure:eq(2) img').attr('src', 'img/orange.png');
$('.container3 figure:eq(2) figcaption').text('fig.3 - Orange Juice');


//<-------------------------------------------------Q 4-------------------------------------->

$('.container4 td[class="col-name"]').css('color', 'blue');

$('.container4 tr td:odd').css('background-color', 'pink');

$('table:first tr:last td:nth-child(1)').css('font-weight', 'bold');

//<-------------------------------------------------Q 5-------------------------------------->

$('.container5 ul li:nth-child(1)').css('font-style', 'italic');

$('ol li:nth-child(1)').next().css('color', 'red');