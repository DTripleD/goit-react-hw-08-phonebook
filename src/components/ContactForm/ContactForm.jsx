import { useState } from 'react';
import { Form } from './ContactForm.style';
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
      <div>
        <Form onSubmit={onFormSubmit}>
          <TextField
            id="outlined-name-input"
            label="Name"
            type="text"
            name="name"
            required
            inputProps={{
              pattern: "^[a-zA-Z'\\s\\-]+$",
              title:
                'Name may contain only letters, apostrophe, dash and spaces.',
            }}
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            id="outlined-number-input"
            label="Number"
            type="tel"
            name="number"
            inputProps={{
              pattern: '^\\+?[0-9\\s\\-()]+$',
              title:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            }}
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Button type="submit" variant="contained" color="success">
            Add contact
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
