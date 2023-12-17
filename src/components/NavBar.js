import styled from '@emotion/styled';
import { Biotech, Business, Category, Dashboard, Home, LiveTv, MenuRounded, RamenDining, Science, SportsCricket } from '@mui/icons-material';
import { AppBar, Box, Divider, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
const NavBar = (props)=> {

  const Item=styled(Link)(({theme})=>
  (
    {
      textDecoration:'none',
      fontSize:"1.2rem",
      color:'white',
      padding:'6px',
      transition:'0.4s',
      borderRadius:"5px",
       "&:hover": {
             backgroundColor:"white",
         borderRadius:"5px",
         color:'#0d6efd',
         cursor: "pointer",
        //  fontWeight:'bold'
         },
  }
  ));

  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const ItemEls1=(
    <>
    <Box sx={{display:'flex', alignItems:'center'}}><Home sx={{color:'white'}}/><Item to='/' aria-current="page">Home</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Business sx={{color:'white'}}/><Item to='/business'>Business</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><RamenDining sx={{color:'white'}}/><Item to='/food'>Food</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Dashboard sx={{color:'white'}}/><Item to='/'>General</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Science sx={{color:'white'}}/><Item to='/science'>Science</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><LiveTv sx={{color:'white'}}/><Item to='/entertainment'>Entertainment</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Biotech sx={{color:'white'}}/><Item to='/tech'>Technology</Item></Box>
    <Box ml={1} sx={{display:'flex', alignItems:'center'}}><SportsCricket sx={{color:'white'}}/><Item to='/sport'>Sports</Item></Box>
    </>
  )
  const ItemEls=(
  <>
    <Item to='/' aria-current="page">Home</Item>
    <Item to='/business'>Business</Item>
    <Item to='/food'>Food</Item>
    <Item to='/'>General</Item>
    <Item to='/science'>Science</Item>
    <Item to='/entertainment'>Entertainment</Item>
    <Item to='/tech'>Technology</Item>
    <Item to='/sport'>Sports</Item>
  </>
  )
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left',backgroundColor:"#0d6efd", height:"100vh"}}> 
    <Box m={1} sx={{display:'flex', alignItems:'center'}}><Category sx={{color:'white',marginRight:'4px'}}/><Typography variant='h5' color="white" >Categories</Typography></Box>
    <Divider sx={{ borderBottomWidth: 2, bgcolor:"white"}} />
      <Stack direction='column' spacing={1} m={1} >
        {ItemEls1}
         </Stack>
  
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;  

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar > 
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 , display:{sx:'block', md:'none'}}}
                  onClick={handleDrawerToggle}
                >
                  <MenuRounded/>
                </IconButton>
          <Typography component="a" href="/" variant="h5"  sx={{ fontWeight:'bold' , color:'inherit', textDecoration:'none'
              , "&:hover": {
                color:'inherit',
                cursor: "pointer"
                }}}> 
            Newsgrabber
          </Typography>
         <Stack direction='row' spacing={4} ml={4} sx={{display:{xs:'none', md:'block'}}}>
         {ItemEls}
         </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    )
}

export default NavBar