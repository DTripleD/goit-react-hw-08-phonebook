import { Button, TextField } from '@mui/material';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    )
      .unwrap()
      .then(result => Notify.success(`Wellcome, ${result.user.name}!`))
      .catch(() => Notify.failure('Error! Try to enter another email'));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="outlined-name-input"
          label="Username"
          type="name"
          name="name"
        />
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
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
