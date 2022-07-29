import React, {useState} from 'react'
import productContext from './productContext'
export const ProductState = (props) => {
    const [products,setProduct]=useState([])
  return (
   <productContext.Provider value ={{products,setProduct}}>
   {props.children}
   </productContext.Provider>
  )
}
