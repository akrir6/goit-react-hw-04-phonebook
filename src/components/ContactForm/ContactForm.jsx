import PropTypes from "prop-types";
import { useState } from "react";
import {nanoid} from "nanoid"
import { Input, Label, Button, Form } from "./ContactForm.styled";

export const ContactForm = ({onSubmit})=> {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    onSubmit({id: nanoid(), name, number});
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }
  
  return (
    <>
      <Form onSubmit={handleAddContact}>
        <Label>
          Name 
          <Input
            type="text"
            value={name}
            onChange={(e)=>setName(e.currentTarget.value)}
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
            value={number}
            onChange={(e)=>setNumber(e.currentTarget.value)}
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
  )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}