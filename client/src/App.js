import Header from './components/Header';
import ProductList from './components/ProductList';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [street, setStreet] = useState('')
  const [house, setHouse] = useState('')
  const [tooltip, setTooltip] = useState(false)
  const [delivery, setDelivery] = useState(true)

  return (
      <Container>
        <Header delivery={delivery} setTooltip={setTooltip} street={street} house={house} setStreet={setStreet} setHouse={setHouse}/>
        <Delivery delivery={delivery} setDelivery={setDelivery} tooltip={tooltip} setTooltip={setTooltip}  street={street} house={house} setStreet={setStreet} setHouse={setHouse}/>
        <ProductList  />
        <Footer />
      </Container>
  );
}

export default App;
