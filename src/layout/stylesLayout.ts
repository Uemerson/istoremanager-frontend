import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default useStyles;
