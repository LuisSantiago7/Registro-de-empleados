class Employee{
  constructor(legajo, name, apellido, birthday, cargo, photo){
     this.legajo = legajo
     this.name = name
     this.apellido = apellido
     this.birthday = birthday
     this.cargo = cargo
     this.photo = photo
  }
}

//OCULTAR LOGIN
function ocultarLogin(){
  let registro = document.getElementById("register")
  let credencial = document.getElementById("credencial")
  
  credencial.classList.remove('hidden')
  credencial.style.display = 'flex'
  registro.classList.add('hidden')
}

  //Cargar Empleado
function cargarEmpleado(){
   let legajo = document.getElementById("legajoInput")
   let name = document.getElementById("nameEmpleado")
   let apellido = document.getElementById("apellidoEmpleado") 
   let birthday = document.getElementById("fechaNacimiento")
   let cargo = document.getElementById("cargoEmpleado")
   let photo = document.getElementById('PhotoEmploye')
   let textonombre = document.getElementById('nameTexto')
   let textoCargo = document.getElementById('cargoTexto')
   let textoLegajo = document.getElementById('legajoTexto')

   let registro = document.getElementById("register")
   let credencial = document.getElementById("credencial")

    credencial.classList.remove('hidden')
    credencial.style.display = 'flex'  
    registro.classList.add('hidden')
  
    
  let employe = new Employee(legajo, name, apellido, birthday,cargo)

  textonombre.textContent = employe.name.value + " " +employe.apellido.value
  textoCargo.textContent = employe.cargo.value
  textoLegajo.textContent = employe.legajo.value


  if(employe.name.value == "Luis" && employe.apellido.value == "Eleazar"){
    photo.setAttribute('src', "./assets/Luis.jpg")
  }
  else if(employe.name.value == "Arturo" && employe.apellido.value == "Hernandez"){
    photo.setAttribute('src', "./assets/Arturo.jpg")
  }
  else if(employe.name.value == "Salvador" && employe.apellido.value == "Espinoza"){
    photo.setAttribute("src", "./assets/Chava.jpg")
  }
  else if(employe.name.value == "Emmanuel" && employe.apellido.value == "Nateras"){
    photo.setAttribute("src", "./assets/Emma.jpg")
  }
  else if(employe.name.value == "Jimena" && employe.apellido.value == "Lopez"){
    photo.setAttribute("src", "./assets/jimena.jpg")
  }
  else if(employe.name.value == "Maria" && employe.apellido.value == "Santiago"){
    photo.setAttribute("src", "./assets/Maria.jpg")
  }
  else if(employe.name.value == "Perla" && employe.apellido.value == "Gonzalez"){
    photo.setAttribute("src", "./assets/Perla.jpg")
  }
}


