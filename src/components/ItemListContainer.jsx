import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
const ItemListContainer = ( {greeting} ) => {
 
  const [productos, setProductos] = useState([])

  const onAdd = (cantidad)=> {
    console.log(`Seleccionaste ${cantidad}`)
  }
 


const data = [
    {
      id:1,
      nombre: "Teclado Dell KB216 QWERTY español color negro",
      descripcion:"Teclado para todo tipo de actividades",
      stock: 10,
      img: "https://http2.mlstatic.com/D_NQ_NP_773961-MLA43014337860_082020-O.webp",
    }, 
    {
      id:2,
      nombre: "Mouse vertical inalámbrico Kolke KEM-248 negro",
      descripcion:"Mouse ergonómico",
      stock: 10,
      img: "https://http2.mlstatic.com/D_NQ_NP_908044-MLA32854226301_112019-O.webp",
    },
    {
      id:3,
      nombre: "Parlante Logitech S150 portátil black",
      descripcion:"Parlante de alta calidad",
      stock: 8,
      img: "https://http2.mlstatic.com/D_NQ_NP_950617-MLA46626658056_072021-O.webp",
    },

]

useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
  
  promesa.then((res) => {
    setProductos(res)
  }).catch((err) => 
  console.log(err)
  ).then(() => 
  console.log (productos)
  )
  

  return () => {
   
  }
}, [])


  return (
   <div className='container'>

     <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      <ItemList productos={productos}/>
   </div>
  )
}

export default ItemListContainer