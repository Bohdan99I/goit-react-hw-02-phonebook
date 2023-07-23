import React from 'react';
import { nanoid } from 'nanoid';

const contacts = [
  { id: nanoid(), name: 'Rosie Simpson' },
  { id: nanoid(), name: 'Hermione Kline' },
  { id: nanoid(), name: 'Eden Clements' },
];

export class App extends React.Component {
  state = {
    contacts: contacts,
    name: '',
  };
  
  handleChange = event => {
    this.setState(prevState => {
      return {
        name: event.target.value,
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    
    const contact = {
      id: nanoid(),
      name,
    };    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
        name: '',
      };
    });
  };


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
        {this.state.contacts.map(contact => {
          return <div key={contact.id}>{contact.name}</div>;
        })}
      </div>
    );
  }
}