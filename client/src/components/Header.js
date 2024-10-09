import React ,{useState} from 'react'
import {AppBar,Toolbar,Tabs,Tab, Typography} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: "#333",height: '52px'}}position='sticky'>
        <Toolbar>
          <HomeOutlinedIcon/>
          <Typography variant='h5'>HOME</Typography>
          <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to='/Login' label='Login'/>
          <Tab LinkComponent={NavLink} to='/Register' label='Register'/>
          <Tab LinkComponent={NavLink} to='/Contact' label='About'/>


        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header