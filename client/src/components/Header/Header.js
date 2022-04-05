import { Box, Button } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header(props) {

  const {
    basket,
    fullPrice,
    cleanBasket,
    street,
    house,
    setTooltip,
    delivery
  } = props

  const handleSubmit = async () => {
    if (fullPrice > 0) {
      if (delivery === true) {
        if (street.length > 0 && house.length > 0) {
          console.log('ВАШ ЗАКАЗ:', { basket, fullPrice, street, house })
          await cleanBasket()
          setTooltip(false)
        } else {

          setTooltip(true)

        }
      } else {
        console.log('ВАШ ЗАКАЗ:', { basket, fullPrice})
        await cleanBasket()
      }
    }
    else return alert('Корзина пуста!!!')

  }

  return (
    <Box 
      sx={{
        height: '100px', 
        marginRight: '50px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
      <FormatAlignLeftIcon />
      <Button 
        onClick={handleSubmit} 
        variant="contained" 
        endIcon={<ShoppingBasketIcon />}
        sx={{
          height: '36px', 
          maxWidth: '150px', 
          borderRadius: '18px', 
          background: '#E4002B',
          '&:hover': {
            backgroundColor: '#E4012B',
          },
        }}
      >
        {fullPrice} Р
      </Button>
    </Box>


  )
}

export default Header;