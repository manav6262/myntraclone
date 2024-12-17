import React from 'react';
import './ProductListing.css';

const ProductListing = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price: 499, image: 'https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/T-Shirts/Mens_T-Shirts/Graphic_T-Shirts/YPB09QWZ8R6D_o.jpg&resizeTo=200' },
    { id: 2, name: 'Jeans', price: 999, image: 'https://img1.exportersindia.com/product_images/bc-small/dir_67/1992532/mens-jeans-1409049.jpg' },
    { id: 3, name: 'Shoes', price: 1999, image: 'https://media.wired.com/photos/5926fe05cefba457b079bca0/1:1/w_200,h_200,c_limit/easyjet-shoes-lead.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
