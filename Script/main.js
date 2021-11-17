const datos = [];
const $myFormulario = document.getElementById("app");
const $tabla = document.getElementById("table");

console.log(sessionStorage);

const dibujarTabla = function () {
  let nodos = "";

  datos.forEach((dato) => {
nodos += `
<div class="card text-dark bg-light mb-3" style="margin:15px">
  <div class="card-header">Todo Listo</div>
  <div class="card-body"> 
      <h5 class="card-title">Info card title</h5>
      <p class="card-text"> FECHA Y HORA: ${dato.fecha} </p>
      <p class="card-text"> Descripcion: ${dato.descripcion} </p>
  </div>
</div>
`;

  });

  $tabla.innerHTML = nodos;
};

$myFormulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const $miInput1 = document.querySelector('input[name="fecha"]');
  const $miInput2 = document.querySelector('input[name="descripcion"]');

  datos.push({ fecha: $miInput1.value, descripcion: $miInput2.value });

  dibujarTabla();


});