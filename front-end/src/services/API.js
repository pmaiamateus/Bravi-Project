import axios from "axios";

export default async function API(caseInput, bodyValue) {
  switch (caseInput) {
    default:
      return console.log('sem parâmetro da função');
    case 'getContacts': {
      try {
        const allContacts = await axios({ method: 'get',
        url: 'http://localhost:3001/contacts',
        });
        return allContacts;
      } catch (error) {
        return 'error';
      }
    }
    case 'deleteContact': {
      try {
        await axios({
          method: 'DELETE',
          url: 'http://localhost:3001/contacts',
          data: bodyValue,
        });
      } catch (error) {
        return 'error';
      }
    }
    case 'register': {
      try {
        await axios({
          method: 'POST',
          url: 'http://localhost:3001/contacts',
          data: bodyValue
        })
      } catch (error) {
        return 'error'
      }
    }
    case 'update': {
      try {
        await axios({
          method: "PUT",
          url: 'http://localhost:3001/contacts',
          data: bodyValue
        })
      } catch (error) {
        return 'error'
      }
    }
  };
}