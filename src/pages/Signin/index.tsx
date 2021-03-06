import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import useStyles from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignIn: React.FC = () => {
  const [openErrorSignIn, setOpenErrorSignIn] = useState(false);

  const { signIn } = useAuth();

  const history = useHistory();

  const classes = useStyles();

  const handleCloseErrorSignIn = (
    event?: React.SyntheticEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErrorSignIn(false);
  };

  return (
    <>
      <Snackbar
        open={openErrorSignIn}
        autoHideDuration={3000}
        onClose={handleCloseErrorSignIn}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseErrorSignIn} severity="error">
          Ocorreu um erro ao fazer login
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Formik
            initialValues={
              {
                email: '',
                password: '',
              } as SignInFormData
            }
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido.'),
              password: Yup.string().required('Senha obrigatória'),
            })}
            onSubmit={async (values: SignInFormData, { setSubmitting }) => {
              try {
                setSubmitting(true);

                const data: SignInFormData = {
                  email: values.email,
                  password: values.password,
                };

                await signIn(data);

                history.push('/dashboard');
              } catch {
                setOpenErrorSignIn(true);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email && touched.email && errors.email}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link
                        href="https://www.ucperfumes.com.br"
                        variant="body2"
                      >
                        Esqueceu a senha?
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.ucperfumes.com.br">
              UC Perfumes
            </Link>
            {` ${new Date().getFullYear()}.`}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
