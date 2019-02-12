function mostrar()
{
//tomo la edad  

	var laVariable;

	laVariable=edad.value;
	laVariable=parseInt(laVariable);

	if(laVariable<13)
	{
		alert("Eres un/a niño/a");
	}

	if(laVariable>13 && laVariable<17)
	{
		alert("Eres un/a adolescente")
	}

	if(laVariable>18)
	{
		alert("Eres mayor de edad");
	}
}//FIN DE LA FUNCIÓN