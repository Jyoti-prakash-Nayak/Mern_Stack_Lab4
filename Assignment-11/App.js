import {Product} from './components/Product'

function App() {
  const product_arr=[
    {
      product_name:"Book",
      product_image:"https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612",
      product_price:"500"
    },
    {
      product_name:"Shoose",
      product_image:"https://cdn4.mydukaan.io/app/image/700x700/?url=https://mydukaan-prod-new.s3.amazonaws.com/177234/2606c6d3-d823-442a-926a-c97e1e36de1e.png",
      product_price:"1000"
    },
    {
      product_name:"Car",
      product_image:"https://npr.brightspotcdn.com/dims4/default/0f6c110/2147483647/strip/true/crop/1885x1414+0+0/resize/880x660!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F05%2F31%2Fscreen-shot-2022-05-31-at-8.32.41-am-90976307d1d0c1408fd60a67e511f8e832db778c.png",
      product_price:"600000"
    }
  ]
  return (
    <div className="App">
      <h1>List Of Products</h1>
       {product_arr.map((ele)=>{
        return <Product key={ele} {...ele}/>
       })}
      {/* <Product p_name={product_arr[0].product_name} p_image={product_arr[0].product_image} p_price={product_arr[0].product_price}/>
      <Product p_name={product_arr[1].product_name} p_image={product_arr[1].product_image} p_price={product_arr[1].product_price}/>
      <Product p_name={product_arr[2].product_name} p_image={product_arr[2].product_image} p_price={product_arr[2].product_price}/> */}
    </div>
  );
}

export default App;
