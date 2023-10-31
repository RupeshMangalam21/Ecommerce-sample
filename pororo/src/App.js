import React from 'react';
import './App.css';
// import ShopPage from './Pages/ShopPage'; // Import the ShopPage component
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {/* <ShopPage /> */}
      </header>
    </div>
  );
}

export default App;
