<template>
  <v-card elevation="3" class="pa-5" align="left">
    <img src="../assets/images/logo.webp" alt="logo" width="40" height="40" />
    <v-card-title>Sign In</v-card-title>
    <v-card-subtitle>Please enter your email and password</v-card-subtitle>
    <v-card-text>
      <Form
        ref="form"
        @submit="login()"
        :validation-schema="validationSchemaSignIn"
        class="form"
      >
        <Field
          class="input-field"
          v-model="email"
          name="email"
          type="email"
          placeholder="Your email address"
        />
        <ErrorMessage class="error" name="email" />
        <Field
          class="input-field"
          v-model="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <ErrorMessage class="error" name="password" />
        <v-btn type="submit" class="mt-4" color="primary" value="log in"
          >Login</v-btn
        >
      </Form>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { validationSchemaSignIn } from '../validation/validationSchemaSignIn';
import '../styles/form.css';

export default defineComponent({
  name: 'SignInForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const { handleSubmit } = useForm();
    const state = reactive({
      email: '',
      password: '',
    });
    const login = handleSubmit(async () => {
      const credentials = {
        email: email.value,
        password: password.value,
      };
      console.log('Credentials:', credentials);
      await router.push({ path: '/home/currencies' });
    });

    return {
      email,
      state,
      password,
      validationSchemaSignIn,
      login,
    };
  },
});
</script>
<style scoped></style>
