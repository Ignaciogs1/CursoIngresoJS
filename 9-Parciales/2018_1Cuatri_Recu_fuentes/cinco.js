function mostrar()
{
	/*
	var diasSemana;
	var mensaje;
	console.log(diasSemana);
	diasSemana=prompt("Ingrese día de la semana");

	switch(diasSemana)
	{
		case "domingo":
		case "sabado":
			mensaje="buen finde";
			break;

		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar";
			break;

		default:
			mensaje="No es un día válido";
			break;
	}

	alert(mensaje);
	*/

	/*switch
	cada habitacion de un hotel tiene un precio, hay promociones según
	el tipo de pago. Si es con tarjeta visa un 10%, si es por paypal un 15%,
	por mercado pago un 10%, efectivo 20%, cualquier otro medio un 5%.
	Si compraste el paquete "todo incluido" y pagas con paypal, se te suma
	un 10% al descuento. Si pagas en efectivo, tenes varias opciones, el
	paquete "solo desayunos" te suma un 10% el descuento, si el paquete es
	"todo incluido" te suma un 15% y para el resto de los paquete no tiene
	descuento adicional.*/

	var precioHab;
	var metodoPago;
	var descuento;
	var precioFinal;
	var paquete;

	paquete=prompt("Ingrese el tipo de paquete que desea comprar", "Por ejemplo: todoIncluido o soloDesayuno");
	precioHab=prompt("Ingrese el precio de la habitación");
	metodoPago=prompt("Elija el medio de pago: tarjeta visa, efectivo, paypal o mercado pago");

	precioHab=parseInt(precioHab);

	switch(metodoPago)
	{
		case "tarjeta visa":
		case "mercado pago":
			descuento=10;
			break;

		case "paypal":
			switch(paquete)
			{
				case "todoIncluido":
					descuento=25;
					break;

				default:
					descuento=15;
					break;
			}
			break;

		case "efectivo":
			switch(paquete)
			{
				case "todoIncluido":
					descuento=35;
					break;

				case "soloDesayuno":
					descuento=30;
					break;

				default:
					descuento=20;
					break;
			}
			break;

		default:
			descuento=5;
			break;
	}


	precioFinal=precioHab*descuento/100;
	precioFinal=precioHab - descuento;

	alert("Precio final de la compra: $" +precioFinal);

}
