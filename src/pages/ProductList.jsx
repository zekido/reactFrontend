import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

export default function ProductList() {

  

  const [products, setProducts] = useState([])


  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then(result => setProducts(result.data.data));
  }, []);

  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`Sepete eklendi: ${product.productName}`)
  }




  return (
    <div>
      <ToastContainer />
      <Table celled>
        <Table.Header>

          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>

        </Table.Header>

        <Table.Body>
          {
            // ürün getirdiğimizde bizden bir key istiyor aşagıda "products.id" olarak bir key verdik
            // vermezsek client kısmında error veriyor >> "a unique "key" prop."
            // herhangi birşeyi key olarak verebiliriz
            products.map(product => (
              <Table.Row key={product.id}>

                <Table.Cell>{product.id}</Table.Cell>

                <Table.Cell>
                  <Link to={`/products/${product.productName}`}>
                    {product.productName}
                  </Link>
                </Table.Cell>

                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.stok}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category?.categoryName}</Table.Cell>

                <Table.Cell>
                  <Button onClick={() => handleAddToCart(product)}>Sepete ekle</Button>
                </Table.Cell>

              </Table.Row>
            ))
          }



        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>


    </div>
  )
}
