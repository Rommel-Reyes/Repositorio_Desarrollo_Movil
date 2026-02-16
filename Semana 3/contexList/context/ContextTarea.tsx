//lista tareas
//agregar tareas

import { createContext } from "react";
import { Tarea } from "../modelos/Tarea";

export const ContextTarea= createContext({
    listaTarea: [] as Tarea[],
    agregarTarea: (tarea:Tarea)=>{}
});