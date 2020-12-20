$('.fa-angle-down').click(function() {
    var idToScroll = $(this).attr('value')
    document.getElementById(idToScroll).scrollIntoView({ behavior: "smooth" });
})