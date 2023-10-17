import { NavLink } from "react-router-dom";
import styled from "styled-components";
import background from "./../img/contacts.jpg";

export const Container = styled.div`
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.9),
        rgba(46, 47, 66, 0.9)),
        url(${background});
    object-fit: cover;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 700;
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #2a363b;
  color: white;
`;

export const Inform = styled.li`
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

export const Goback = styled.button`
  margin-bottom: 20px;
`;

export const Main = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 48px;
    text-align: center;
`;

export const LoginForm = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 3px solid #080b0c;
    border-radius: 20px;
`;
export const FormLabel = styled.label`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    gap: 10px;
`;
export const FormButton = styled.button`
    font-size: 20px;
    border-radius: 10px;
    width: 150px;
    margin: 0 auto;
    background-color: #00c3ff;
`;
export const FormInput = styled.input`
    font-size: 15px;
    padding: 5px;
`;
export const User = styled.div`
    display: flex;
    font-weight: 500;
    gap: 20px;
    color: blue;
`;
export const UserMenuButton = styled.button`
    font-size: 15px;
    border-radius: 10px;
    width: 65px;
    height: 30px;
    margin: auto;
`;
export const MenuContacts = styled.div`
    display: flex;
    justify-content: flex-start;
`;