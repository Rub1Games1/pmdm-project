var locationNames = $(location).attr('pathname').split('/')
var Index = locationNames[locationNames.length - 1]
var IndexNumber = parseInt(Index.slice(5,6))

if (isNaN(IndexNumber) == true)
  IndexNumber = 0

$('#leftMenu').on("click", function(e){
    if (IndexNumber == 0)  
      location.href = "index4.html"
    else {
      if(IndexNumber == 1)
        location.href = "index.html"
      else location.href = "index" + (IndexNumber - 1) + ".html"
    }
});
$('#rightMenu').on("click", function(e){
    if(IndexNumber == 4)
        location.href = "index.html"
    else
        location.href = "index" + (IndexNumber + 1) + ".html"
})