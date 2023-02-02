import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  FormContacts,
  FormLabelContacts,
  InputForm,
  Button,
} from './ContactForm.styled';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        // break;
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExistContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isExistContact) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success('Successfully added contact!');
    setName('');
    setNumber('');
  };

  return (
    <FormContacts onSubmit={handleSubmit}>
      <p>Enter your contact</p>
      <FormLabelContacts>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder=""
        />
      </FormLabelContacts>
      <FormLabelContacts>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder=""
        />
      </FormLabelContacts>
      <Button type="submit">Add contact</Button>
    </FormContacts>
  );
};
