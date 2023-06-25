import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      register({
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
    );
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          name="username"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
        />

        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
