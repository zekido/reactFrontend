import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignOut from './SignOut'
import SignIn from './SignIn'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Nav() {

  const { cartItems } = useSelector(state => state.cart)

  const [isAuth, setIsAuth] = useState(true)

  
  const navigate = useNavigate()

  function handleSignOut() {
    setIsAuth(false)
    navigate("/")
  }
  function handleSignIn() {
    setIsAuth(true)
  }

  return (
    <div>
      <Menu inverted size='tiny'>
        <Container>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />

          <Menu.Menu position='right'>

            <Menu.Item>
              {
                cartItems.length > 0  &&    <CartSummary />
              }
           
             
            </Menu.Item>

            <Menu.Item>
              {
                isAuth ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />
              }
            </Menu.Item>




          </Menu.Menu>

        </Container>

      </Menu>

    </div>
  )
}
