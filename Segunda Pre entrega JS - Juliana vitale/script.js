const cursos = [
  { id: 1, nombre: "curso de ingenieria", precio: 1500, meses: 5 },
  { id: 2, nombre: "curso de gestión", precio: 2500, meses: 3  },
  { id: 3, nombre: "curso de gestión de empresas", precio: 3500, meses: 8  },
  { id: 4, nombre: "curso de excel", precio: 1000, meses: 1 },
]

 const carrito = []

function procesarCursos (arr) {
  let msj = arr.map(function(curso) {
    return `Curso ${curso.id}, Nombre: ${curso.nombre}, Precio: ${curso.precio}, Meses ${curso.meses}`;
  }).join('\n');

  alert(msj)
}

function listarCursos() {
   let msj = cursos.map(function(curso) {
    return `Curso ${curso.id}, Nombre: ${curso.nombre}, Precio: ${curso.precio}, Meses ${curso.meses}`;
  }).join('\n');

  alert(msj)
}

function buscarCursos() {
  let filtro = prompt ("¿Que curso estas buscando?")
  const resultado = cursos.filter((el) => el.nombre.toLowerCase().includes(filtro.toLowerCase()))
  procesarCursos(resultado)
}

function filtrarCursos() {
  let filtro = parseInt(prompt ("¿Cuanto meses queres que dure el curso?" ))
  const resultado = cursos.filter((el) => el.meses <= filtro)
  procesarCursos(resultado)
}
let msj = "Los cursos agregados al carrito son:"

function añadirCursos() {
 let añadir = parseInt(prompt(`¿Que curso queres comprar? Escribir el ID del curso
 ID 1, curso de Ingeniería
 ID 2 Curso de gestión
 ID 3 Curso de gestión de empresas
 ID 4 Curso de excel`))
  const resultadoBuscar = cursos.find((el) => el.id == añadir)
  if (resultadoBuscar) {
    const total = carrito.push(resultadoBuscar);
    console.log(carrito);
    alert("El" + " " + resultadoBuscar.nombre  + " " + "se agrego correctamente")
   }
  else {
    alert("Ese curso no existe")
  }}

function comprarCarrito () {
  const total = carrito.reduce((acc, el) => acc + el.precio, 0)

  alert("El total es:" + " " + "$"+total.toString()  + " " +  "a continuacion sera reenviado a las pasarelas de pago")

}


do {
comand = prompt (`Comandos:
a) listar cursos
b) buscar curso
c) filtrar por duracion
d) añadir curso al carrito (id)
e) comprar
exit) salir`)
  switch (comand) {
    case "a":
      listarCursos()
      break;
    case "b":
      buscarCursos()
      break;
    case "c":
      filtrarCursos()
      break;
    case "d":
      añadirCursos()
      break;
    case "e":
      comprarCarrito()
      break;

    default:
      break;
  }
} while (comand != "exit");
