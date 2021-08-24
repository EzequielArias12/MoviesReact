import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ token, setToken, children }) => {
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');
    setToken(storageToken);
  }, [setToken]);

  return <>{token ? children : <Redirect to="/signin" />}</>;
};

const PublicRoute = ({ token, setToken, children }) => {
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');
    setToken(storageToken);
  }, [setToken]);

  return <>{token ? <Redirect to="/" /> : children}</>;
};

const AuthProvider = { PrivateRoute, PublicRoute };

export default AuthProvider;