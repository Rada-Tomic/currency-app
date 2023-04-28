<template>
  <navbar />
</template>

<script lang="ts">
import Navbar from '@/components/NavbarDrawer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Navbar },
  name: 'HomeView',
});
</script>
