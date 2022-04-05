import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './ProductCard.css'


function ProductCard(props) {
  const {
    name,
    price,
    image,
    hit,
    newProduct,
    removeFromBasket,
    addToBasket,
    id,
  } = props


  
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1)
  }
 
  const decrease = () => {
    if(count > 0){
      setCount(count-1)
    }
  }
 

  const add = (id, name, price) => {
    addToBasket(id, name, price)
    increase()
  }

  const remove = (id, name, price) => {
    removeFromBasket(id, name, price)
    decrease()
  }

  return (
    <Box
      sx={{
        width: '278px',
        height: '340px',
        color: '#9D9D9D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        '&:hover': {
          backgroundColor: '#F7F6F5',
          borderRadius: '8px',
          cursor: 'pointer'
        },
      }}
    >
      {newProduct ? <div className='iconNew'>Новое</div> : null}
      {hit ? <div className='iconHit'>Хит</div> : null}
      <div style={{ height: '60%' }}>

        <img src={'https://rentabackendtest.herokuapp.com/' + image} />


      </div>

      <Typography>{name}</Typography>
      <Typography sx={{ color: '#E4002B' }}>{price} Р</Typography>
      {count === 0 ? <div className='addButton' onClick={() => add(id, name, Number(price))}>+</div> :
        <div className="addRemoveButton">
          <div onClick={() => remove(id, name, Number(price))}>-</div>
          <span>{count}</span>
          <div onClick={() => add(id, name, Number(price))}>+</div>
        </div>

      }
    </Box>
  )
}

export default ProductCard;