import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/navBarComponent';
import ContactCard from '../components/ContactCard';
import API from '../services/API';

const allContactsPage = () => {
  const [contacts, setContacts] = useState([])
  const requestAllContacts = async () => {
    const APIresponse = await API('getContacts', null);
    const contacts = APIresponse.data;
    setContacts(contacts)
  }

  if (contacts === undefined || contacts.length === 0) {
    requestAllContacts()
  }

  function renderContacts() {
    return contacts.map((contact) =>{
      return (
        <ContactCard 
          id = { contact.id }
          nome = { contact.nome }
          telefone = { contact.telefone }
          email = { contact.email }
          whatsapp = { contact.whatsapp }
        />
      )
    });
  }

  return ( !contacts ? 
    <Container className="container">
      <NavbarComponent className="navbar" />
      <p>Carregando contatos ou sua lista ainda está vazia</p>
    </Container>
    :
    <Container className="container">
      <NavbarComponent className="navbar" />
      <div className='card-container'>
        {
          renderContacts()
        }
      </div>
    </Container>
  );
};

export default allContactsPage;