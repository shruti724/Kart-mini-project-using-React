import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import CartItem from './CartItem';
import * as firebase from 'firebase';
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing()
  }

  componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);
    })
  }


  handelIncreaseQuantity = (product) => {
    console.log("Increse the quantity.", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      // we can use short hand as key and variable has same variable name
      // products:products
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Decrease the qty", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };
  headleDeleteItems = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = ()=>{
    const {products} = this.state
    let count = 0
    products.forEach((product)=>{
      count += product.qty
    })
    return count
  }
  getCartTotal = ()=>{
    const {products} = this.state
    let cartTotal = 0

    products.map(product =>{
      if(product.qty>0){
        cartTotal = cartTotal+ product.qty * product.price;
      }
      return ''
    })
    return cartTotal;
  }
  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <h1>Cart</h1>
        <Cart
          products = {products}
          onIncreseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItems={this.headleDeleteItems}
        />
        <div style={{padding: 20, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
