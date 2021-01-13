

var locationNames = $(location).attr('pathname').split('/') //Devolve array ['', 'index1.html']
var Index = locationNames[locationNames.length - 1] //Buscar o ultimo path 'index1.html'
var IndexNumber = parseInt(Index.slice(5,6)) // retirar o .html para buscar o index<number>

var data1 = null

if (isNaN(IndexNumber) == true) //se nao conseguir encontrar o <number> ent é o 1º index
  IndexNumber = 0

$('#leftMenu').on("click", function(e){
    if (IndexNumber == 0)  
      location.href = "index5.html"
    else {
      if(IndexNumber == 1)
        location.href = "index.html"
      else 
        location.href = "index" + (IndexNumber - 1) + ".html"
    }
});

$('#rightMenu').on("click", function(e){
  var getIndex = null;
  if(IndexNumber == 5)
    getIndex = "index.html"
  else
    getIndex = "index" + (IndexNumber + 1) + ".html"
  
  history.pushState("","",getIndex)
  $.get(getIndex, function(data) {
    data = data.substring(data.lastIndexOf("<body>"),data.lastIndexOf("</body>"))
    data = data.substring(data.indexOf('>') + 1)
    $('body').html(data)
  })
})


$(document).on({
  ajaxStart: function() { $("body").addClass("loading");    },
  ajaxStop: function() { $("body").removeClass("loading"); }    
});