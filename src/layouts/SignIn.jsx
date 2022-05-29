import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignIn(props) {
  return (
    <div>


      <Menu.Item >

        <Image avatar spaced="right" src="https://i.hizliresim.com/p6d1f96.jpg" />
        
        <Dropdown text="Yusuf">
          <Dropdown.Menu>

            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkıs Yap" icon="sign-out" />

          </Dropdown.Menu>
        </Dropdown>


      </Menu.Item>


    </div>
  )
}
