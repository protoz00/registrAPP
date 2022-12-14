import { Time } from "@angular/common";
import { AlumnoI } from "./model-alumno";
import { SeccionI } from "./seccion";

export interface ClaseI {
    id?:string;
    fecha:any;
    hora:any;
    id_alumno : string;
    id_seccion : string;
    estado : string;
}
