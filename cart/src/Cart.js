import React from "react";
import CartItem from "./CartItem";

const Cart =(props)=> {
    const { products } = props;
    return (
      <div className="cart">
        {products.map((products) => {
          return (
            <CartItem
              product={products}
              key={products.id}
              onIncreseQuantity={props.onIncreseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteItems={props.onDeleteItems}
              // we can pass anything as a prop
              // func = {()=>{console.log("Apple")}}
              // isloggedin = {false}
              // jsx = {<h1>Mango</h1>}
            />
          );
        })}
      </div>
    );
      }

export default Cart;
