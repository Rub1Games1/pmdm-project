var locationNames = $(location).attr('pathname').split('/')
var Index = locationNames[locationNames.length - 1]
var IndexNumber = parseInt(Index.slice(5,6))


$(document).on("mousemove", function(e){
    if (e.pageX < innerWidth * 0.075 && e.pageY > innerHeight * 0.075 && IndexNumber > 0)
        $('#leftMenu').show()
    else
        $('#leftMenu').hide()

    if (e.pageX > innerWidth * 0.925 && e.pageY > innerHeight * 0.075 && IndexNumber < 4)
        $('#rightMenu').show()
    else
        $('#rightMenu').hide()
});

$(document).on("click", function(e){
    if (e.pageX < innerWidth * 0.075 && e.pageY > innerHeight * 0.075) {
        if(IndexNumber - 1 < 0) {
            return
        } else {
            location.href = "index" + (IndexNumber - 1) + ".html"
        }
    }

    if (e.pageX > innerWidth * 0.925 && e.pageY > innerHeight * 0.075) {
        if(IndexNumber + 1 > 4) {
            return
        } else {
            location.href = "index" + (IndexNumber + 1) + ".html"
        }
    }
});
