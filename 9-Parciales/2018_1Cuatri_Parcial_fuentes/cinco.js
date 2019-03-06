function mostrar()
{
	var planeta
	var mensaje;
	console.log(planeta);
	planeta = prompt("Ingrese el planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje="Acá hace más calor";
			break;

		case "tierra":
			mensaje="Acá vivimos";
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje="Acá hace más frío";
			break;

		default:
			mensaje="No existe el planeta que ingresaste, o está mal escrito";
			break;
	}

	alert(mensaje);

}
