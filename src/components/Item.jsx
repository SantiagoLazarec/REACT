import React from 'react'


const Item = ({id, nombre, descripcion, imagen}) => {
  return (
   <> 
    <p> {id} </p>
    <img src={imagen} alt="imagen" />
    <h1>{nombre}</h1>
    <p>{descripcion}</p>
   </>
  );

};

export default Item