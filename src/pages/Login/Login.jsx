import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';
import { Form } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      login({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
      />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
      />
      <Button type="submit" variant="contained" color="success">
        Login
      </Button>
    </Form>
  );
};

export default Login;
