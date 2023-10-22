import { Box,Typography} from '@mui/material'
import {useState} from 'react'

const HomeCard = ({title,value}) => {
  const [fcolor,setFcolor]=useState(false)
  const handleClick=()=>{
      setFcolor(!fcolor)
  }
  return (
    <Box mt="45px" sx={{width:"258px",height:"134px", borderRadius:"8px",backgroundColor:"white",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',cursor:"pointer",color: fcolor ? "#3751FF" : "inherit"}} onClick={handleClick}>
 <Typography>{title}</Typography>
 <Typography sx={{fontSize:"40px",fontWeight:"700px"}}>{value}</Typography>
    </Box>
  )
}

export default HomeCard