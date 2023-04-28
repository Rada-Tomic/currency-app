import * as yup from 'yup';

export const validationSchemaSignIn = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Email must be a valid!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(4, 'Password must contain minimum 4 characters!'),
});
