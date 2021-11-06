const ADD_CLIENTS = 'ADD_CLIENTS';
const TOGGLE_RECEIVED_INFORMATION = 'TOGGLE_RECEIVED_INFORMATION';
const NEW_CLIENT_TOGGLE_MODAL = 'NEW_CLIENT_TOGGLE_MODAL';
const DELETE_CLIENT = 'DELETE_CLIENT';
const ADD_CLIENT = 'ADD_CLIENT';

const initialState = {
  clients: [],
  pageIsLoaded: false,
  isFetching: false,
  newClientModalIsOpen: false,
}

const clientsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CLIENTS:
      return {
        ...state,
        pageIsLoaded: true,
        clients: action.clients
      }

    case TOGGLE_RECEIVED_INFORMATION:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case NEW_CLIENT_TOGGLE_MODAL:
      return {
        ...state,
        newClientModalIsOpen: action.modalIsOpen
      }

    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.clientID)
      }

    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients + action.client]
      }

    default:
      return state
  }
}

export const addClients = (clients) => ({
  type: ADD_CLIENTS,
  clients
})

export const deleteClientFromState = (clientID) => ({
  type: DELETE_CLIENT,
  clientID
})

export const addClientToState = (client) => ({
  type: ADD_CLIENT,
  client
})

export const toggleReceivedInformation = (isFetching) => ({
  type: TOGGLE_RECEIVED_INFORMATION,
  isFetching
})

export const toggleNewClientModal = (modalIsOpen) => ({
  type: NEW_CLIENT_TOGGLE_MODAL,
  modalIsOpen
})

export default clientsReducer;