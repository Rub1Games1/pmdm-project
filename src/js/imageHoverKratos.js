var max_x = $(window).width();
var center_x = max_x / 2;

$('#KratosParent').on('mousemove', function(e) {
    var mouse_x = e.pageX;
    var hypotenuse = Math.sqrt(Math.pow((mouse_x-center_x),2));
    var cos = (mouse_x-center_x) / hypotenuse;

    Images = $(this).find('img')
    for(var i = 0; i < Images.length; i++) {
        $(Images[i]).css("transform", `rotateY(${cos}deg)` );
    }
})