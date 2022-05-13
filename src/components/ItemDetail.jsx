import React from 'react'
import ItemCount2 from './ItemCount';

const Promesa = ({productos}) => {
  return (
   <> 
   {productos.length > 0 ? (
     productos.map((producto, index) => (
      <>
      <h1 key={index}> {producto.nombre} </h1>
      </>
     ))
   ) : ( <h1> Cargando... </h1>
   )}

      <ItemCount2 manejarClick={quntityToAdd} stock={stock}/>

      </>
  );

};


export default ItemDetail 