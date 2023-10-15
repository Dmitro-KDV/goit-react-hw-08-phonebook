import styled from 'styled-components';

export const Form = styled.form`
   width: 400px;
   border: 1px solid #2a2a2a;
   padding: 8px;
   border-radius: 5px;
`;

export const Label = styled.label`
   display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 150px;
`;

export const ContactList = styled.li`
   display: flex;
   justify-content: space-between;
   width: 350px;
`;

export const ContactItem = styled.ul`
   margin: 8px 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Rotating = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1200;
`;

