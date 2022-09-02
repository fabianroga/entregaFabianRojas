
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item';
import data from "./data.json";

const informacion = data;
export default function Listado(props){

  return (
    <div className='container'>
     {
      informacion.map( data => {

          return(     
            <Item   
            key={data.id}
             nombre = {data.producto.nombre} 
             descri={data.producto.descripcion}
             stocks={data.stock}  
             counter2 = {props.counter}> 
             </Item>
          )
       })
     }
         
    
    </div>
  )
}
