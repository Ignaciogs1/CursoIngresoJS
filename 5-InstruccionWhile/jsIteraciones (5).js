function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(!(sexo == "m" || sexo == "f"))
	{
		sexo=prompt("Ingrese un sexo válido (f o m)");
	}	

	document.getElementById('Sexo').value="Su sexo es " + sexo;

}//FIN DE LA FUNCIÓN