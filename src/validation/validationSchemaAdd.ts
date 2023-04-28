import * as yup from 'yup';

export const validationSchemaAdd = yup.object({
  name: yup.string().required('Name is required!'),
  currency: yup.string().required('Code is required!'),
  symbol: yup.string().required('Symbol is required!'),
});
