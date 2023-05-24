let url='http://localhost:3000/posts'
fetch(url)
.then(response =>response.json())
.then(data => mostrardata(data))
.catch(error =>console.log(error))

const mostrardata=(data) =>{
console.log(data)
let body=""
for(var i=0; i<data.length; i++){
    body +=`
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].nombre}</td>
    <td>${data[i].apellido}</td>
    <td><a href="#">Editar</a></td>
    <td><a href="#">Eliminar</a></td>
    </tr>
    `
}
document.getElementById('data').innerHTML=body;

}