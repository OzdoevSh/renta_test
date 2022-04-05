import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import CategoryBar from '../CategoryBar';
import ProductCard from '../ProductCard';

import './ProductList.css'

function ProductList(props) {

  const {
    products,
    getProducts,
  } = props

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const burgersRef = useRef(null)
  const twistersRef = useRef(null)
  const chickenRef = useRef(null)
  const scrollToBurgers = () => scrollToRef(burgersRef)
  const scrollToTwisters = () => scrollToRef(twistersRef)
  const scrollToChicken = () => scrollToRef(chickenRef)




  useEffect(() => {
    getProducts(true)
  }, [])
  return (
    <Box>
      <CategoryBar
        scrollToBurgers={scrollToBurgers}
        scrollToTwisters={scrollToTwisters}
        scrollToChicken={scrollToChicken}
      />
      <Box ref={burgersRef} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        <Typography sx={{ fontSize: '32px' }}>Бургеры</Typography>
        <div className='list'>
          {products.burgers?.map(burger => {
            return (
              <ProductCard
                key={burger.id}
                name={burger.name}
                price={burger.price}
                image={burger.img}
                newProduct={burger.new}
                hit={burger.hit}
                id={burger.id}
              />
            )
          })}
        </div>

      </Box>

      <Box ref={twistersRef} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        <Typography sx={{ fontSize: '32px' }}>Твистеры</Typography>
        <div className='list'>
          {products.twisters?.map(twister => {
            return (
              <ProductCard
                key={twister.id}
                name={twister.name}
                price={twister.price}
                image={twister.img}
                newProduct={twister.new}
                hit={twister.hit}
                id={twister.id}

              />
            )
          })}
        </div>

      </Box>

      <Box ref={chickenRef} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        <Typography sx={{ fontSize: '32px' }}>Курица</Typography>
        <div className='list'>
          {products.chicken?.map(chick => {
            return (
              <ProductCard
                key={chick.id}
                name={chick.name}
                price={chick.price}
                image={chick.img}
                newProduct={chick.new}
                hit={chick.hit}
                id={chick.id}

              />
            )
          })}
        </div>

      </Box>


    </Box>
  )
}

export default ProductList;