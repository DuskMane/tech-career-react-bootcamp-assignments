import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    name: yup.string().required("Required"),
    surname: yup.string().required("Required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required")
})