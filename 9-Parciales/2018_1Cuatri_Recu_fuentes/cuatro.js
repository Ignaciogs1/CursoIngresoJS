function mostrar()
{
	/* siempre 4 importes, siempre mostrar el importe mayor
	luego decir el total, si supera 100 pesos, hacer descuento de 10%
	si supera los 50 pesos, el descuento es del 5%. Si es menos de 50 pesos
	hay que sumar un 15%.
	*/

	/*var importe1;
	var importe2;
	var importe3;
	var importe4;
	var importeTotal;
	var descuento1;
	var descuento5;
	var aumento1;
	var total1;
	var suma;
	var mensaje;

	importe1=prompt("Ingrese su primer importe");
	importe1=parseInt(importe1);
	importe2=prompt("Ingrese su segundo importe");
	importe2=parseInt(importe2);
	importe3=prompt("Ingrese su tercer importe");
	importe3=parseInt(importe3);
	importe4=prompt("Ingrese su cuarto importe");
	importe4=parseInt(importe4);

	importeTotal=importe1+importe2+importe3+importe4;

	if(importe1>importe2 && importe1>importe3 && importe1>importe4)
	{
		mensaje="El primer importe es el mayor";
	}
	if(importe2>importe1 && importe2>importe3 && importe2>importe4)
	{
		mensaje="El segundo importe es el mayor";
	}
	if(importe3>importe1 && importe3>importe2 && importe3>importe4)
	{
		mensaje="El tercer importe es el mayor";
	}
	if(importe4>importe1 && importe4>importe2 && importe4>importe3)
	{
		mensaje="El cuarto importe es el mayor";
	}

	alert(mensaje);

	if(importeTotal>100)
	{
		descuento1=importeTotal*10/100;
		total1=importeTotal - descuento1;
		mensaje="El total, con un descuento del 10%, es de "+total1;
	}else
	{
		descuento5=importeTotal*5/100;
		total1=importeTotal - descuento5;
		mensaje="El total, con un descuento del 5%, es de "+total1;
	}
	if(importeTotal<50)
	{
		aumento1=importeTotal*15/100;
		total1=importeTotal + aumento1;
		mensaje="El total, con un aumento del 15%, es de "+total1;
	}
	else
	{
		
	}

	alert(mensaje);*/

	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var mayorImporte;
	var suma;
	var descuento;
	var recargo;
	var precioFinal;

	importe1=prompt ("Ingrese el primpe Importe");
	importe2=prompt ("Ingrese el segundo Importe");
	importe3=prompt ("Ingrese el tercer Importe");
	importe4=prompt ("Ingrese el cuarto Importe");

	importe1= parseInt (importe1);
	importe2= parseInt (importe2);
	importe3= parseInt (importe3);
	importe4= parseInt (importe4);

	if(importe1>importe2 && importe1>importe3 && importe1>importe4)
	{
		mayorImporte=importe1;
	}
	else
	{
		if(importe2>importe3 && importe2>importe4)
		{
			mayorImporte=importe2;
		}
		else
		{
			if(importe3>importe4)
			{
				mayorImporte=importe3;
			}
			else
			{
				mayorImporte=importe4;
			}//if(importe3>importe4)
		}//if(importe2>importe3 && importe2>importe4)
	}//if(importe1>importe2 && importe1>importe3 && importe1>importe4)

	suma=importe1+importe2+importe3+importe4;

	if(suma>100)
	{
		descuento=10;
	}
	else
	{
		if(suma>50)
		{
			descuento=5;
		}
		else
		{
			recargo=suma*15/100
			suma=suma+recargo
			descuento=0;
		}//if(suma>49)
	}//if(suma>100)

	precioFinal= suma*descuento/100;
	precioFinal= suma-descuento;

	alert("El importe de mayor valor es de: $" + mayorImporte + " y el precio final de todo es " + precioFinal);

}
