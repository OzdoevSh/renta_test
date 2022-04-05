import Container from '@mui/material/Container';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";
import { useState } from 'react'
import { Box } from '@mui/material';

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#E4002B',
  }
});


function Menu(props) {

  const {
    onClickDelivery,
    onClickSelfCall
  } = props

  const [alignment, setAlignment] = useState('left');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
          <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton onClick={onClickDelivery} value="left" sx={{ width: '145px', textTransform: 'none', borderRadius: '4px' }}>
        Доставка
      </ToggleButton>
      <ToggleButton onClick={onClickSelfCall} value="right" sx={{ width: '145px', textTransform: 'none', borderRadius: '4px' }}>
        Самовызов
      </ToggleButton>
    </ToggleButtonGroup>
    </Box>


  )

}

export default Menu