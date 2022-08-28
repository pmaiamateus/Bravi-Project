const { expect } = require('chai');
const shell = require('shelljs');
const { contacts } = require('../../../database/models');

const { getAllContactsService } = require('../../services/contacts');

const contactMock = {
  nome: "mateus",
  email: "pmaiamateus@gmail.com",
  telefone: 11954563519,
  whatsapp: 11954563519,
}

describe('Testa a função de pegar todos os contatos do service', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Testa se não houver contatos na tabela, entrega um array vazio', async () => {
    const serviceResponse = await getAllContactsService();
    expect(serviceResponse).to.be.a('array');
    expect(serviceResponse[0]).to.be.a('undefined');
  });
  it('Testa se houver contatos, entrega o array com os contatos de forma correta', async () => {
    await contacts.create({
      nome: contactMock.nome,
      email: contactMock.email,
      telefone: contactMock.telefone,
      whatsapp: contactMock.whatsapp,
    });
    const serviceResponse = await getAllContactsService();
    expect(serviceResponse).to.be.a('array');
    expect(serviceResponse[0]).to.be.a('object');
    expect(serviceResponse[0]).to.have.property('nome');
    expect(serviceResponse[0]).to.have.property('telefone');
    expect(serviceResponse[0]).to.have.property('email');
    expect(serviceResponse[0]).to.have.property('whatsapp');
    const contactFromDb = await contacts.findOne({ where: { nome: contactMock.nome } });
    expect(serviceResponse[0].nome).to.be.equal(contactFromDb.dataValues.nome);
    expect(serviceResponse[0].email).to.be.equal(contactFromDb.dataValues.email);
    expect(serviceResponse[0].telefone).to.be.equal(contactFromDb.dataValues.telefone);
    expect(serviceResponse[0].whatsapp).to.be.equal(contactFromDb.dataValues.whatsapp);
  });
});