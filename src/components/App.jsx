import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
export class App extends Component {
  #LS_KEY = "phonebook-contacs";

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem(this.#LS_KEY);
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(this.#LS_KEY, JSON.stringify(this.state.contacts))
    }
  }
  
  addNewContact = (newContact) => {
    this.state.contacts.find(c=>c.name===newContact.name)
      ? alert(`${newContact.name} already exists in contacts list.`)
      : this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }))
  }
  
  removeContact = (idToRemove) => {
    this.setState(({contacts})=>({contacts: contacts.filter(c=>c.id!==idToRemove)}))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(normalizedFilter));
 
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDeleteClick={this.removeContact} />
      </Container>
    )
  }
}

