import React, { useState } from 'react';

import {
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import useStyles from './styles';

const Customer: React.FC = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleSave = () => {
    console.log('handle save!');
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Link color="inherit" href="/customers">
          Clientes
        </Link>
        <Typography color="textPrimary">Novo cliente</Typography>
      </Breadcrumbs>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.title}
          >
            Dados do novo cliente
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="fullName"
                name="fullName"
                label="Nome completo"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="birthday-date"
                  label="Data de aniversário"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            className={classes.button}
          >
            Salvar
          </Button>
        </Paper>
      </main>
    </>
  );
};

export default Customer;
