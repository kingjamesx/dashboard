import { Box,Typography,Stack} from '@mui/material'
import React from 'react'
import {Search,Bell,User} from '../assets/index'

const NavBar = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",p:"10px",mt:"30px"}}>
        <Typography fontSize="24px" fontWeight="700">Overview</Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" >
            <Stack mr="64px" direction="row" alignItems="center" gap="24px">
            <img src={Search} alt="search" className='block' />

<img src={Bell} alt="bell" className='block' />
            </Stack>
        <Box sx={{height:"32px",border:"1px solid #DFE0EB",mr:"32px"}}></Box>
        <Stack direction="row" alignItems="center" justifyContent="center" gap="14px">
            <Typography sx={{fontSize:"14px",fontWeight:"600"}}>Jones Ferdinand</Typography>
            <Box style={{border: "4px solid #DFE0EB", borderRadius: "50%", overflow: "hidden", width: "44px", height: "44px"}}>
            <img src={User} alt="user" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}  />

            </Box>
        </Stack>
      
        </Stack>
    </Box>
  )
}

export default NavBar