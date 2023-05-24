const btn=document.getElementById("btnagregar")
const dataContainer=document.getElementById("formagregar")

btn.addEventListener("click", evt=>{
    const xhr= new XMLHttpRequest()
    xhr.open("GET","http://127.0.0.1:5500/agregar.html",true)

    xhr.addEventListener("load", e=>{
        dataContainer.innerHTML=e.target.responseText
    })
    xhr.send()
})