import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical size='small'>

        <Menu.Item>
          <Link  to="/products">
          Ürünler
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link  to="/product/add">
          Ürün Ekle
          </Link>
        </Menu.Item>

      
      </Menu>


    </div>
  )
}
