function mostrar()
{
	var precioInicial;
	var descuento;
	var precioFinal;

	precioInicial=prompt("Ingrese el precio:");
	descuento=prompt("Ingrese el descuento:");
	
	
	precioInicial = parseInt(precioInicial);
	descuento = parseInt(descuento);
	precioFinal = parseInt(precioFinal);

	descuento =  precioInicial * descuento / 100

	precioFinal = precioInicial - descuento
	document.getElementById('elPrecioFinal').value = precioFinal;
}
