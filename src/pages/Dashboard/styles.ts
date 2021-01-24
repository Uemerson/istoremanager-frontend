import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  linkSelected: {
    display: 'flex',
    color: '#FFF',
    fontWeight: 'bold',
  },
  iconSelected: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    fontWeight: 'bold',
  },
  navigateIcon: {
    color: '#FFF',
    fontWeight: 'bold',
  },
}));

export default useStyles;
