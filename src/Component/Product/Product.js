import React, { Component } from 'react';
import axios from 'axios';
import './Product.css'
export default function Product({ product, index }) {
    return (
        <div className='product-box'>
            <div className='item-box'>
                <section className='product-image'>
                    <img src={product.image} />
                </section>
                <div className='item-desc'>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <div className='button-display'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}