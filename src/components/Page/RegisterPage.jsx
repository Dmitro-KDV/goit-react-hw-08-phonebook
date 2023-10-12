import { singUp } from "components/services";
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
      <div>
        <form onSubmit={handleSubmit}>
        <label>
            Login
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              id='exampleInputName'
            />
          </label>
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
          <button type="submit">Registration</button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage