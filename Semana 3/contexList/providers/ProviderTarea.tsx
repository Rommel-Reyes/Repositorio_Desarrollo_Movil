import React, { useContext, useEffect, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Tarea } from '../modelos/Tarea'
import { Alert } from 'react-native';
import { ContextTarea } from '../context/ContextTarea';


//props nReactNode
//implementos
//exportamos

export default function ProviderTarea({children}:Plantilla) {

  const [listaTarea, setListaTarea]=useState<Tarea[]>([]);

  function agregarTarea(tarea:Tarea){
    setListaTarea([...listaTarea,tarea])
    Alert.alert('Tarea Agregada')

  }

  useEffect(()=>{
        console.log('Listado de tareas', listaTarea)
  },[listaTarea])



  return (
    <ContextTarea.Provider value={{listaTarea,agregarTarea}}>
            {children}
    </ContextTarea.Provider>
  )
}

export function usetarea(){
    return useContext(ContextTarea)
}