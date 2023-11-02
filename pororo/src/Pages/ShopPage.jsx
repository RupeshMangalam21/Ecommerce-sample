import React from 'react';
import ProductCard from '../Components/ProductCard';
import '../styles.css';

const products = [
  {
    id: 1,
    title: 'Cream Cheese Fruitcake',
    description: 'Experience the ultimate fusion of flavors with our Cream Cheese Fruitcake. This sumptuous creation combines the richness of cream cheese with an abundance of luscious, candied fruits. ',
    price: 10.99,
    imageUrl: 'Product5.jpg'
  },
  {
    id: 2,
    title: 'Cherry Vanilla Cake',
    description: 'Elevate your taste buds with our Cherry Vanilla Cake. This delectable dessert is a celebration of simplicity and sophistication. The light and airy layers of vanilla cake are beautifully complemented by the vibrant burst of cherry flavor.',
    price: 19.99,
    imageUrl: 'Product2.jpg',
  },
  {
    id: 3,
    title: 'Rich Chocolate Cherry Cake',
    description: 'Indulge in the decadent delight of our Rich Chocolate Cherry Cake. This exquisite dessert combines the deep, velvety richness of premium chocolate with the sweet and tangy allure of succulent cherries.',
    price: 19.99,
    imageUrl: 'Product3.jpg',
  },
  {
    id: 4,
    title: 'Box of 3 Pastries',
    description: 'Choose any three pastries from a collection of original delicacies',
    price: 19.99,
    imageUrl: 'Product4.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description of Product 5',
    price: 19.99,
    imageUrl: 'Product1.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description of Product 6',
    price: 19.99,
    imageUrl: 'Product6.jpg',
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description of Product 7',
    price: 19.99,
    imageUrl: 'Product7.jpg',
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description of Product 8',
    price: 19.99,
    imageUrl: 'Product8.jpg',
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Description of Product 9',
    price: 19.99,
    imageUrl: 'Product9.jpg',
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
