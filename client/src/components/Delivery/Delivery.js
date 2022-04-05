import Box from '@mui/material/Box';
import Address from '../Address';
import Menu from '../Menu';

function Delivery(props) {

  const {
    getProducts,
    street,
    house,
    setStreet,
    setHouse,
    tooltip,
    setTooltip,
    delivery,
    setDelivery
  } = props
 


  async function onClickDelivery(){
    setDelivery(true)
    await getProducts(true)
  }
  async function onClickSelfCall(){
    setDelivery(false)
    await getProducts(false)
  }
  return(
    <Box 
      sx={{
        minHeight: '300px',  
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap'
      }}
    >
      <Address 
        tooltip={tooltip} 
        setTooltip={setTooltip} 
        street={street} 
        house={house} 
        setStreet={setStreet} 
        setHouse={setHouse} 
        delivery={delivery}
      />
      <Menu 
        onClickDelivery={onClickDelivery}
        onClickSelfCall={onClickSelfCall}
      />
    </Box>
  )
}

export default Delivery;