import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = {
    "Indoor Plants": [
      {
        id: 1,
        name: "Monstera Deliciosa",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 25.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        name: "Pothos",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Peace Lily",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "ZZ Plant",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Rubber Plant",
        price: 38.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "Spider Plant",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "English Ivy",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      }
    ],
    "Succulents": [
      {
        id: 9,
        name: "Aloe Vera",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1509423290716-03f88655d4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 10,
        name: "Echeveria",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 11,
        name: "Jade Plant",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 12,
        name: "Sedum",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 13,
        name: "Haworthia",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 14,
        name: "Cactus Mix",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 15,
        name: "String of Pearls",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 16,
        name: "Burro's Tail",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      }
    ],
    "Tropical Plants": [
      {
        id: 17,
        name: "Bird of Paradise",
        price: 65.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 18,
        name: "Fiddle Leaf Fig",
        price: 55.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 19,
        name: "Palms",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 20,
        name: "Philodendron",
        price: 35.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 21,
        name: "Calathea",
        price: 48.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 22,
        name: "Traveler's Palm",
        price: 75.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 23,
        name: "Banana Plant",
        price: 52.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 24,
        name: "Orchid",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
      }
    ]
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedItems(new Set([...addedItems, product.id]));
  };

  const isItemInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="products-container">
      {Object.entries(products).map(([category, categoryProducts]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {categoryProducts.map((product) => {
              const inCart = isItemInCart(product.id);
              const added = addedItems.has(product.id);
              
              return (
                <div key={product.id} className="product-card">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                      disabled={inCart || added}
                    >
                      {inCart || added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
