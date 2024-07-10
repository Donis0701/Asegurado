//**Un asegurado contrata una póliza de Seguro de Vida.los datos del asegurado son:                                      cédula,estado civil(1.Soltero, 2.Casado, 3.Divorciado, 4.Viudo, 5.Concubino) y monto a asegurar.                          Se sabe que el monto de la póliza es un porcentaje sobre el monto a asegurar, que depende del                            estado civil y está sujeto a los porcentajes de la siguiente tabla:soltero(7%), casado(9%), divorciado(5%)                viudo(4%), concubino(8%)*/

import CL_Asegurado from "./CL_Asegurado.js";
import ICL_Asegurado from "./ICL_Asegurado.js";

let IAseg = new ICL_Asegurado(),
c = IAseg.leerced(),
e = IAseg.leerestCiv(),
m = IAseg.leermont(),
 Aseg = new CL_Asegurado(c, e, m),

salida = document.getElementById("salida");
salida.innerHTML = IAseg.reporteAsegurado(Aseg.ced, Aseg.montoDePoliza());