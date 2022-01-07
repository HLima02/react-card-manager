import axios from 'axios';

//BaseUrl criada para ser utilizada nas requisições abaixo
const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

const basicFetch = async (endpoint) => {
  const request = api.get(endpoint);
  return request;
}

const putName = async (endpoint, userData) => {
  const putRequest = api.put(endpoint, userData);
}

const approveRequest = async (endpoint, userData) => {
  const approve = api.put(endpoint, userData)
}

const genereteStatusLog = async (endpoint, userData) => {
  const postAudit = api.post(endpoint, userData)
}

const deleteRequest = async (endpoint, id) => {
  const deleteCard = api.delete(endpoint, id)
}

const requestCard = async (endpoint, cardData) => {
  const requestcard = api.post(endpoint, cardData);
}

//Cada uma das funções retornadas abaixo faz requisição de um endpoint da api
export default {
  getUsersList: async () => {
    return[
      {
        users: await basicFetch('users')
      }
    ];
  },
  getAnalysts: async () => {
    return[
      {
        analysts: await basicFetch('analysts')
      }
    ];
  },
  getCardsRequests: async () => {
    return[
      {
        cardsRequests: await basicFetch('cards')
      }
    ]
  },
  getAudits: async () => {
    return [
      {
        audits: await basicFetch('audits')
      }
    ]
  },
  updateName: async (id, data) => {
    return [
      {
        userName: await putName(`cards/${id}`, data)
      }
    ]
  },
  approveRequest: async (id, data) => {
    return [
      {
        requestCard: await approveRequest(`cards/${id}`, data)
      }
    ]
  },
  generateAudit: async (data) => {
    return [
      {
        generateAudit: await genereteStatusLog(`audits`, data)
      }
    ]
  },
  deleteCardRequest: async (id, data) => {
    return[
      {
        deleteRequestCard: await deleteRequest(`cards/${id}`, data)
      }
    ]
  },
  requestCard: async (data) => {
    return[
      {
        request: await requestCard('cards', data)
      }
    ]
  }
};