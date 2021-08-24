import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './pages/Create';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import AuthProvider from './components/AuthProvider';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const { PrivateRoute, PublicRoute } = AuthProvider;

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
        <Header token={token} setToken={setToken}/>
        <ScrollToTop>
          <div className="container main-container">
            <Switch>
              <Route exact path="/"> 
                <PrivateRoute token={token} setToken={setToken}>
                  <Home />  
                </PrivateRoute>                
              </Route>
              <Route exact path="/edit/:id"> 
                <PrivateRoute token={token} setToken={setToken}>
                  <Edit />
                </PrivateRoute>           
              </Route>
              <Route exact path="/create">
                <PrivateRoute token={token} setToken={setToken}>
                  <Create />
                </PrivateRoute>       
              </Route>
              <Route exact path="/signin"> 
                <PublicRoute token={token} setToken={setToken}>
                  <Signin setToken={setToken}/>              
                </PublicRoute> 
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
