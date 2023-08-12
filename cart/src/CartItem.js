import React from 'react';

const CartItem = (props)=> {
   
      
        const {price, title, qty} = props.product;
        const {
          product,
          onIncreseQuantity,
          onDecreaseQuantity,
          onDeleteItems,
        } = props;
        return (
          <div className="cart-item">
            {/* for props in jsx we use this.props.jsx */}
            {/* {this.props.jsx} */}
            {/* Below one do not work as it is boolean */}
            {/* {this.props.isloggedin} */}
            <div className="left-block">
              <img style={styles.image} src={product.img} alt=''/>
            </div>
            <div className="right-block">
              <div style={{ fontSize: 25 }}>{title}</div>
              <div style={{ colo: "#777" }}>Rs.{price}</div>
              <div style={{ color: "#777" }}>Qty: {qty}</div>
              <div className="cart-item-actions">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7561/7561731.png"
                  alt="increase"
                  className="action-icons"
                  onClick={() => onIncreseQuantity(product)}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9068/9068779.png"
                  alt="decrease"
                  className="action-icons"
                  onClick={() => onDecreaseQuantity(product)}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                  alt="delete"
                  className="action-icons"
                  onClick={() => onDeleteItems(product.id)}
                />
              </div>
            </div>
          </div>
        );
        
    }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc"
  },
};



export default CartItem;
