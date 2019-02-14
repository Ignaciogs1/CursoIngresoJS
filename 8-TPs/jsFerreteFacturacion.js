/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var suma;

	numero1=precioUno.value;
	numero1=parseInt(numero1);
	numero2=precioDos.value;
	numero2=parseInt(numero2);
	numero3=precioTres.value;
	numero3=parseInt(numero3);

	suma=numero1+numero2+numero3;
	alert("La suma da "+suma)

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=precioUno.value;
	precio1=parseInt(precio1);
	precio2=precioDos.value;
	precio2=parseInt(precio2);
	precio3=precioTres.value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;
	promedio=suma/3;
	alert("El promedio es de "+promedio);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var precioFinal;

	precio1=precioUno.value;
	precio1=parseInt(precio1);
	precio2=precioDos.value;
	precio2=parseInt(precio2);
	precio3=precioTres.value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;
	precioFinal=suma*21/100;
	alert("El precio final es de "+precioFinal);
}