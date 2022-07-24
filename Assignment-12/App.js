import { useState } from 'react';
import ProductForm from './components/product-form/ProductForm';
import {Product} from './components/product/Product';


function App() {
  const [products,setProducts]=useState([
    {
      product_name:"Book",
      product_image:"https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612",
      product_price:"500",
      product_desc:"This is a Good Product"
    },
    {
      product_name:"Car",
      product_image:"https://npr.brightspotcdn.com/dims4/default/0f6c110/2147483647/strip/true/crop/1885x1414+0+0/resize/880x660!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F05%2F31%2Fscreen-shot-2022-05-31-at-8.32.41-am-90976307d1d0c1408fd60a67e511f8e832db778c.png",
      product_price:"600000",
      product_desc:"This cars look is beautiful"
    }

  ]);


  const addnewProductHandler=(product)=>{
  
    const productObj={
     product_name:product.productName,
     product_price:product.productPrice,
     product_image:product.productImage,
     product_desc:product.productDescription
 
    }

    setProducts([...products,productObj]);
    console.log(products);
  }

  return (
    <div className="App">
    <ProductForm onProductAdded={addnewProductHandler}/>
      <h1>List Of Products</h1>
       {products.map((ele)=>{
        return <Product key={ele} {...ele}/>
       })}
      {/* <Product p_name={product_arr[0].product_name} p_image={product_arr[0].product_image} p_price={product_arr[0].product_price}/>
      <Product p_name={product_arr[1].product_name} p_image={product_arr[1].product_image} p_price={product_arr[1].product_price}/>
      <Product p_name={product_arr[2].product_name} p_image={product_arr[2].product_image} p_price={product_arr[2].product_price}/> */}
    </div>
  );
}

export default App;
