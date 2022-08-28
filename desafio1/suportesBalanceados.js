// OBS1.: Como o javascript não possui interação com o terminal de receber valores, tentei usar o readline 
// como biblioteca para resolver esse problema e nao deu certo. Tentei também fazer uma pagina web com um
// form para isso, mas o trabalho acabou ficando grande demais para isso. Para facilitar, então, deixei a
// string de teste a ser colocada no código, se eu tiver tempo, colocarei testes mostrando os casos.
// ou farei numa das paginas do front end para ficar mais visível e bonito.
// OBS2.: Para fazer qualquer teste, basta mudar as strings abaixo.
// OBS3.: esse problema poderia ser contornado facilmente em python, mas como o diretório foi estruturado em
// JS, preferi manter tudo igual, mas eu conseguiria fazer em python num repositório para isso ou num
// hackerRank por exemplo.

const stringToTest1 = "()"; // válido
const stringToTest2 = "([])"; // válido
const stringToTest3 = "(){}[]"; // válido
const stringToTest4 = "[{()}](){}"; // válido
const stringToTest5 = "[]{()"; // inválido
const stringToTest6 = "[{)]"; // inválido
const stringToTest7 = "("; // inválido

const suportesBalanceados = (stringToTest) => {
  const openBrackets = [];
  let counter = 0;
  let verified = false;
  while (counter < stringToTest.length) {
    verified = true;
    if (stringToTest[counter] === "(" || stringToTest[counter] === "[" || stringToTest[counter] === "{") {
      openBrackets.push(stringToTest[counter]);
    }
    if (stringToTest[counter] === ")" || stringToTest[counter] === "]" || stringToTest[counter] === "}") {
      if (openBrackets.length === 0) {
        console.log("string inválida");
        return "string inválida";
      }
      if (stringToTest[counter] === ")") {
        if (openBrackets[openBrackets.length -1] !== "(") {
          console.log("string inválida");
          return "string inválida";
        }
        else {
          openBrackets.pop();
        }
      }
      if (stringToTest[counter] === "]") {
        if (openBrackets[openBrackets.length -1] === "[") {
          openBrackets.pop();
        }
        else {
          console.log("string inválida");
          return "string inválida";
        }
      }
      if (stringToTest[counter] === "}") {
        if (openBrackets[openBrackets.length -1] === "{") {
          openBrackets.pop();
        }
        else {
          console.log("string inválida");
          return "string inválida";
        }
      }
    }
    counter += 1;
  }
  if (openBrackets.length === 0 && verified === true) {
    console.log("string válida");
    return "string válida";
  }
  else {
    console.log("string inválida");
    return "string inválida";
  }
}

suportesBalanceados(stringToTest1)
suportesBalanceados(stringToTest2)
suportesBalanceados(stringToTest3)
suportesBalanceados(stringToTest4)
suportesBalanceados(stringToTest5)
suportesBalanceados(stringToTest6)
suportesBalanceados(stringToTest7)

module.exports = { suportesBalanceados }
