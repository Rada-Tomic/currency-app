<template>
  <div class="backgroundImage">
    <v-container class="fill-height">
      <v-row height="100%" justify="center" align="center">
        <v-col xs="12" md="5"> <sign-in /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import SignIn from '@/components/SignInForm.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: { SignIn },
  name: 'SignInView',
});
</script>

<style scoped>
.backgroundImage {
  background: url('../assets/images/backgroundImage.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; /* or position: absolute; */
  height: 100%;
  width: 100%;
}
</style>
