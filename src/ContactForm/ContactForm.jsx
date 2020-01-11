import React, { useState } from 'react';
import uuid from 'uuid/v1';
import T from 'prop-types';

const ContactForm = ({ onSaveContact }) => {
  /*NAME*/
  const nameId = uuid();
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  /*NUMBER*/
  const numberId = uuid();
  const [number, setNumber] = useState('');
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };
    if (!name || !number) {
      alert('Name and number is required!');
      return;
    }

    if (isNaN(number)) {
      alert('Invalid number');
      return;
    }
    onSaveContact({ ...newContact });

    setName('');
    setNumber('');
  };

  return (
    <form>
      <label htmlFor={nameId}>
        <h2>Name</h2>
        <input
          type="text"
          onChange={handleNameChange}
          name="name"
          value={name}
          id={nameId}
        />
      </label>
      <label htmlFor={numberId}>
        <h2>Number</h2>
        <input
          type="text"
          onChange={handleNumberChange}
          name="number"
          value={number}
          id={numberId}
        />
      </label>

      <p>
        <button type="button" onClick={handleClick}>
          Add contact
        </button>
      </p>
    </form>
  );
};

ContactForm.propTypes = {
  onSaveContact: T.func.isRequired,
};

export default ContactForm;
