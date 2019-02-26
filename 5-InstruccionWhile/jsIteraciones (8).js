function mostrar()
{

	var numero;
	var numeroS;
	var numeroT;
	var llave;
	var flag = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > 0) {
				numeroS = numeroS + numero;
		}
		else {
			numeroT = numeroT * numero;
			flag = 1;
		}
		llave = prompt("Quiere continuar (s/n)").toLowerCase();
	} while (llave == "s");

document.getElementById('suma').value = numeroS;

if (flag == 0) {
		numeroT = 0;
}
document.getElementById('producto').value = numeroT;

}//FIN DE LA FUNCIÓN