function mostrar()
{
//tomo la edad  
	var laVariable;

	laVariable=edad.value;
	laVariable=parseInt(laVariable);

	if(laVariable>17)
	{
		alert("eres mayor de edad");
	}

	else
	{
		alert("eres menor de edad");
	}
}//FIN DE LA FUNCIÓN