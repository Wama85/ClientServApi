const url = 'http://localhost:3000/posts/';
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

const fullurl = url + postId;

fetch(fullurl)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data) => {
  console.log(data);
  let body = `
    <form id="frm1">
      <label>ID:</label>
      <input type="text" id="txtid" value="${data.id}" readonly  />
      <label>Nombre:</label>
      <input type="text" id="txtnombre" value="${data.nombre}" />
      <label>Apellido:</label>
      <input type="text" id="txtapellido" value="${data.apellido}" />
      <label>Correo:</label>
      <input type="text" id="txtcorreo" value="${data.correo}" />
      <label>Foto:</label>
      
      <select id="imgfoto">
      <option value="delfin.png">Delfin<img src="imagenes/delfin.png" alt="Delfin"></option>
      <option value="buho.png">Buho<img src="imagenes/buho.png" alt="Buho"></option>
      <option value="mapache.png">Mapache<img src="imagenes/mapache.png" alt="Mapache"></option>
      <option value="gasela.png">Gasela<img src="imagenes/gasela.png" alt="Gasela"></option>
      <option value="adulto.png">Adulto<img src="imagenes/mapache.png" alt="Adulto"></option>
      <option value="Mujer.png">Mujer<img src="imagenes/mujer.png" alt="Mujer"></option>
      <option value="niño.png">Niño<img src="imagenes/niño.png" alt="Niño"></option>
      <option value="niña.png">Niña<img src="imagenes/niña.png" alt="Niña"></option>
                    </select>
      <button id="btnguardar">Actualizar</button> 
    </form>
  `;

  document.getElementById('formagregar').innerHTML = body;

  const btnUpdate = document.getElementById("btnguardar");
  btnUpdate.addEventListener("click", async () => {
    console.log("Empieza el proceso de actualización");

    const updatedData = {
      id: document.getElementById("txtid").value,
      nombre: document.getElementById("txtnombre").value,
      apellido: document.getElementById("txtapellido").value,
      correo: document.getElementById("txtcorreo").value,
      foto:document.getElementById("imgfoto").value
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(updatedData)
    };

    try {
      const resp = await fetch(fullurl, myInit);

      if (resp.status !== 200) {
        console.log("No se pudo actualizar el recurso");
        return;
      }

      const responseData = await resp.json();
      console.log(responseData);

      
      alert("El recurso se actualizó correctamente");

      
      
    } catch (err) {
      console.log("Hubo un error: " + err);
    }

    console.log("Termina el proceso de actualización");
    window.close();
  });

  window.onbeforeunload = function() {
    
    return null;
  };
};
