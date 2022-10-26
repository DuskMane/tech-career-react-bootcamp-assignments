import React, {useState} from 'react'
import {useFormik} from 'formik';
import { basicSchema } from '../schemas';
import '../App.css';

const UserRegister = () => {
    const [users, setUsers] = useState([{
        email:"test@test.com",
        name:"test",
        surname: "test",
        age: "1",
        password: "test12",
    }])

    const onSubmit = (values) => {
        setUsers([...users, {
            email: values.email,
            name: values.name,
            surname: values.surname,
            age: values.age,
            password: values.password
        }])
    }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            name: "",
            surname: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
        <div >
            <label htmlFor='email'>Email</label>
            <input 
                value={values.email}
                onChange={handleChange}
                id = "email" type="email" placeholder="Enter your email."
                className={(errors.email ) ? "input-error": ""}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
            <label htmlFor='name'>Name</label>
            <input 
                value={values.name}
                onChange={handleChange}
                id = "name" type="text" placeholder="Enter your name."
                className={errors.name ? "input-error": ""}
            />
            {errors.name && <p className='error'>{errors.name}</p>}
        </div>
        <div>
            <label htmlFor='surname'>Surname</label>
            <input 
                value={values.surname}
                onChange={handleChange}
                id = "surname" type="text" placeholder="Enter your surname."
                className={errors.surname ? "input-error": ""}
            />
            {errors.surname && <p className='error'>{errors.surname}</p>}
        </div>

        <div>
            <label htmlFor='age'>Age</label>
            <input 
                value={values.age}
                onChange={handleChange}
                id = "age" type="number" placeholder="Enter your age."
                className={errors.age ? "input-error": ""}
            />
            {errors.age && <p className='error'>{errors.age}</p>}
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <input 
                value={values.password}
                onChange={handleChange}
                id = "password" type="text" placeholder="Enter your password."
                className={errors.password ? "input-error": ""}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <div>
        <label htmlFor='confirmPassword'>Password Confirm</label>
            <input 
                value={values.confirmPassword}
                onChange={handleChange}
                id = "confirmPassword" type="text" placeholder="Enter your password."
                className={errors.confirmPassword ? "input-error": ""}
            />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default UserRegister