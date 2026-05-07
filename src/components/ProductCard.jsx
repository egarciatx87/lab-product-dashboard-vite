import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Button from '@mui/material/Button';

const ProductCard = ({ product, onRemove }) => {
  // This is the logic the computer was looking for!
  const cardStyle = product.inStock ? styles.card : `${styles.card} ${styles.outOfStockClass}`;

  return (
    <div className={cardStyle}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>
        Status: {product.inStock ? "✅ Available" : "❌ Out of Stock"}
      </p>

      {/* This button uses the onRemove function we passed down */}
      <Button 
        variant="contained" 
        color="error" 
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;