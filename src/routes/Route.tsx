import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import useStyles from './styles';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  hideNavBar?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  hideNavBar = false,
  component: Component,
  ...rest
}) => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user) {
          if (hideNavBar) {
            return <Component />;
          }

          return (
            <>
              <div className={classes.root}>
                <Sidebar />
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Component />
                </main>
              </div>
            </>
          );
        }

        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
