import PropTypes from "prop-types";
import { Component } from "react";
import {nanoid} from "nanoid"
import { Input, Label, Button, Form } from "./ContactForm.styled";
export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

 state = {
    name: '',
    number: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleAddContact = (e) => {
    e.preventDefault();
    this.props.onSubmit({...this.state,  id: nanoid()});
    this.resetForm();
  }

  resetForm = () => {
    this.setState({ name: '', number: '' })
  }

 render() {
    return (
      <>
        <Form onSubmit={this.handleAddContact}>
          <Label>
            Name 
            <Input
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              value={this.state.number}
              onChange={this.handleInputChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">
            Add contact
          </Button>
        </Form>
      </>
    );
  }

}