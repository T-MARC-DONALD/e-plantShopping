import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from './CartSlice';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  const calculatedTotal = calculateTotalAmount();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to get started!</p>
          <Link to="/products" className="action-btn continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      
      {/* Cart Summary */}
      <div className="cart-summary">
        <div className="summary-row">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${calculatedTotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (8%):</span>
          <span>${(calculatedTotal * 0.08).toFixed(2)}</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total:</span>
          <span>${(calculatedTotal * 1.08).toFixed(2)}</span>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img 
            src={item.image} 
            alt={item.name} 
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h3 className="cart-item-name">{item.name}</h3>
            <p className="cart-item-price">${item.price.toFixed(2)} each</p>
            <p className="cart-item-total">Item Total: ${(item.quantity * item.price).toFixed(2)}</p>
          </div>
          
          <div className="quantity-controls">
            <button 
              className="quantity-btn"
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button 
              className="quantity-btn"
              onClick={() => handleIncreaseQuantity(item.id)}
            >
              +
            </button>
          </div>
          
          <div className="cart-item-total">
            <p>${(item.quantity * item.price).toFixed(2)}</p>
          </div>
          
          <button 
            className="delete-btn"
            onClick={() => handleRemoveItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Cart Actions */}
      <div className="cart-actions">
        <Link to="/products" className="action-btn continue-shopping-btn">
          Continue Shopping
        </Link>
        <button className="action-btn checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
