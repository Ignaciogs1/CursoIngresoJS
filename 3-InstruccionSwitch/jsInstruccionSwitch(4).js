function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
console.log(mesDelAño);
//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Tiene 28 días";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 días";
			break;

		default:
			mensaje="Tiene 31 días";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN