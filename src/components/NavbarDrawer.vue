<template>
  <v-card>
    <v-layout>
      <v-app-bar prominent class="pa-2">
        <v-avatar color="primary">A</v-avatar>
        <div class="pl-2 text-left">
          <v-title
            >BRAND NAME
            <div class="subtitle-1 font-weight-bold">All stores</div>
          </v-title>
        </div>
        <v-spacer></v-spacer>
        <v-icon class="pr-2" icon="mdi-bell"></v-icon>
        <v-icon icon="mdi-account"></v-icon>
      </v-app-bar>
      <v-responsive>
        <v-navigation-drawer
          class="pa-3"
          v-model="drawer"
          location="left"
          color="backgroundDrawer"
          permanent
          :temporary="isDrawerTemporary"
        >
          <v-list density="compact" nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :value="item.value"
              :to="item.route"
              class="items text-left"
            >
              <v-list-item-icon>
                <v-icon>{{ item.name }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="ml-5">
                {{ item.title }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-responsive>
      <v-main>
        <v-container fluid fill-height class="pt-10">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { ref, watch } from 'vue';
import { defineComponent } from 'vue';
import { DRAWER_CONSTANTS } from '../constants/drawerConstants';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const drawer = ref(true);
    const group = ref(null);
    const items = ref(DRAWER_CONSTANTS);

    const isDrawerTemporary = ref(true);

    watch(group, () => {
      drawer.value = true;
    });

    return {
      drawer,
      group,
      items,
      isDrawerTemporary,
    };
  },
});
</script>

<style scoped>
.items {
  cursor: pointer;
  font-weight: 300;
}
.items:hover {
  background: #ff660012;
  color: #ff6600;
}
.items:active {
  background: #ff660012;
  color: #ff6600;
}
</style>
