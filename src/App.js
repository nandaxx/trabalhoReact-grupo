import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Rooter } from './Routes/root';
import './App.css'
import { CartItensProvider } from './context/CartItem';
import 'antd/dist/antd.css';
function App() {
  return (
    <CartItensProvider>
      <Rooter />
    </CartItensProvider>
  );
};

export default App;
