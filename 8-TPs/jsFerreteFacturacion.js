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

	numero1=PrecioUno.value;
	numero1=parseInt(numero1);
	numero2=PrecioDos.value;
	numero2=parseInt(numero2);
	numero3=PrecioTres.value;
	numero3=parseInt(numero3);

	suma=numero1+numero2+numero3;
	alert(suma)

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=PrecioUno.value;
	precio1=parseInt(precio1);
	precio2=PrecioDos.value;
	precio2=parseInt(precio2);
	precio3=PrecioTres.value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;
	promedio=suma/3;
	alert(promedio);
}
function PrecioFinal () 
{
	
}