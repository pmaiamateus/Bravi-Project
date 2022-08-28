import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavbarComponent from '../components/navBarComponent';
import API from '../services/API';
import './styles/pages.css'

const AddContactsPage = () => {
  const [inputsState, setInputsState] = useState({
    nome: undefined,
    email: undefined,
    telefone: '00000000000',
    whatsapp: '00000000000',
  });
  const [userAlreadyExists, setUserExists] = useState('hidden');
  const [userRegistered, setuserRegistered] = useState('hidden');
  const inputsChangeHandler = ({ target: { name, value } }) => {
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const registerButton = async () => {
    const data = inputsState;
    const newUser = await API('register', data);
    if (newUser === 'error') {
      setUserExists('visible');
    }
    if (newUser !== 'error') {
      setuserRegistered('visible');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setUserExists('hidden')
      setuserRegistered('hidden')
    }, "1500")
  }, [inputsState,registerButton]);

  return (
    <Container className="container">
      <NavbarComponent className="navbar" />
      <h1>Cadastro</h1>
      <div>
        <h2
          style={ { visibility: userAlreadyExists } }
        >
          Usuário já existe ou dados inválidos
        </h2>
      </div>
      <div>
        <h2
          style={ { visibility: userRegistered } }
        >
          Registrado!
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
        onClick={ registerButton }
        >
        Cadastrar
      </Button>
    </Container>
  );
};

export default AddContactsPage;
