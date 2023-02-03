
//BOTÓN 1: MOSTRAR DATOS

document.getElementById('boton1').addEventListener('click', function(){
  document.getElementById("informacion-oculta").innerHTML = "";
  document.getElementById("demo1").innerHTML = "<b>Nombre: </b> Rene Howard";
  document.getElementById("demo2").innerHTML = "<b>Edad: </b> 37 años";
  document.getElementById("demo3").innerHTML = "<b>Dirección: </b> 9469 E Pecan St";
  document.getElementById("demo4").innerHTML = "<b>E-mail: </b> rene.howard@example.com";
  document.getElementById("demo5").innerHTML = "<b>Teléfono: </b> (483) 589-7624";  
})

//BOTÓN 2: OCULTAR DATOS

document.getElementById('boton2').addEventListener('click', function(){
  document.getElementById("informacion-oculta").innerHTML = "Por seguridad los datos del usuario se encuentran ocultos.";
  document.getElementById("demo1").innerHTML = "";
  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  document.getElementById("demo4").innerHTML = "";
  document.getElementById("demo5").innerHTML = "";  
})