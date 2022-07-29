import React, { useState } from 'react';
import './product-form.css';
import axios from "axios";
export const ProductForm = (props) => {

    const [formInput, setFormInput] = useState({
        productName: '',
        productPrice: '',
        productImage: '',

    })

    const productNameHandler = (event) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                productName: event.target.value
            }
        })
    }
    const productPriceHandler = (event) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                productPrice: event.target.value
            }
        })
    }
    const productImageHandler = (event) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                productImage: event.target.value
            }
        })
    }
    //console.log(formInput)
    // console.log(`Product Name: ${formInput.productName} Product Price: ${formInput.productPrice}`)
    const [errorMessage, setErrorMessage] = useState('');
    const formSubmitHandler =async (event) => {
        let valid = 1;
        if (formInput.productName == '' && valid == 1) {
            setErrorMessage('Please enter Product name');
            valid = 0;

        }
        if (formInput.productPrice == '' && valid == 1) {
            setErrorMessage('Please enter Product Price');
            valid = 0;
        }
        if (formInput.productImage == '' && valid == 1) {
            setErrorMessage('Please enter Product Image');
            valid = 0;
        }

        if (valid == 1) {
            props.onProductAdded(formInput);
        }
        await saveproductdata(formInput);
        props.onProductAdded(true)
        console.log(formInput);
        event.preventDefault();
    }
    const saveproductdata = (formData) => {
        const product = {
            productName: formData.productName,
            productPrice: formData.productPrice,
            productImage: formData.productImage
        }
        const message = axios.post("http://localhost:4001/product/add", product, {
            headers: {
                'content-Type': 'application/json'
            }
        })
    }
    return (
        <div className='form-container'>
            <h1 >Add New Product</h1>
            <div className='alert alert-danger' role='alert'>{errorMessage}</div>
            <form onSubmit={formSubmitHandler}>

                <div className='form-input'>
                    <input type="text" placeholder='Product Name' onChange={productNameHandler} />
                </div>
                <div className='form-input'>
                    <input type="text" placeholder='Product Price' onChange={productPriceHandler} />
                </div>
                <div className='clearfix'></div>
                <div className='form-input'>
                    <input type="text" placeholder='Product Image' onChange={productImageHandler} />
                </div>
                <div className='clearfix'></div>
                <div className='form-input'>
                    <button className="btn_add_product">Add Product</button>
                </div>
                <div className='clearfix'></div>
            </form>
        </div>
    )
}

export default ProductForm;