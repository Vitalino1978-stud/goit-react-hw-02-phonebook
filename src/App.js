import { Component } from "react";
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import Filter from './components/Filter/Filter.jsx'
import shortid from 'shortid';


class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  deleteContact = (contactId) => {
    this.setState(
      prevState => ({contacts: prevState.contacts.filter(contact => contactId !== contact.id)})
    )
  
  }
  
  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = { id: shortid.generate(), name, number };
    this.setState(
      prevState => ({ contacts: [contact, ...prevState.contacts] })
    );
   
  };
  
  filter = (event) => {
    this.setState(
      {
        filter: event.currentTarget.value
      }
    )
  }
  

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );
    return (
     <>
     
      
        <ContactForm onAdd={ this.addContact}/>
        
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
        
        <Filter valueState={this.state.filter} filterByName={ this.filter}/>
  
    
</>
      
    )
  }
}


  

export default App;
