const myForm = document.getElementById("form1");
const nombre = document.getElementById("txtnombre");
const apellido = document.getElementById("txtapellido");
const correo = document.getElementById("txtcorreo");
const id = document.getElementById("txtid");
const foto=document.getElementById("imgfoto");
const btnCreate = document.getElementById("btnguardar");

myForm.addEventListener("submit", e => {
  e.preventDefault();
});

btnCreate.addEventListener("click", async () => {
  console.log("Empieza el proceso");

  const resp = await fetch("http://localhost:3000/posts");
  const posts = await resp.json();

  const postExists = posts.some(post => post.nombre === nombre.value);

  if (postExists || nombre.value === '') {
    alert("El nombre ya existe o no se ha proporcionado un nombre");
  } else {
    const post = {
      id: id.value,
      nombre: nombre.value,
      apellido: apellido.value,
      correo:correo.value,
      foto:foto.value
    };
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
      method: "POST",
      body: JSON.stringify(post),
      headers: myHeaders
    };

    try {
      const resp = await fetch("http://localhost:3000/posts", myInit);

      if (resp.status !== 201) {
        console.log("No se pudo crear el recurso");
        return;
      }

      const data = await resp.json();
      console.log(data);
    } catch (err) {
      console.log("Hubo un error: " + err);
    }
  }

  console.log("Termina el proceso");
});