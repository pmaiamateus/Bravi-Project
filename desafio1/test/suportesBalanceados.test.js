const { expect } = require('chai')
const { suportesBalanceados } = require('../suportesBalanceados');

describe('Testa a função suportes balanceados', () => {
  it('testa se enviar uma string vazia, o retorno é "string inválida"', () => {
    const stringToTest = "";
    const funtionResponse = suportesBalanceados(stringToTest);
    expect(funtionResponse).to.be.a('string');
    expect(funtionResponse).to.be.equal("string inválida");
  });
  it('testa se enviar uma string com um colchete que não fecha, o retorno é "string inválida"', () => {
    const stringToTest = "(";
    const funtionResponse = suportesBalanceados(stringToTest);
    expect(funtionResponse).to.be.a('string');
    expect(funtionResponse).to.be.equal("string inválida");
  });
  it('testa se enviar uma string com um colchete que é fechado com outro tipo de colchete, o retorno é "string inválida"', () => {
    const stringToTest = "([})";
    const funtionResponse = suportesBalanceados(stringToTest);
    expect(funtionResponse).to.be.a('string');
    expect(funtionResponse).to.be.equal("string inválida");
  });
  it('testa se enviar uma string com um colchetes não fechando na sequência correta, o retorno é "string inválida"', () => {
    const stringToTest = "([{]})";
    const funtionResponse = suportesBalanceados(stringToTest);
    expect(funtionResponse).to.be.a('string');
    expect(funtionResponse).to.be.equal("string inválida");
  });
  it('testa se enviar uma string com uma sequência de colchetes válida, o retorno é "string válida"', () => {
    const stringToTest1 = "({})";
    const funtionResponse1 = suportesBalanceados(stringToTest1);
    expect(funtionResponse1).to.be.a('string');
    expect(funtionResponse1).to.be.equal("string válida")
    const stringToTest2 = "({[]})";
    const funtionResponse2 = suportesBalanceados(stringToTest2);
    expect(funtionResponse2).to.be.a('string');
    expect(funtionResponse2).to.be.equal("string válida");
    const stringToTest3 = "[{()}](){}";
    const funtionResponse3 = suportesBalanceados(stringToTest3);
    expect(funtionResponse3).to.be.a('string');
    expect(funtionResponse3).to.be.equal("string válida");
    const stringToTest4 = "(){}[]";
    const funtionResponse4 = suportesBalanceados(stringToTest4);
    expect(funtionResponse4).to.be.a('string');
    expect(funtionResponse4).to.be.equal("string válida");
  });
});