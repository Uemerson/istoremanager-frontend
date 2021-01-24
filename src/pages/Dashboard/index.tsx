import React from 'react';

import { Container, Typography, Breadcrumbs } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Sidebar from '../../components/Sidebar';
import useStyles from './styles';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar>
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              className={classes.navigateIcon}
              fontSize="default"
            />
          }
          aria-label="breadcrumb"
        >
          <Typography className={classes.linkSelected}>
            <DashboardIcon className={classes.iconSelected} />
            Dashboard
          </Typography>
        </Breadcrumbs>
      </Sidebar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography>Dashboard content</Typography>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
