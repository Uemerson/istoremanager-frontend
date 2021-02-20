import React from 'react';

import {
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import useStyles from './styles';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
    />
  );
}

const Product: React.FC = () => {
  const classes = useStyles();

  const [number, setNumber] = React.useState<string>();
  const [checkBox, setCheckBox] = React.useState<boolean>(false);

  const handleSave = () => {
    console.log('handle save!');
  };

  const handleChangeNumberformat = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNumber(event.target.value);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBox(event.target.checked);
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
        <Link color="inherit" href="/products">
          Produtos
        </Link>
        <Typography color="textPrimary">Novo produto</Typography>
      </Breadcrumbs>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.title}
          >
            Dados do novo produto
          </Typography>
          <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <TextField
                required
                id="fullName"
                name="fullName"
                label="Descrição do produto"
                fullWidth
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <TextField
                label="Preço de venda à vista"
                value={number}
                onChange={handleChangeNumberformat}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                }}
                variant="outlined"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <TextField
                label="Preço de venda a prazo"
                value={number}
                onChange={handleChangeNumberformat}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                }}
                variant="outlined"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkBox}
                    onChange={handleChangeCheckbox}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Amostra"
              />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkBox}
                    onChange={handleChangeCheckbox}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Produto original"
              />
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

export default Product;
