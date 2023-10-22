import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { Container,Box,Stack} from '@mui/material'
export default function Root() {
    return (
      <Container disableGutters={true} maxWidth="xl"  >
          <Box sx={{display:"flex",position:"relative"}} >
            <Stack sx={{width: "255px",height:"100%",position:"fixed"}}>
            <SideBar />
            </Stack>
           <Stack sx={{ml:"255px",px:"30px",bgcolor:"#F7F8FC",maxWidth: "calc(100% - 255px)"}}>
           <NavBar />
            <Outlet/>
           </Stack>
           
          </Box>
       
      </Container>
    );
  }