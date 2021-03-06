import React, { Component } from 'react';
import shortid from 'shortid';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const {name, value} = event.currentTarget

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.ContactForm}>
      <label className={css.label} >
        Name:
        <input
            id={this.nameInputId}
            type='text'
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            className={css.input_name}
            placeholder="Input name"
        />
      </label>
      <label label className={css.label} >
        Phone number:
           <input
          id={this.numberInputId}
          type='number'
          name="number"
          value={this.state.number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          className={css.input_name}
          placeholder="Input number"
        />
            
      </label>

        <button type='submit' className={css.add_btn}>Add contact</button>
        
      </form>
    )
  }
}

export default ContactForm;