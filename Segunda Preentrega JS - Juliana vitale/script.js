 const cursos = [
  { id: 1, nombre: "curso de ingenieria", precio: 1500, meses: 5  },
  { id: 1, nombre: "curso de gestion", precio: 2500, meses: 3  },
  { id: 1, nombre: "curso de gestion de empresas", precio: 3500, meses: 8  },
  { id: 1, nombre: "curso de excel", precio: 1000, meses: 1 },
]

const filtro = prompt ("¿Cuanto meses queres que dure el curso?")
const resultado = cursos.filter((el) => el.meses <= filtro)

var result = resultado.map(function(cursos) {
  return cursos.nombre;
}).join(' , ');

resultado.forEach((num)=> {
  console.log(num)
} )

let msj = "Los cursos disponibles son:"
alert(msj +" " +result)



