var FooterTag = document.createElement("footer")
FooterTag.classList.add("bg-dark", "text-white", "text-center", "text-lg-start")
var divTag = document.createElement("div")
divTag.classList.add("text-center", "p-3")
divTag.style = "background-color: rgba(0, 0, 0, 0.2)"
divTag.innerHTML = "© 2020 Copyright: Rúben Cipriano, David Sobral, Hugo  Fernandes"
FooterTag.appendChild(divTag)
document.write(FooterTag.innerHTML)