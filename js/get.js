let url = 'http://localhost:3000/posts';
fetch(url)
  .then(response => response.json())
  .then(data => mostrardata(data))
  .catch(error => console.log(error));

const mostrardata = (data) => {
  console.log(data);
  let body = "";
  for (let i = 0; i < data.length; i++) {
    body += `
      <tr>
        <td data-post-id="${data[i].id}">${data[i].id}</td>
        <td>${data[i].nombre}</td>
        <td>${data[i].apellido}</td>
        <td>${data[i].correo}</td>
        <td><img src="imagenes/${data[i].foto}" width="50" height="auto" title="${data[i].foto}"></td>
        <td><a href="#" onclick="editar(${data[i].id})">Editar</a></td>
        <td><button class="btn-eliminar" onclick="eliminar(${data[i].id})">Eliminar</button></td>
      </tr>
    `;
  }
  document.getElementById('data').innerHTML = body;
};

const editar = (postId) => {
  console.log("Id Recibido", postId);
  abrirVentana(postId);
};

function abrirVentana(postId) {
 
  ventana_secundaria = window.open(`editar.html?postId=${postId}`, 'EDITAR', "width=550,height=500,menubar=no,resizable=no, status=no, top=100, left=100");
}

function eliminar(postId) {
  console.log("Id Recibido", postId);

  const response = confirm('¿Estás seguro de que deseas eliminar el recurso?');

  if (response) {
    const deleteUrl = `http://localhost:3000/posts/${postId}`;
    fetch(deleteUrl, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          alert('Recurso eliminado correctamente');
          actualizarTabla(); 
          console.log('No se pudo eliminar el recurso');
        }
      })
      .catch(error => console.log(error));
  }
}

function actualizarTabla() {
  fetch(url)
    .then(response => response.json())
    .then(data => mostrardata(data))
    .catch(error => console.log(error));
}
