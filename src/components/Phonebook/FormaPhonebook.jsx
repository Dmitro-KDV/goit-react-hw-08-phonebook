import TextField from '@mui/material/TextField';
import {Form} from './Phonebook.stiled';
import { addContact } from 'components/redux/tasks/operation';
import { contactsSelector } from 'components/redux/tasks/selector';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export const FormaPhonebook = () => {

    const contacts = useSelector(contactsSelector);

    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const {name, number} = evt.target.elements;
        if (!name.value.trim() || !number.value.trim()) 
            return form.reset();
        
        const isAlredyContacts = contacts.find(el => el.name === name.value);
        if (isAlredyContacts) return alert(`${name.value} is alredy in contacts.`);
    
        const newContacts = {
            name: name.value,   
            number: number.value,
        }
        dispatch(addContact(newContacts));

        form.reset();
    };
      
        return ( 
            <div>
                {/* <Form onSubmit={handleSubmit}> */}
                    {/* <Label> */}
                    <Form>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '45ch', color: 'white', },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        >
                        <TextField 
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" 
                            type="text"
                            name="name"
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Number" 
                            variant="outlined" 
                            type="tel"
                            name="number"
                        />
                        <Button variant="contained" type="submit">Add contact</Button>
                    </Box>
                        {/* Name
                        <Input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        /> */}
                    {/* </Label> */}
                    {/* <Label>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Label> */}
                    {/* <button type="submit">Add contact</button> */}
                </Form>
            </div>
        );
    }