import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

import './CategoryBar.js'


function CategoryBar(props) {
  
  const {
    scrollToBurgers,
    scrollToTwisters,
    scrollToChicken
  } = props

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{position: "sticky", top:"0", background: 'white'}}>
      <Tabs 
          TabIndicatorProps={{
            style: { background: '#E4002B' }
          }}
          textColor="inherit"
          value={value} 
          onChange={handleChange}
          
      >
        <Tab onClick={scrollToBurgers} label="Бургеры" sx={{textTransform: 'none', width: '9%'}}/>
        <Tab onClick={scrollToTwisters} label="Твистеры" sx={{textTransform: 'none', width: '9%'}}/>
        <Tab onClick={scrollToChicken} label="Курица" sx={{textTransform: 'none', width: '9%'}} />
        <Tab label="Баскеты" sx={{textTransform: 'none', width: '9%'}}/>
        <Tab label="Снэки" sx={{textTransform: 'none', width: '9%'}} />
        <Tab label="Соусы" sx={{textTransform: 'none', width: '9%'}}/>
        <Tab label="Напитки" sx={{textTransform: 'none', width: '8%'}}/>
        <Tab label="Кофе и чай"sx={{textTransform: 'none', width: '10%'}} />
        <Tab label="Десерты" sx={{textTransform: 'none', width: '9%'}}/>
        <Tab label="Хиты по 50" sx={{textTransform: 'none', width: '10%'}}/>
        <Tab label="Хиты по 51" sx={{textTransform: 'none', width: '10%'}}/>

      </Tabs>
    </Box>
  )
}

export default CategoryBar;