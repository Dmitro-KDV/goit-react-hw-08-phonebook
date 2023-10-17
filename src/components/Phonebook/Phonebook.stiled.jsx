import styled from 'styled-components';

export const Form = styled.div`
   width: 400px;
   border: 3px solid #070404;
   padding: 8px;
   border-radius: 5px;
`;

export const Label = styled.label`
   display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 150px;
  font-weight: 500;
`;
export const Input = styled.input`
  margin-top: 10px;
  width: 390px;
`;

export const ContactList = styled.li`
   display: flex;
   justify-content: space-between;
   width: 350px;
   font-weight: 500;
   border-bottom: 1px solid #0c1113;
   color: white;
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

