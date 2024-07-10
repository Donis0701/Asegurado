export default class ICL_Asegurado{
    leerced(){
       return prompt("Ingrese cédula del asegurado");
    }
    leerestCiv(){
       return prompt("Ingrese estado civil (1.Soltero, 2.Casado, 3.Divorciado, 4.Viudo, 5.Concubino)");
    }
    leermont(){
       return prompt("Ingrese monto a asegurar");
    }

    reporteAsegurado(ced, mP){
        return `
        <br> Cédula del asegurado: ${ced}
        <br> Monto de la póliza:$ ${mP}
        `
    }
}