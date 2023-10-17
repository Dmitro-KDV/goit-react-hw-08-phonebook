import { loginThunk } from "components/redux/auth/operation";
import { singUp } from "components/services";
import { Form, FormInput, FormLabel, LoginForm } from "components/stiled";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';
import { Button } from "@mui/material";

const RegisterPage = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = evt => {
      evt.preventDefault();
      const { name, email, password } = evt.target.elements;
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      singUp(newUser)
        .then(() => {
          // navigate('/login')
          dispatch(loginThunk({
            email: email.value,
            password: password.value,
          }))
          Notiflix.Notify.success('Welcome Contacts book')
        })
        .catch((error) => {
        if (error.response.data.keyValue) {
          Notiflix.Notify.failure('This email is already registered')
        } else if(error.response.data.errors) {
          Notiflix.Notify.failure('Invalid password (more than 7 characters required)')
        }
        })
    };
  
    return (
      <LoginForm>
        <Form onSubmit={handleSubmit}>
        <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              id='exampleInputName'
            />
          </FormLabel>
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
          <Button variant="contained" type="submit">Registration</Button>
          {/* <FormButton type="submit">Registration</FormButton> */}
        </Form>
      </LoginForm>
    );
  };
  
  export default RegisterPage