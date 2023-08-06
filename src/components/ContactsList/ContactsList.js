import React, { useState } from 'react';
import './ContactsList.styles.css';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState('');
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const handleSearchInput = e => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="filter_form">
      <h2 className="filter_title">Contacts:</h2>
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        // value={filter}
        onChange={handleSearchInput}
        className="filter_input"
      />
      <ul></ul>
      {/* <ul>
          {filteredContacts.map(({ name, number }, index) => (
            <li key={index}>
              {name}: {number}
              <button
                className="delete_button"
                onClick={() => deleteContact(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}
    </div>
  );
};
