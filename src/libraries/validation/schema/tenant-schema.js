import * as yup from "yup";

export const __tenantsignup = yup.object().shape({
    firstname : yup.string().required('First Name is Required'),
    lastname : yup.string().required('Last Name is Required'),
    email: yup.string().email('Email Address is invalid').required('Email Address is Required'),
    phone: yup.number().required("Phone Number is Required"),
    password: yup.string().required('Password is Required'),
    confirm_password: yup.string().required("Password is Required"),
});

export const __tenantlogin = yup.object().shape({
    email: yup.string().email('Email Address is invalid').required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
});