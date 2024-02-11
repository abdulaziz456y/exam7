import React, { useState,useEffect, } from 'react';
import { Data } from './data/data'
import "./Productlist.scss"
const ProductList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };


  return (
    <div >
      {/* <li className="nav-itemmm ">
        <a className="nav-link" href="/"> Home</a>
       </li> */}
     <div className='Products-list'>
     {Data.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <img width={250} height={200} src={product.img} alt="" />
          <div className='priceses'>
            <p>${product.price1}</p>
            <p>${product.price2}</p>
            <p>${product.price3}</p>
            <p>${product.price4}</p>
          </div>
          <div className='button-inner'>
            <button className='button-click-more'>More...</button>
            <button className='button-click' onClick={() => addToCart(product)}>Add</button>
          </div>
        </div>
      ))}
      
     </div>
     <div>
        <h4> <span>BASKET</span> <span>{cart.length}</span></h4>
        <ul className='Cart-list'>
          {cart.map((item, index) => (
            
            <li className='counter-product' key={index}>
             ${item.quantity * item.price1}
              <p><img width={100} height={100} src={item.img} alt="product-img"/></p>
              <h2>{item.name}</h2>
              <h2>{item.quantity}</h2>
              <button className='plus' onClick={() => incrementQuantity(index)}>+</button>
              <button className='minus' onClick={() => decrementQuantity(index)}>-</button>
              <button className='remove-button' onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
          
        </ul>
        
      </div>
    </div>
  );
};
export default ProductList;
