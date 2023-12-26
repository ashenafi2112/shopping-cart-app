import React, { useState } from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const addToCart = () => {
    if (name && quantity > 0 && price > 0) {
      const newItem = {
        name,
        quantity,
        price,
        totalPrice: quantity * price,
      };
      setItems([...items, newItem]);
      setName('');
      setQuantity(0);
      setPrice(0);
    }
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <div className="add-item-container">
        <h2>Add Item</h2>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
          </label>
          <br />
          <label>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
          </label>
          <br />
          <button type="button" onClick={addToCart}>
            Add to Cart
          </button>
        </form>
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
