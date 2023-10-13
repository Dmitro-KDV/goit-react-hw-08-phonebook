import { FormaPhonebook } from 'components/Phonebook/FormaPhonebook';
import { Contacts } from 'components/Phonebook/Contacts';
import { Filter } from 'components/Phonebook/Filter';
import { Container, Rotating } from '../Phonebook/Phonebook.stiled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/tasks/operation';
import { useEffect } from 'react';
import { RotatingLines } from  'react-loader-spinner'
import { selectToken } from 'components/redux/auth/selector';


const UserMenu = () => {
  const dispatch = useDispatch();
  const { contacts} = useSelector(state => state.contacts);
  const isAuth = useSelector(selectToken)
  // const {profile} = useSelector(state => state.auth)
// console.log('1 ===> '+isAuth)
  useEffect(() => {
    // console.log('2 ===> '+isAuth)
    dispatch(fetchContacts(isAuth));
  }, [dispatch, isAuth]);


  return (
    <Container>
      <h2>Phonebook</h2>
      <FormaPhonebook />
      <h2>Contacts</h2>
      <Filter />
      {contacts.isLoading && !contacts.error && 
        <Rotating className="RotatingLines">
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Rotating>
      }
      <Contacts />
    </Container>
  );
};

export default UserMenu
