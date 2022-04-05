import { Input, Box, TextField } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './Address.css'

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    maxHeight: '50px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
  },
});

function Address(props) {
  const {
    delivery,
    street,
    house,
    setStreet,
    setHouse,
    tooltip,
  } = props

  if (delivery === true) {
    return (
      <Box>
        <Typography 
          sx={{ 
            fontSize: '64px', 
            fontWeight: 'bold' 
          }}
        >
          Доставка в г. Москва
        </Typography>

        <Box 
          sx={{ 
            width: '100%', 
            display: 'flex', 
            flexWrap: 'wrap' 
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              marginRight: '30px' 
            }}
          >

            <Typography 
              sx={{ 
                marginRight: '8px', 
                fontSize: '30px' 
              }}
            >
              Улица
            </Typography>

            <CustomTooltip 
              open={tooltip} 
              arrow title="Данные поля должны быть заполнены для оформления доставки"
            >
              <TextField 
                value={street} 
                onChange={e => setStreet(e.target.value)} 
                sx={{ width: '210px' }} 
                size='small' 
                variant="outlined" />
            </CustomTooltip>
          </Box>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-around' 
            }}
          >
            <Typography sx={{ marginRight: '8px', fontSize: '30px' }}>Дом</Typography>
            <TextField 
              value={house} 
              onChange={e => setHouse(e.target.value)} 
              sx={{ 
                width: '210px', 
                borderRadius: '10px' 
              }} 
              size='small' 
              variant="outlined" 
            />
          </Box>
        </Box>
      </Box>
    )
  } else {
    return <Box />
  }

}

export default Address;