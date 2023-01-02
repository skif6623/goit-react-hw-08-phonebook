const contactsIntoBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initContactsFromStorage = () => {
  const savedStorageContacts = localStorage.getItem('contacts');
  if (savedStorageContacts !== null) {
    return JSON.parse(savedStorageContacts);
  }
  return contactsIntoBook;
};

const contactsinitialState = initContactsFromStorage();

export const contactsReducer = (state = contactsinitialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/addContact':
      return [action.payload, ...state];
    default:
      return state;
  }
};

const filterInitialState = '';

export const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return action.payload;
    default:
      return state;
  }
};
