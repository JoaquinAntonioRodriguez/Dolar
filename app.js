const cotizacionDolaroficial = 139
const cotizacionDolarblue = 280;
const cotizarDolaroficial = (pesos) => pesos / cotizacionDolaroficial ;
const cotizarPesosoficial = (dolar) => dolar * cotizacionDolaroficial ;
const cotizarDolarblue = (pesos) => pesos / cotizacionDolarblue ;
const cotizarPesosblue = (dolar) => dolar * cotizacionDolarblue ;

let seleccion = prompt("Seleccionar cotización \n 1 - Dolares a Pesos(Oficial)\n 2 - Pesos a dolar (Oficial)\n 3 - Dolares a Pesos(Blue)\n 4 - Pesos a dolar (Blue)");
let valor = prompt("Valor");

switch (seleccion) {
    case "1":
        alert(cotizarPesosoficial(valor));
        break;
    case "2":
        alert(cotizarDolaroficial(valor));
        break;
    case "3":
        alert(cotizarPesosblue(valor));
        break;
    case "4":
        alert(cotizarDolarblue(valor));
        break;
    default:
        break;
}

