import React from 'react'
import Header from './Header'
import Seccion from './Seccion'
import logo from '../logo.png'
const data = {
  title:'Esto es mi spa de react',
  url : logo,
  paragraph: 'Libreria de js que me permite trabajar las vistas de mi spa',
  contenido:'Si quiero llegar a realizar single page aplication potentes debo conocer',
}
console.log(data.title)
const datos =['redux', 'react','js'];
const App =()=>(
  <div>
   <Header
   title = {data.title}
   url = {data.url}
   paragraph= {data.paragraph}
   />
   <Seccion
   contenido={data.contenido}
   arrayCursos={datos}/>
  </div>
)
export default App