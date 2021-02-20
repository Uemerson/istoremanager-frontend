import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;
