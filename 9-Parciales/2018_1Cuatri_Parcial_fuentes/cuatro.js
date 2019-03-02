function mostrar()
{
	/*al realizar una compra, si la compra de mas de dos productos
	se realiza un descuento del 10% y si supera los $2000 se agrega
	un descuento adicional de 15%, si el pago es con tarjeta y no efectivo
	al precio final se le agrega un 10% de recargo.*/

	/*var cantidadProductos;
	var descuentoCantidad;
	var sumaPrecios;
	var precioFinalEfectivo;
	var precioFinalTarjeta;
	var descuentoPrecio;
	var metodoPago;
	var recargoTarjeta;

	cantidadProductos= prompt("Ingresar cuantos productos lleva");
	cantidadProductos= parseInt(cantidadProductos);
	precioFinalTarjeta= prompt("Ingresar el precio del producto");
	precioFinalTarjeta= parseInt(precioFinalTarjeta);
	precioFinalEfectivo= parseInt(precioFinalEfectivo);


	if(cantidadProductos>2)
		{
			descuentoCantidad + sumaPrecios *10/100;

			precioFinalEfectivo + sumaPrecios - descuentoCantidad;

			if(sumaPrecios >= 2000)
			{
				descuentoPrecio = precioFinalEfectivo*15/100;
				
				precioFinalEfectivo = precioFinalEfectivo - descuentoPrecio;

				alert("Compró más de dos productos y superó los $2000, ahora, su precio es de "+ descuento2);

			}
		}

		metodoPago = prompt("Igrese el método de pago");

		if(metodoPago = "Tarjeta")
		{
			recargoTarjeta = precioFinalEfectivo*10/100;
			precioFinal = precioFinalEfectivo + recargoTarjeta;
			alert("El importe a pagar es de $" + precioFinalTarjeta);
		}
 		else
 		{

 		}*/


 	var numero1;
	var número2;
	var resultado;

	numero1=prompt("ingrese un numero");
	número2=prompt("ingrese el segundo numero");
	numero1=parseInt(numero1);
	número2=parseInt(número2);

	if(numero1==número2)
	{
		resultado=numero1*número2;
	}else
	{
		if(numero1>número2)
		{
			resultado=numero1- número2;
		}else
		{
			resultado=numero1+número2;
		}
	}
	document.write("resultado es : " + resultado);

}

