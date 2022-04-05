import { Container, Box } from '@mui/material'
import Vk from '../../assets/icons/vk.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'

import './Footer.css'

function Footer() {

  const subsections = [
    { id: 1, name: 'Подраздел' },
    { id: 2, name: 'Подраздел' },
    { id: 3, name: 'Подраздел' },
    { id: 4, name: 'Подраздел' },
    { id: 1, name: 'Подраздел' }
  ]

  return (
      <Box 
        sx={{  
          minHeight: '600px',
          backgroundColor: '#F7F6F5', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap'
        }}
      >
        <Box  
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap'
          }}
        >
        <div className='section'>
          <span className='header'>Раздел 1</span>
          {subsections.map(subsection => {
            return (
              <span className='subsection'>{subsection.name}</span>
            )
          })}
        </div>
        <div className='section'>
          <span className='header'>Раздел 2</span>
          {subsections.map(subsection => {
            return (
              <span className='subsection'>{subsection.name}</span>
            )
          })}
        </div>

        <div className='circle'>

        </div>
        <div className='section'>
          <span className='header'>Раздел 3</span>
          {subsections.map(subsection => {
            return (
              <span className='subsection'>{subsection.name}</span>
            )
          })}
        </div>
        <div className='section'>
          <span className='header'>Раздел 4</span>
          {subsections.map(subsection => {
            return (
              <span className='subsection'>{subsection.name}</span>
            )
          })}
        </div>
         
        </Box>
        <Box 
          sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
            }}
          >
          <div className='socialMedias'>
            <img src={Vk} />
            <img src={Facebook} />
            <img src={Twitter} />
          </div>
        </Box>
      </Box>
  )
}

export default Footer;