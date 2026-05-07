import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  // 1. Put your products inside 'useState' so they can be removed
  const [productList, setProductList] = useState([
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 150, inStock: false },
    { id: 3, name: "Tablet", price: 150, inStock: true },
  ]);

  // 2. This function "filters out" the product you want to delete
  const removeProduct = (id) => {
    const updatedList = productList.filter(p => p.id !== id);
    setProductList(updatedList);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* 3. Send BOTH the list and the remove function to ProductList */}
      <ProductList items={productList} onRemove={removeProduct} />
    </div>
  );
};

export default App;
