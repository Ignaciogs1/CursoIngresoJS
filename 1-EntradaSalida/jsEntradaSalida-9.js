/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoIngresado;
	var aumento;
	var sueldoFinal;

	sueldoIngresado= sueldo.value;
	sueldoIngresado= parseInt(sueldoIngresado);

	aumento=sueldoIngresado*10/100;
	console.log(aumento);

	sueldoFinal=sueldoIngresado+aumento;

	sueldoFinal="El sueldo es de " + sueldoFinal;
	resultado.value= sueldoFinal;
	


	
	
}
