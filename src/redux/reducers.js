import { combineReducers } from 'redux';

const contactsInitial = [
  {
    id: 0,
    name: 'Barbara',
    number: '667222111',
  },
];

const contactsReducer = (state = contactsInitial, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];
    case 'contacts/DELETE':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/SEARCH':
      return state.set('searchInput', action.data);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
