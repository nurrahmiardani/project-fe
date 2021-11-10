import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export class Products extends Componen {
    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
                <form action="/" method="get">
             <label htmlFor="header-search" className="kotak"> </label>
                <input
                    type="text"
                    id="header-search"
                    className="bar"
                    placeholder="Masukkan Nama Ikan"
                     ></input>
                     
                <button type="submit" ><FontAwesomeIcon icon={faSearch} size="lg" className="search" ></FontAwesomeIcon></button>
            </form>
                 <p className="produk">Produk</p>
                 <div id="product">
               { 
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addCart(product._id)}>Beli</button>
                           </div>
                       </div>
                   ))
               }
            </div>
            </div>
           
        )
    }
}

export default Products
