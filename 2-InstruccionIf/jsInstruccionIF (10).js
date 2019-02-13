function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var notas;

	numeroRandom=Math.floor((Math.random() * 10) + 1);

	if(notas < 9 && > 10)
	{
		alert("Excelente");
	}

	if(notas > 4)
	{
		alert("Aprobó");
	}

	if(notas < 4)
	{
		alert("Vamos, la próxima se puede");
	}

}//FIN DE LA FUNCIÓN