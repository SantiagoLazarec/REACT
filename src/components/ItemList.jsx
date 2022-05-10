import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <>
        {
            productos.length > 0 ? productos.map (producto => 
            (<Item
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              imagen={producto.img}
            
            />
            )) : <h4> Cargando... </h4>
            }
    </>
  )
}

export default ItemList