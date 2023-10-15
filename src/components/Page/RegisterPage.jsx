import { singUp } from "components/services";
import { Form, FormButton, FormInput, FormLabel, LoginForm } from "components/stiled";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()

    const handleSubmit = evt => {
      evt.preventDefault();
      const { name, email, password } = evt.target.elements;
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      // dispatch(
      //   loginThunk(newUser)
      //   // Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      // );
      singUp(newUser)
        .then(() => {
          navigate('/login')
        })
        .catch((error) => console.log(error.message))
    };
  
    return (
      <LoginForm>
        <Form onSubmit={handleSubmit}>
        <FormLabel>
            Login
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
          <FormButton type="submit">Registration</FormButton>
        </Form>
      </LoginForm>
    );
  };
  
  export default RegisterPage