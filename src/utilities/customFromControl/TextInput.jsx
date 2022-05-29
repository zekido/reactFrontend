import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'

export default function TextInput({ ...props }) {


    const [field, meta] = useField(props)


    return (
        <div>

            <FormField error={meta.touched && !!meta.error}>
                <input {...field} {...props} />
            </FormField>



        </div>
    )
}
