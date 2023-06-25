import { Button, TextField } from '@mui/material';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Form } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;
    dispatch(
      login({
        email: form.email.value,
        password: form.password.value,
      })
    )
      .unwrap()
      .then(result => {
        Notify.success(`Wellcome, ${result.user.name}!`);
      })
      .catch(() => Notify.failure('Wrong email or password'));
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
        inputProps={{
          minLength: 7,
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Login
      </Button>
    </Form>
  );
};

export default Login;
