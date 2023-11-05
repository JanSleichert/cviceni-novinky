const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const novinky = document.querySelector(".news")
novinky.style.backgroundColor = "white"
novinky.style.maxWidth = "60rem"

const nadpis = document.querySelector("h1")
nadpis.classList.add("news__title")
nadpis.textContent= "Aktuální novinky"

const prvniZprava = document.querySelector("#zprava1")
prvniZprava.classList.add("post--main")


const obrazekTri = document.querySelector("#obrazek3")
obrazekTri.src = "images/zprava3-novy.jpg"