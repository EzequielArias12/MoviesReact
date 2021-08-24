import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Header.css';

const Header = ({ token, setToken }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((show) => !show);

  const closeShow = () => setShow(false);

  const handleLogout = () => {
    window.localStorage.removeItem('_Token');
    setToken(null);
  }; 

  return (
    <>
      <header className="header">
        <section className="container">
          <div className="logos">
            <Link to="/" onClick={closeShow}>
              <img id="logo1" src="/logo192.png" alt="logo" />
            </Link>
          </div>
          <button className="btn-menu" onClick={handleShow}>
            <span>
              <i className={show ? 'fas fa-times' : 'far fa-bars'} />
            </span>
          </button>
          <nav
            className={`menu d-flex align-items-center w-100 p-3 ${
              show ? 'is-active' : ''
            }`}
          >
            {token ? (
              <>
                <Link to="/" onClick={closeShow}>
                  Inicio
                </Link>
                <Link to="/create" onClick={closeShow}>
                  Crear
                </Link>
              </>
            ) : null}
            <div className="flex-grow-1 d-flex justify-content-end">
              {token ? (
                <Button
                  text="Cerrar Sesión"
                  onClick={() => {
                    closeShow();
                    handleLogout();
                  }}
                  className="btn btn-outline-light justify-self-end my-3 my-lg-0"
                />
              ) : (
                <Button
                  to="/signin"
                  text="Iniciar Sesión"
                  className="btn btn-outline-light justify-self-end my-3 my-lg-0"
                  onClick={closeShow}
                />
              )}
            </div>
          </nav>
        </section>
      </header>
      {show ? (
        <div
          className="active-nav-background"
          onClick={handleShow}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
};

export default Header;

