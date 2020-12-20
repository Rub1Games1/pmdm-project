var locationNames = $(location).attr('pathname').split('/')
var Index = locationNames[locationNames.length - 1]
var IndexNumber = parseInt(Index.slice(5,6))

if (isNaN(IndexNumber) == true)
  IndexNumber = 0

$(document).on("mousemove", function(e){
    if (e.pageX < innerWidth * 0.075 && e.pageY > innerHeight * 0.075)
        $('#leftMenu').show()
    else
        $('#leftMenu').hide()

    if (e.pageX > innerWidth * 0.925 && e.pageY > innerHeight * 0.075)
        $('#rightMenu').show()
    else
        $('#rightMenu').hide()
});

$(document).on("click", function(e){
    if (e.pageX < innerWidth * 0.075 && e.pageY > innerHeight * 0.075) {
        if (IndexNumber == 0)  
          location.href = "index4.html"
        else {
          if(IndexNumber == 1)
            location.href = "index.html"
          else location.href = "index" + (IndexNumber - 1) + ".html"
        }
    }

    if (e.pageX > innerWidth * 0.925 && e.pageY > innerHeight * 0.075) {
      if(IndexNumber == 4)
          location.href = "index.html"
      else
          location.href = "index" + (IndexNumber + 1) + ".html"
    }
});
