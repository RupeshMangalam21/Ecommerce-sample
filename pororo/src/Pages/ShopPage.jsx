import React from 'react';
import ProductCard from '../Components/ProductCard';
import '../styles.css';
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of Product 1',
    price: 10.99,
    imageUrl: 'Product1.jpg'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of Product 2',
    price: 19.99,
    imageUrl: 'product2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description of Product 3',
    price: 19.99,
    imageUrl: 'product3.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description of Product 4',
    price: 19.99,
    imageUrl: 'product4.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description of Product 5',
    price: 19.99,
    imageUrl: 'product5.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description of Product 6',
    price: 19.99,
    imageUrl: 'product6.jpg',
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description of Product 7',
    price: 19.99,
    imageUrl: 'product7.jpg',
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description of Product 8',
    price: 19.99,
    imageUrl: 'product8.jpg',
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Description of Product 9',
    price: 19.99,
    imageUrl: 'product9.jpg',
  },
  // Add more products as needed
];

const ShopPage = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 space-x-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
