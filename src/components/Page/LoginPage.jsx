import { loginThunk } from "components/redux/auth/operation";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';
import { Form, FormInput, FormLabel, LoginForm } from "components/stiled";
import { Button } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    const newUser = {
      email: email.value,
      password: password.value,
    }
    dispatch(loginThunk(newUser))
    .unwrap()
    .then(() => {
      navigate('/contacts')
      Notiflix.Notify.success('Welcome Contacts book')
    })
    .catch(() => 
      Notiflix.Notify.failure('Some error....')
    );

  };

    return (
      <LoginForm>
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            E-mail
            <FormInput
              type="email"
              name="email"
              id='exampleInputEmail'
            />
          </FormLabel>
          <FormLabel>
            Password
            <FormInput
              type="text"
              name="password"
              id='exampleInputPassword'
            />
          </FormLabel>
          <Button variant="contained" type="submit">Login</Button>
          {/* <FormButton type="submit">Login</FormButton> */}
        </Form>
      </LoginForm>
    );
  };
  
  export default LoginPage