import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* Componentes */
import Register from '../components/Register';
import Login from '../components/Login';

const Signin = (
  {
    setToken
  }
  ) => {

    const [signin, setSignin] = useState(true);

    return ( 
        <>
            <h1 className="text-center my-4">Bienvenid@s a MoviesReact</h1>
            <div>
            <div className="text-center">
        {signin ? (
          <p>
            ¿No estás registrado? ¿Qué esperás?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setSignin(false)}
            >
              Registrate!
            </Link>
          </p>
        ) : (
          <p>
            ¿Ya estás registrado?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setSignin(true)}
            >
              Logueate!
            </Link>
          </p>
        )}
      </div>
      {signin ? <Login setToken={setToken}/> : <Register setToken={setToken}/>}
            </div>
        </>
     );
}
 
export default Signin;