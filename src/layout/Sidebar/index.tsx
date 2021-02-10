import React, { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Typography,
  Collapse,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState(false);

  const isActive = useCallback(
    (value: string): boolean => {
      return location.pathname === value;
    },
    [location.pathname],
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCustomer = () => {
    setOpenCustomer(!openCustomer);
  };

  const handleProduct = () => {
    setOpenProduct(!openProduct);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon
              color={isActive('/dashboard') ? 'primary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={handleCustomer}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Cliente" />
          {openCustomer ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCustomer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/customer"
            >
              <ListItemText primary="Novo cliente" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/customers"
            >
              <ListItemText primary="Listar clientes" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleProduct}>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Produto" />
          {openProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/product"
            >
              <ListItemText primary="Novo produto" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/products"
            >
              <ListItemText primary="Listar produtos" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            iStore Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
