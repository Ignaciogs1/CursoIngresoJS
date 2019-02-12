function mostrar()
{
//tomo la edad  
	var laVariable;

	laVariable=edad.value;
	laVariable=parseInt(laVariable);

	if(laVariable<13 || laVariable>17)
	{
		alert("no eres adolescente");
	}

}//FIN DE LA FUNCIÓN