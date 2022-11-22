import { CursoI } from "./curso";
import { AlumnoI } from "./model-alumno";
import { ProfesorI } from "./profesor";

export interface SeccionI {
    id?:string;
    //el nombre deberia ser automatico
    nombre:string;
    // se toman los datos de otras tablas
    id_curso: CursoI["id"];
    id_alumno: AlumnoI["id"];
    id_profesor: ProfesorI["id"];

}
