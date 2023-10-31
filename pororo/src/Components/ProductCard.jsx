import React from 'react';
import '../styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} className="product-image" />
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
