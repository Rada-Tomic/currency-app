import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignInView from '../views/SignInView.vue';
import HomeView from '../views/HomeView.vue';
import CurrenciesList from '../components/CurrenciesList.vue';
import NotFound from '../views/NotFound.vue';
import AddCurrencyForm from '../components/AddCurrencyForm.vue';
import EditCurrencyForm from '../components/EditCurrencyForm.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'signIn',
    component: SignInView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'currencies',
        name: 'currencies',
        component: CurrenciesList,
        children: [
          { path: 'add', name: 'addCurrencyForm', component: AddCurrencyForm },
          {
            path: 'edit',
            name: 'editCurrencyForm',
            component: EditCurrencyForm,
          },
        ],
      },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
