function Harry (preg, corte){
  var count = 0
  do {
      count++
      console.log("intento numero: " + count)
      var input = prompt(preg)
      console.log(input)
  } while (input != corte && count < 5);
  if(input != corte){
      count = -1
  }
  return count
}
var asd = Harry ("Queremos saber que tan fan de Harry Potter sos. ¿Cómo se llama la rata de Ron?", "Scabbers")
if (asd == 1 || asd == 2){
  alert("Felicitaciones ¡sos super fan!")
}
else if (asd == 3 || asd==4){
  alert("Mmmmm... ¡Hay que leer más!")
}
else if (asd == 5){
  alert("La pegaste en la última, a seguir estudiando!")
}
else if (asd == -1){
  alert("¡Te declaramos un Muggle!")
}