//<----------------------------------------------Q 1---------------------------->
$(".container1").append("<div class='black'></div>")
//$(".container1").prepend("<div class='white'></div>")
$(".red").before("<div class='white'></div>");

$(".pink").before("<p class='yellow'></p>");

//<---------------------------------------Q 2----------------------------->
$('.container2 p').each(function() {
    var $p = $(this);
    var textContent = $p.text();
    $p.replaceWith('<a href="http://' + textContent + '">' + textContent + '</a>');
  });

//<------------------------------------------------Q 3---------------------------------->

$('.container3 img').wrap('<figure>')
$('.container3 img').after('<figcaption>Coffee</figcaption>');


//<------------------------------------------------Q 4---------------------------------->
$(".col-age").empty()

$("td:contains('Mohsen')").addClass("man");

// $("td").each(function() {
//     if ($(this).hasClass("your-email")) {
//       $(this).removeClass("your-email");
//     } else {
//       $(this).addClass("your-email");
//     }
//   });


//<---------------------------------Q 6-------------------------------------->
$('#my-form input[name="username"]').val('<yourname>');
$('#my-form input[type="checkbox"]').prop('checked', true);