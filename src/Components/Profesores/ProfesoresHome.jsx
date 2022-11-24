import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import { Link } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Perfil from "./Perfil.jsx";
import Footer from "../Common/FooterGeneral/Footer"
import { useNavigate } from "react-router-dom";
import {
  removeToken,
  removeActiveSession,
  removeRol,
  removeID,
} from "../../Services/mysession";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () =>{
    
    removeToken();
    removeActiveSession();
    removeID();
    removeRol();
    navigate("/")

  }

  const drawer = (
    <div>

      <Toolbar sx={{backgroundColor:"#F2EDDB",fontSize:'30px',color:'#d6533c'}}> 
        <Typography variant="p1" component="div"  sx={{ flexGrow: 1 }}>
          <Link underline="none" href="/" style={{fontSize: 35, color:'#d6533c'}}>tuprofe.com</Link>
        </Typography>
      </Toolbar>
      <Divider sx={{backgroundColor:"#F2EDDB"}} />
      <List sx={{backgroundColor:"#F2EDDB"}}>
          <ListItem sx={{backgroundColor:"#F2EDDB"}}>
            <ListItemButton to="/profesores/home">
              <ListItemIcon> 
                <HomeIcon sx={{color:'#d6533c'}} ></HomeIcon>
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}}> Mi Perfil</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton to="/profesores/clases">
              <ListItemIcon> 
              <SchoolIcon sx={{color:'#d6533c'}} /> 
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}}> Clases</ListItemText>
            </ListItemButton>         
          </ListItem>
          <ListItem>
            <ListItemButton to="/profesores/contrataciones">
              <ListItemIcon> 
              <GavelIcon sx={{color:'#d6533c'}}  /> 
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}} > Contrataciones</ListItemText>
            </ListItemButton>         
          </ListItem>
          <ListItem>
            <ListItemButton to="/profesores/contratacionesfinalizadas">
              <ListItemIcon> 
              <GavelIcon sx={{color:'#d6533c'}}  /> 
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}} > Contrataciones Finalizadas</ListItemText>
            </ListItemButton>         
          </ListItem>
          <ListItem>
            <ListItemButton to="/profesores/comentarios">
              <ListItemIcon> 
              <CommentIcon sx={{color:'#d6533c'}}  /> 
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}} > Comentarios</ListItemText>
            </ListItemButton>         
          </ListItem> 
      </List>
      <Divider></Divider>
      <List sx={{backgroundColor:"#F2EDDB"}}>
      <ListItem sx={{backgroundColor:"#F2EDDB"}}>
            <ListItemButton onClick={()=>logout()}>
              <ListItemIcon> 
                <LogoutIcon sx={{color:'#d6533c'}} ></LogoutIcon>
              </ListItemIcon>
              <ListItemText sx={{color:'#10223D'}}> Logout</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',backgroundColor:"#F2EDDB" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:"#F2EDDB",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor:"#F2EDDB"}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color:"#10223D",mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="#10223D" variant="h4" noWrap component="div">
            Mi Perfil
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            backgroundColor:"#F2EDDB",
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#F2EDDB" },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor:"#F2EDDB",
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', backgroundColor:"#F2EDDB",width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ backgroundColor:"#F2EDDB",flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,backgroundColor:"#F2EDDB"} }}
      >
        <Toolbar sx={{backgroundColor:"#F2EDDB"}} />

        <Perfil></Perfil>
        
        <Footer></Footer>
 
      </Box>
    </Box>
  );
}
