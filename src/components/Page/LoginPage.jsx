import { loginThunk } from "components/redux/auth/operation";
// import { selectToken } from "components/redux/auth/selector";
// import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';
import { Form, FormButton, FormInput, FormLabel, LoginForm } from "components/stiled";

const LoginPage = () => {
  const navigate = useNavigate()
  // const isAuth = useSelector(selectToken)
  const dispatch = useDispatch();
  // console.log('1 ===> '+isAuth)
  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/contacts')
  //     // dispatch(getProfileThunk(isAuth))
  //     Notiflix.Notify.success('Welcome Contacts book');
  //   }
  // }, [isAuth, navigate])

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
          <FormButton type="submit">Login</FormButton>
        </Form>
      </LoginForm>
    );
  };
  
  export default LoginPage