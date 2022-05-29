import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button } from 'semantic-ui-react'
import TextInput from '../utilities/customFromControl/TextInput'
import ProductService from '../services/productService'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

export default function ProductAdd() {


    let productService = new ProductService()


    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({

        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")

    })

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => {
                    productService.add(values)
                    resetForm()
                    toast.success(`Ürün eklendi: ${values.productName}`, {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }

                }

            >
                <Form className='ui form'>
                    <TextInput className="five wide field" name="productName" placeholder="ürün adı" />
                    <br />
                    <TextInput className="five wide field" name="unitPrice" placeholder="ürün fiyatı" />
                    <br />
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
