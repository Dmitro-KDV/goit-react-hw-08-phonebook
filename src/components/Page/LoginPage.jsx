import { getProfileThunk, loginThunk } from "components/redux/auth/operation";
import { selectToken } from "components/redux/auth/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';

const LoginPage = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(selectToken)
  const dispatch = useDispatch();
  // console.log('1 ===> '+isAuth)
  useEffect(() => {
    if (isAuth) {
      navigate('/contacts')
      // dispatch(getProfileThunk(isAuth))
      Notiflix.Notify.success('Welcome Contacts book');
    }
  }, [isAuth, navigate])

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    const newUser = {
      email: email.value,
      password: password.value,
    }
    dispatch(loginThunk(newUser));
  };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              id='exampleInputEmail'
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
              id='exampleInputPassword'
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage