import React,{useState}from "react";
import './product-form.css';

const ProductForm=(props)=>{
    
    const [formInput,setFormInput]=useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productDescription:''
    })
    const productNameHandler=(event)=>{
      
      setFormInput((prevState)=>{
        return{
            ...prevState,
            productName:event.target.value
        }
      })
    }
    const productPriceHandler=(event)=>{
       //setCoursePrice(event.target.value);
       setFormInput({
        ...formInput,
        productPrice:event.target.value
       });
       
    }
    const productImageHandler=(event)=>{
      setFormInput({
        ...formInput,
        productImage:event.target.value
      });
    }
    const productDescriptionHandler=(event)=>{
       //setCourseConductedBy(event.target.value);
       setFormInput({
        ...formInput,
        productDescription:event.target.value
       });
    }
    
    const formSubmitHandler=(event)=>{
        const error=''
        if(formInput.productName=='' && error==''){
           error='Please Enter Product Name';
        }
        props.onProductAdded(formInput);
        event.preventDefault();
    }
    return(
       <div className="form-container">
       <h1>Add New Product</h1>
        <form onSubmit={formSubmitHandler}>
            <div className="form-input">
                <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="product price" onChange={productPriceHandler}/>
            </div>
            <div className="clearfix"></div>
            <div className="form-input">
                <input type="text" placeholder="product Image" onChange={productImageHandler}/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Product Description" onChange={productDescriptionHandler}/>
            </div>
            <div className="clearfix"></div>
            <div className="form-input">
                <button className="btn_add_product">Add Course</button>
            </div>
            <div className="clearfix"></div>
        </form>
       </div>
    )
}

export default ProductForm;