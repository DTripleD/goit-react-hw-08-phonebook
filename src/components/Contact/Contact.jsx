import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Notify } from 'notiflix';

const Contact = ({ contact: { name, number, id } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(payload =>
        Notify.success(`Сontact ${payload.name} was successfully deleted`)
      );
  };

  return (
    <>
      <Item>{name}:</Item>
      <Item> {number}</Item>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
