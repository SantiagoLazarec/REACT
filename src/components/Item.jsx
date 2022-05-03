import React from 'react'


const Promesa = ({productos}) => {
  return (
   <> 
   {productos.length > 0 ? (
     juegos.map((producto, index) => (
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