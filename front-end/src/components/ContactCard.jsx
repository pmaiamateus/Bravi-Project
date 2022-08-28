import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import API from '../services/API';

const ContactCard = ({ id,
  nome,
  telefone,
  email,
  whatsapp
  }) => {

  const deleteContact = async () => {
    var resultado = confirm("Deseja excluir o contato?");
    if( resultado === true) {
      await API('deleteContact', { nome });
      window.location.reload(false);
    }
  }

  return (
    <Card className="contact-card">
      <Card.Body>
        <Card.Text>
          {'nome: '}
          { nome }
        </Card.Text>
        <Card.Text>
          {'telefone: '}
          { telefone }
        </Card.Text>
        <Card.Text>
          {'whatsapp: '}
          { whatsapp }
        </Card.Text>
        <Card.Text>
          {'email: '}
          { email }
        </Card.Text>
        <Button
          className='card-button'
          type='button'
          variant='success'
          onClick={ deleteContact }
        >
          Deletar Contato
        </Button>
      </Card.Body>
    </Card>
  );
};

ContactCard.propTypes = {
  id: PropTypes.number,
  nome: PropTypes.string,
  telefone: PropTypes.number,
  email: PropTypes.string,
  whatsapp: PropTypes.number,
}.isRequire;

export default ContactCard;
