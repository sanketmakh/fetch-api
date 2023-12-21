// ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css"; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://s3.amazonaws.com/open-to-cors/assignment.json") // 
      .then((response) => {
        const productsData = response.data.products; 
        setProducts(Object.values(productsData)); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Title </th>
            <th>Price</th>
            <th>Popularity</th>
            <th>Subcategory</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.popularity}</td>
              <td>{product.subcategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;