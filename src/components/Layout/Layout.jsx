import React, { Suspense } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import {StyledLink, Nav, Container, MenuContacts} from '../stiled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/Phonebook/UserMenu';
import { selectToken } from 'components/redux/auth/selector';
import { Button, Stack } from '@mui/material';


function Layout() {
  const isAuth = useSelector(selectToken)
  const navigate = useNavigate()

  const handelLogIn = () => {
    navigate("/login")
  }
  const handelLogRegistration = () => {
    navigate("/register")
  }

  return (
    <Container>
      <Nav>
        <MenuContacts>
          <StyledLink to="/">Home</StyledLink>
          {isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}
        </MenuContacts>
        {!isAuth && (
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handelLogIn}>Login</Button>
            <Button variant="contained" onClick={handelLogRegistration}>Registration</Button>
            {/* <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Registration</StyledLink> */}
          </Stack>
        )}
        {isAuth && (
          <>
            <UserMenu />
          </>)}
      </Nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </Container>
  )
}

export default Layout
