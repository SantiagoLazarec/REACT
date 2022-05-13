import React from 'react'
import {useState} from 'react'
const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);
    
    const Restar = () => {
      if (count === 1) {
        console.log(`ERROR`)
      } else {
        setCount(count - 1);
      }
    };

    const Sumar =() => {
      if (count >= stock) {
        console.log(`Sin stock`) 
      } else {
        setCount(count + 1)
      }
    };
 
    const agregarCarrito = () => {
      onAdd(count)
    }

    const ItemCount2 = ({manejarClick, stock})

    const [cantidad, setCantidad] = useState(1) 

    function Sumar () {
      cantidad < stock ? setCantidad(cantidad + 1) : setCantidad
    }

    function Sumar () {
      cantidad < 0 ? setCantidad(cantidad - 1) : setCantidad
    }

  return (
   
     <>
      <Link to="" onClick={() => manejarClick(cantidad)} />
    
     <button type="button" className="btn btn-secondary" onClick={Restar}> - </button>
     
     <button type="button" className="btn btn-secondary"> {count} </button>

     <button type="button" className="btn btn-secondary" onClick={Sumar}> + </button>  
    
     <button type="button" className="btn btn-secondary my-1" onClick={agregarCarrito}> Sumar al carrito </button>
     </>
    
  )
}

export default ItemCount