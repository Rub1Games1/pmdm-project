$('.fa-angle-down').click(function() {
    var idToScroll = $(this).attr('value')
    document.getElementById(idToScroll).scrollIntoView({ behavior: "smooth" });
})

$('.card').hover(function() {
    if($(this)[0].childNodes[3] != undefined) {
        if($(this)[0].childNodes[3].tagName == "VIDEO") {
            $(this)[0].childNodes[1].classList.toggle('display-none')
            $(this)[0].childNodes[3].classList.toggle('display-none')
            $(this)[0].childNodes[3].play()
        }
    }
})