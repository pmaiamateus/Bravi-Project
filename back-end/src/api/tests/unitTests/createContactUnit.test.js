const { expect } = require('chai');
const shell = require('shelljs');
const { contacts } = require('../../../database/models');

const { createContactService } = require('../../services/contacts');

const contactMock = {
  nome: "mateus",
  email: "pmaiamateus@gmail.com",
  telefone: 11954563519,
  whatsapp: 11954563519,
}

describe('Testa a função de criar contatos do service', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Testa se cria o contato corretamente', async () => {
    const serviceResponse = await createContactService(contactMock);
    expect(serviceResponse).to.be.a('object');
    expect(serviceResponse).to.have.property('nome');
    expect(serviceResponse).to.have.property('telefone');
    expect(serviceResponse).to.have.property('email');
    expect(serviceResponse).to.have.property('whatsapp');
    const contactFromDb = await contacts.findOne({ where: { nome: contactMock.nome } });
    expect(serviceResponse.nome).to.be.equal(contactFromDb.dataValues.nome);
    expect(serviceResponse.email).to.be.equal(contactFromDb.dataValues.email);
    expect(serviceResponse.telefone).to.be.equal(parseInt(contactFromDb.dataValues.telefone));
    expect(serviceResponse.whatsapp).to.be.equal(parseInt(contactFromDb.dataValues.whatsapp));
  });
  it('testa se, ao tentar criar um contato ja existente, retorna que o contato já está registrado', async () => {
    await contacts.create({
      nome: contactMock.nome,
      email: contactMock.email,
      telefone: contactMock.telefone,
      whatsapp: contactMock.whatsapp,
    });
    try {
      await createContactService(contactMock);      
    } catch (error) {
      expect(error).to.be.a('object');
      expect(error).to.have.property('status');
      expect(error.status).to.be.equal(409)
      expect(error).to.have.property('message')
      expect(error.message).to.be.equal("contact already registered")
    }
  })
});