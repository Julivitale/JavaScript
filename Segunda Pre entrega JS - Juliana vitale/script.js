const cursos = [
  { id: 1, nombre: "curso de ingenieria", precio: 1500, meses: 5 },
  { id: 2, nombre: "curso de gestion", precio: 2500, meses: 3  },
  { id: 3, nombre: "curso de gestion de empresas", precio: 3500, meses: 8  },
  { id: 4, nombre: "curso de excel", precio: 1000, meses: 1 },
]

 const carrito = []

// const filtro = prompt ("¿Cuanto meses queres que dure el curso?")
// const resultado = cursos.filter((el) => el.nombre.toLowerCase().includes(filtro.toLowerCase()))

// var result = resultado.map(function(curso) {
//   return curso.nombre;
// }).join(' , ');

// resultado.forEach((num)=> {
  // console.log(num)
// } )

// let msj = "Los cursos disponibles son:"
// alert(msj +" " +result)

function procesarCursos (arr) {
  var msj = arr.map(function(curso) {
    return `Curso ${curso.id}, Nombre: ${curso.nombre}, Precio: ${curso.precio}, Meses ${curso.meses}`;
  }).join('\n');

  alert(msj)
}

function listarCursos() {
  var msj = cursos.map(function(curso) {
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
  let filtro = parseInt(prompt ("¿Cuanto meses queres que dure el curso?"))
  const resultado = cursos.filter((el) => el.meses <= filtro)
  procesarCursos(resultado)
}
let msj = "Los cursos agregados al carrito son:"

function añadirCursos() {
 let añadir = parseInt(prompt("¿Que curso queres comprar? Pasame el ID del curso"))
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



let comand = prompt (`Comandos:
a) listar cursos
b) buscar curso
c) filtrar por duracion
d) añadir curso al carrito (id)
e) comprar
exit) salir`)

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
