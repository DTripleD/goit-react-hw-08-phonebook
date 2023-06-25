import { useState } from 'react';
import { FormWrapper, Form } from './ContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone })).then(() => {
      Notify.success(`Contact ${name} was added successfully`);
      setName('');
      setPhone('');
    });
  };

  return (
    <>
      <h2>Phonebook</h2>
      <FormWrapper>
        <Form onSubmit={onFormSubmit}>
          <TextField
            id="outlined-name-input"
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            id="outlined-number-input"
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Button type="submit" variant="contained" color="success">
            Add contact
          </Button>
        </Form>
      </FormWrapper>
    </>
  );
};

export default ContactForm;
