import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";

export const App = () => {
  const TEMP_CONTACTS = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]

  const LS_KEY = "phonebook-contacs";
  const [contacts, setContacts] = useState(() =>JSON.parse(localStorage.getItem(LS_KEY)) ?? TEMP_CONTACTS);
  const [filter, setFilter] = useState('');
  
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(normalizedFilter));

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])


  const addNewContact = (newContact) => {
    contacts.find(c=>c.name===newContact.name)
      ? alert(`${newContact.name} already exists in contacts list.`)
      : setContacts(contacts  => [newContact, ...contacts] )
  }

  const removeContact = (idToRemove) => {
    setContacts(contacts.filter(c=>c.id!==idToRemove))
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} onDeleteClick={removeContact} />
    </Container>
  )
}


