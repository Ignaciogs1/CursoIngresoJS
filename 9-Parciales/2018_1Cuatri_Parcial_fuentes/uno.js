
function mostrar()
{
	var nombre1;
	var nombre2;
	var suma;
	

	nombre1= prompt("Ingresa el ancho del rectángulo");
	nombre1= parseInt(nombre1);
	nombre2= prompt("Ingresa el largo del rectángulo");
	nombre2= parseInt(nombre2);

	suma= nombre1 + nombre2;

	alert("Ustedes son ancho y largo, sus edades son "+nombre1+" y "+nombre2+" , y la suma de sus edades es "+suma);
}
