import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../pages/styles/pages.css'

const NavbarComponent = () => {
  const history = useHistory();
  const registerPageButton = () => {
    history.push('/addContact');
  };

  const updatePageButton = () => {
    history.push('/UpdateContact');
  };

  const contactsPageButton = () => {
    history.push('/AllContacts');
  };

  return (
    <Container className="navbar-container">
      <Button
        type="button"
        className="btn-bar"
        onClick={ contactsPageButton }
      >
        Contatos
      </Button>
      <Button
        type="button"
        className="btn-bar"
        onClick={ registerPageButton }
      >
        Cadastrar
      </Button>
      <Button
        type="button"
        className="btn-bar"
        onClick={ updatePageButton }
      >
        Atualizar
      </Button>
    </Container>
  );
};

NavbarComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default NavbarComponent;
