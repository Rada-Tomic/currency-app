<template>
  <Form
    ref="form"
    @submit="add()"
    :validation-schema="validationSchemaAdd"
    class="form"
  >
    <v-row justify="space-between">
      <div>
        <v-icon class="mr-2" @click="close">mdi-close</v-icon>
        <v-title class="font-weight-bold">Add Currency</v-title>
      </div>
      <v-col>
        <v-btn class="mr-5" @click="cancel">Cancel</v-btn>
        <v-btn type="submit" color="primary" value="log in">Add</v-btn>
      </v-col>
    </v-row>
    <Field
      class="input-field"
      label="Currency name"
      v-model="name"
      name="name"
      type="name"
      placeholder="Add name"
    />
    <ErrorMessage class="error" name="name" />
    <Field
      class="input-field"
      label="Currency code"
      v-model="currency"
      name="currency"
      type="text"
      placeholder="e.g. USD"
    />
    <ErrorMessage class="error" name="currency" />
    <Field
      class="input-field"
      label="Currency symbol"
      v-model="symbol"
      name="symbol"
      type="text"
      placeholder="Add symbol"
    />
    <ErrorMessage class="error" name="symbol" />
  </Form>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import { validationSchemaAdd } from '../validation/validationSchemaAdd';
import { useRouter } from 'vue-router';
import '../styles/form.css';

export default defineComponent({
  name: 'AddCurrencyForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup(props, { emit }) {
    const name = ref('');
    const currency = ref('');
    const symbol = ref('');
    const router = useRouter();

    const { handleSubmit } = useForm();
    const state = reactive({
      name: '',
      currency: '',
      symbol: '',
    });

    const addCurrency = () => {
      const id = Math.floor(Math.random() * 1000);
      const currencyObject = {
        name: name.value,
        currency: currency.value,
        symbol: symbol.value,
      };
      console.log(currencyObject.value);
      emit('save', { id, ...currency });
    };
    const add = handleSubmit(async () => {
      addCurrency();
      name.value = '';
      currency.value = '';
      symbol.value = '';
      await router.push({ path: '/home/currencies' });
    });

    const cancel = () => {
      name.value = '';
      currency.value = '';
      symbol.value = '';
    };

    const close = () => {
      emit('close');
    };
    return {
      name,
      symbol,
      state,
      currency,
      validationSchemaAdd,
      add,
      cancel,
      close,
    };
  },
  emits: ['save', 'close'],
});
</script>
