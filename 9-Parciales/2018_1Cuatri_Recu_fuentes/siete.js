function mostrar()
{
	var nota;
    var sexo;
    var promedio=0;
    var i;
    var menor;
    var notaB;
    var sexoNotaBaja;
    var chicos=0;
    notaB=10;
    
    for(i=0;i<5;i++) {
        	nota = prompt('Ingrese una nota');
        	nota = parseInt(nota)
        
        while(isNaN(nota) == true || nota < 0 || nota > 10) {
            nota = prompt("Reingrese una nota valida");
            nota = parseInt(nota);
        }
        	sexo=prompt("Ingrese el sexo");
        
        while(isNaN(sexo) == false || sexo != "f" && sexo != "m" ) {
            sexo=prompt("Reingrese un sexo valido!");
        }
        //suma de promedios
        promedio += nota;
        //Nota baja
        if(nota < notaB) {
            notaB = nota;
            sexoNotaBaja = sexo;
        }
        //nota mayor a 6, M
        if(sexo == "m" && nota > 6) {
            chicos++;
        }

    }
    //promedio
    promedio = promedio /5;
    alert("Promedio de notas totales " + promedio);
    alert('La nota máss baja ' + notaB + " y su sexo " + sexoNotaBaja);
    alert('La cantidad de varones que su nota fue mayor de 6 son ' + chicos);
}
