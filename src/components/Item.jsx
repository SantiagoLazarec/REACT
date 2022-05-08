import React from 'react'


const Item = ({productos}) => {
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
   </>
  );

};

export default Item