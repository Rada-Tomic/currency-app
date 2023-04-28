import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

const themes = {
  colors: {
    background: '#FF6600',
    primary: '#FF6600',
    backgroundDrawer: '#F2F2F2',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'themes',
    themes: {
      themes,
    },
  },
});

createApp(App).use(router).use(vuetify).mount('#app');
