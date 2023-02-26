import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './Contacts/Contacts';
import { FormContacts } from './form/form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    let newContact = values;

    const check = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      resetForm();
    }
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleDelete = EvtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== EvtId),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormContacts onFormSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
