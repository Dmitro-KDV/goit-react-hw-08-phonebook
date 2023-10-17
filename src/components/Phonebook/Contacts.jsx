import { useDispatch, useSelector } from 'react-redux';
import {ContactList, ContactItem} from './Phonebook.stiled';
import { deleteContact } from 'components/redux/tasks/operation';
import { filterSelector } from 'components/redux/tasks/selector';

export const Contacts = () => {
    const filterContacts = useSelector(filterSelector);

    const dispatch = useDispatch();

    const handDelete = id => {
        dispatch(deleteContact(id));
      };
    
    return ( 
        <>
            {filterContacts.map((el) => 
            <ContactItem key = {el.id}>
                <ContactList>{el.name}: {el.number}   
                    <button type='button' onClick={()=>handDelete(el.id)}>Delete</button>
                </ContactList>
            </ContactItem>
            )}
        </>    
    );
}