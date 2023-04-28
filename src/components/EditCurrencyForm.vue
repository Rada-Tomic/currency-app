<template>
  <Form
    ref="form"
    @submit="edit()"
    :validation-schema="validationSchemaAdd"
    class="form"
  >
    <v-row justify="space-between">
      <div>
        <v-icon class="mr-2" @click="close">mdi-close</v-icon>
        <v-title class="font-weight-bold">Edit Currency</v-title>
      </div>
      <v-col>
        <v-btn class="mr-5" @click="cancel">Cancel</v-btn>
        <v-btn type="submit" color="primary" value="log in">Save</v-btn>
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
import { defineComponent, ref, reactive, watch } from 'vue';
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import { validationSchemaAdd } from '../validation/validationSchemaAdd';
import { useRouter } from 'vue-router';
import '../styles/form.css';

export default defineComponent({
  name: 'EditCurrencyForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    currency: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const name = ref('');
    const currency = ref('');
    const symbol = ref('');
    const router = useRouter();

    const { handleSubmit } = useForm();
    const state = reactive({
      name: '',
      code: '',
      symbol: '',
    });

    watch(
      () => props.currency,
      (newValue) => {
        if (newValue) {
          name.value = newValue.name;
          currency.value = newValue.currency;
          symbol.value = newValue.symbol;
        }
      },
      { immediate: true }
    );
    const editCurrency = () => {
      const currencyObject = {
        name: name.value,
        currency: currency.value,
        symbol: symbol.value,
      };
      emit('save', { ...currencyObject });
    };
    const edit = handleSubmit(async () => {
      editCurrency();
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
      edit,
      cancel,
      close,
    };
  },
  emits: ['save', 'close'],
});
</script>
