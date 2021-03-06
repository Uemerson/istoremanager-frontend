import React from 'react';

import { Grid, Typography, Link } from '@material-ui/core';

import useStyles from './styles';

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.body}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Página não encontrada</Typography>
      <Link href="/dashboard" color="inherit" variant="h6">
        Voltar para o dashboard
      </Link>
    </Grid>
  );
};

export default NotFound;
