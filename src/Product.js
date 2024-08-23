import React from 'react'
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}) {
    const [{ basket },dispatch]=useStateValue();
    const addToBasket = () =>{
        dispatch({ type:'ADD_TO_BASKET',item:{id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
            }})
    }
    return (
        <div className="Product">
            <div className="Product__info">
            <p>{title}</p>
            <p className="Product__price"><small>$</small><strong>{price}</strong></p>
            <div className="Product__rating">{
                Array(rating)
                .fill()
                .map(()=>(
                <p>⭐</p>
                ))
            }</div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
