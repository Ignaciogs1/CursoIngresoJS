
function mostrar()
{
	var nombre1;
	var nombre2;
	var suma;

	nombre1 = prompt("Ingrese el ancho del rectángulo:");
	nombre1 = parseInt(nombre1);

	nombre2 = prompt("Ingrese el largo del rectángulo");
	nombre2 = parseInt(nombre2);

	suma = (nombre1 * 2) + (nombre2 * 2);

	alert("El perímetro del rectángulo es: " + suma);

}

