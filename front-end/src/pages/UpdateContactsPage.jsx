import React, { useState, useEffect } from 'react';
import { Form, Button,  Container } from 'react-bootstrap';
import NavbarComponent from '../components/navBarComponent';
import API from '../services/API';
import './styles/pages.css'

const UpdateContactsPage = () => {
  const [inputsState, setInputsState] = useState({
    nome: undefined,
    email: undefined,
    telefone: '00000000000',
    whatsapp: '00000000000',
  });
  const [dataError, setDataError] = useState('hidden');
  const [userUpdated, setUserUpdated] = useState('hidden');
  const inputsChangeHandler = ({ target: { name, value } }) => {
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const updateButton = async () => {
    const data = inputsState;
    const newUser = await API('update', data);
    if (newUser === 'error') {
      setDataError('visible');
    }
    if (newUser !== 'error') {
      setUserUpdated('visible');
    }
  };
  useEffect(() => {
    setDataError('hidden')
    setUserUpdated('hidden')
  }, [inputsState]);

  return (
    <Container className="container">
      <NavbarComponent />
      <h1>Atualizar contatos</h1>
      <div>
        <h2
          style={ { visibility: dataError } }
        >
          Dados no formato inválido ou contato não existe!
          </h2>
        <h2
          style={ { visibility: userUpdated } }
        >
          Contato atualizado!
        </h2>
      </div>
      <Form className='form'>
        <label>
          Nome do contato
          <input 
            type='text'
            name='nome'
            onChange={ inputsChangeHandler }
            value={ inputsState.nome }
          />
        </label>
        <label>
          email
          <input 
            type='email'
            name='email'
            onChange={ inputsChangeHandler }
            value={ inputsState.email }
          />
        </label>
        <label>
          Celular (com DDD só números)
          <input 
            type='number'
            name='telefone'
            onChange={ inputsChangeHandler }
            value={ inputsState.telefone }
          />
        </label>
        <label>
          Whatsapp (com DDD só números)
          <input 
            type='number'
            name='whatsapp'
            onChange={ inputsChangeHandler }
            value={ inputsState.whatsapp }
          />
        </label>
      </Form>
      <Button
        className='button'
        variant="success"
        type="button"
        size="lg"
        onClick={ updateButton }
        >
        Atualizar
      </Button>
    </Container>
  );
};

export default UpdateContactsPage;
