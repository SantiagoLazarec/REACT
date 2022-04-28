import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ( {greeting} ) => {
 
  const onAdd = (cantidad)=> {
    console.log(`Seleccionaste ${cantidad}`)
  }
 
  return (
   <div className='container'>

     <ItemCount stock={10} initial={1} onAdd={onAdd}/>
   </div>
  )
}

export default ItemListContainer