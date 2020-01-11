import React from 'react';
import T from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}:{contact.number}
        <button type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      number: T.string.isRequired,
    }),
  ).isRequired,
  onDelete: T.func.isRequired,
};

export default ContactList;
