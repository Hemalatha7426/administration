import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../MaterialUI/Mui.css';



const Mui = () => {
  return (
    <div>
      <AppBar variant='h1' sx={{backgroundColor:'green',className:'body'}}>
      <Toolbar>
        <Typography>
            <h1>Hema</h1>
        </Typography>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Mui
