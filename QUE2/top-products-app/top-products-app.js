import React, { useState, useEffect } from 'react';
import axios from 'axios';
function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = [
          {
            "productName": "Laptop 1",
            "price": 2236,
            "rating": 4.7,
            "discount": 63,
            "availability": "yes"
          },
          {
            "productName": "Laptop 13",
            "price": 1244,
            "rating": 4.5,
            "discount": 45,
            "availability": "out-of-stock"
          },
          {
            "productName": "Laptop 3",
            "price": 9102,
            "rating": 4.44,
            "discount": 98,
            "availability": "out-of-stock"
          },
          {
            "productName": "Laptop 11",
            "price": 2652,
            "rating": 4.12,
            "discount": 70,
            "availability": "yes"
          },
          {
            "productName": "Laptop 4",
            "price": 1258,
            "rating": 3.8,
            "discount": 33,
            "availability": "yes"
          },
          {
            "productName": "Laptop 2",
            "price": 9254,
            "rating": 3,
            "discount": 56,
            "availability": "yes"
          },
          {
            "productName": "Laptop 10",
            "price": 1059,
            "rating": 2.77,
            "discount": 21,
            "availability": "yes"
          },
          {
            "productName": "Laptop 10",
            "price": 7145,
            "rating": 2.74,
            "discount": 15,
            "availability": "yes"
          },
          {
            "productName": "Laptop 10",
            "price": 4101,
            "rating": 2.67,
            "discount": 37,
            "availability": "out-of-stock"
          }
        ];
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
