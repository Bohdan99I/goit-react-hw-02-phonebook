import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson' },
      { id: nanoid(), name: 'Hermione Kline' },
      { id: nanoid(), name: 'Eden Clements' },
    ],
    filter: '',
  };  
  
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),     
      name,
      number,
    };
    if (this.state.contacts.some(item => item.name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          item => item.id !== contactId
        ),
      };
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const vilibleContact = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>                  
        <ContactForm onSubmit={this.addContact} />           
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          vilibleContact={vilibleContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}