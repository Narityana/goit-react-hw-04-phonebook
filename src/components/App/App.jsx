import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import css from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return savedContacts ?? initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const sameContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (sameContact) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filterChangeHandler = event => {
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const filtredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactHandler = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.app__container}>
      <h1 className={css.app__title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={css.app__subTitle}>Contacts</h2>
      <Filter onChangeInputFilter={filterChangeHandler} />
      <ContactList
        contacts={filtredContacts()}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};
