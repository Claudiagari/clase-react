import React from 'react'
import Lista from './lista'

const Seccion =({contenido,arrayCursos})=>(
  <section>
      <p>{contenido}</p>
     <Lista cursos = {arrayCursos} />
    </section>
)
  
export default Seccion