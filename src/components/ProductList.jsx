import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ items, onRemove }) => { // Catch 'onRemove' here
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((product) => (
        // Pass 'onRemove' down to the card
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
