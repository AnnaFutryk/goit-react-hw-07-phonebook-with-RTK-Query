import { useState } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddContact = async () => {
    try {
      await addContact({ name, phone: number }); //add toast (contact is adding)
      setName('');
      setNumber('');
    } catch (error) {
      console.log(error); //додати тост.еррор
    }
  };

  // зміна значень інпутів
  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleAddContact} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        {isLoading ? 'Loading...' : 'Add contact'}
      </Button>
    </Form>
  );
};

export default ContactForm;
