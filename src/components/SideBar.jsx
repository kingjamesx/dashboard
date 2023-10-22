import { Box, ListItem, List, ListItemIcon, ListItemText,Typography } from '@mui/material';
import { Overview, Tickets, Ideas, Contacts, Agents, Subscriptions, Articles, Settings, Logo,WhiteTicket,Overview2} from '../assets/index';
import { NavLink, useLocation,Link } from 'react-router-dom';
import React from 'react';

const sideBarData = [
  { name: "Overview", link: "/", icon: Overview2,icon2:Overview },
  { name: "Tickets", link: "/tickets", icon: Tickets,icon2:WhiteTicket },
  { name: "Ideas", link: "/ideas", icon: Ideas },
  { name: "Contacts", link: "/contacts", icon: Contacts },
  { name: "Agents", link: "/agents", icon: Agents },
  { name: "Articles", link: "/articles", icon: Articles },
  { name: "Settings", link: "/settings", icon: Settings },
  { name: "Subscription", link: "/subscriptions", icon: Subscriptions },
];

const SideBar = () => {
  const location = useLocation();
  const isLinkActive = (link) => location.pathname === link;
  const classes = {
    active: {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
   
  };

  return (
    <Box sx={{ backgroundColor: "#363740", height: "100%" }}>
       <Box mt="42px" mb="52px"  >
        <Link to="/" style={{ display: 'flex', alignItems: 'center',justifyContent:"center",textDecoration:"none" }}>
      <img src={Logo} alt="logo" className="block" style={{ marginRight: '10px' }} />
      <Typography  color="#fff" fontSize="19px" fontWeight="bold">Dashboard Kit</Typography>
      </Link>
    </Box>
      <List>
        {sideBarData.map((data) => (
          <ListItem
            button
            component={NavLink}
            to={data.link}
            activeclassname={classes.active}
            key={data.name}
            sx={{
              borderLeft: isLinkActive(data.link) ? '3px solid #DDE2FF' : 'none',
              color: isLinkActive(data.link) ? '#DDE2FF' : '#A4A6B3',
              backgroundColor: isLinkActive(data.link) ? 'rgba(159, 162, 180, 0.08)' : 'transparent', 
              borderBottom: data.name === "Articles" ? "1px solid rgba(221, 226, 255, 0.06)" : "none", // Apply border for "Articles"
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px !important',}}>
              <img src={isLinkActive(data.link) && data.icon2 ?data.icon2:data.icon} alt={ data.name} className="active-svg " />
            </ListItemIcon>
            <ListItemText primary={data.name} sx={{ maxWidth: '130px !important'}} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
