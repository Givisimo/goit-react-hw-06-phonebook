import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import ContactList from '../ContactList/ContactList';
import getFilteredContacts from '../utils/getFilteredContacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import contactsList from '../data/contacts';

const Phonebook = () => {
  /*INITIAL STATE*/

  const [contacts, setContacts] = useState(contactsList);

  useEffect(() => {
    const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
    if (!contactsFromStorage) {
      return;
    }
    setContacts([...contactsFromStorage]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /*SAVE*/

  const saveContact = contact => {
    if (contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  /*DELETE*/

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  /*FILTER*/

  const searchId = uuid();
  const [filter, setFilter] = useState('');
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filteredContact = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSaveContact={saveContact} />
      <h2>Contacts</h2>
      <Filter searchId={searchId} handleFilter={handleFilter} filter={filter} />
      <ContactList contacts={filteredContact} onDelete={deleteContact} />
    </div>
  );
};

export default Phonebook;
