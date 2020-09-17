var personasRegistradas = [];

function ArmarJson() {
     //Json
     var persona = {};
     persona.nombre = document.getElementById("nombres").value;
     persona.id = document.getElementById("identificaciones").value;
     var e = document.getElementById("sexo");
     persona.sexo = e.options[e.selectedIndex].value;
     persona.edad = document.getElementById("edades").value;
     persona.pulsacion = ObtenerPulsacion(persona.sexo, persona.edad);

     document.getElementById("pulsacion").value = persona.pulsacion;
     
     personasRegistradas=obtenerPuls();
     personasRegistradas.push(persona);
    
     localStorage.setItem('pulsaciones', JSON.stringify(personasRegistradas));
    
     console.log(persona);
     console.log(personasRegistradas);
}

function ObtenerPulsacion(sexo, edad) {
     var pulsacion = 0;
     if (sexo == "M") {

          pulsacion = (210 - edad) / 10;
     }
     else {

          pulsacion = (220 - edad) / 10;
     }
     return pulsacion;
}

function Mostrar() {
     personasRegistradas = obtenerPuls();
     console.log(personasRegistradas);
}
function obtenerPuls() {
     var auxiliar = localStorage.getItem('pulsaciones');
     personasRegistradas = JSON.parse(auxiliar);
     return personasRegistradas;
}

function Consultar() {
var personasRegistradas = []; 
if (localStorage.getItem('pulsaciones') != null) {
personasRegistradas = JSON.parse(localStorage.getItem('pulsaciones'));
}
personasRegistradas.forEach(item => {
document.getElementById("Bpulsacion").innerHTML+=
'<tr>' +
'<td >' + item.id + '</td>' +
  '<td align="center" style="dislay: none;">' + item.nombre+ '</td>' +
  '<td align="center" style="dislay: none;">' + item.sexo+ '</td>' +
  '<td align="center" style="dislay: none;">' + item.edad+ '</td>' +
  '<td align="center" style="dislay: none;">' + item.pulsacion+ '</td>' + '</tr>';
});
}