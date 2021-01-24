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
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import { useSidebar } from '../../hooks/sidebar';
import useStyles from './styles';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const classes = useStyles();

  const location = useLocation();
  const { handleDrawerOpen, handleDrawerClose, data } = useSidebar();

  const isActive = useCallback(
    (value: string): boolean => {
      return location.pathname === value;
    },
    [location.pathname],
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, data.open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              data.open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !data.open && classes.drawerPaperClose,
          ),
        }}
        open={data.open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
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
          <ListItem button component={Link} to="/customers">
            <ListItemIcon>
              <PeopleIcon
                color={isActive('/customers') ? 'primary' : 'inherit'}
              />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default memo(Sidebar);
