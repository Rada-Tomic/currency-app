<template>
  <v-row>
    <v-col>
      <v-row display="flex" justify="space-between">
        <v-col align="left">
          <v-title class="font-weight-bold">Currencies</v-title>
        </v-col>
        <v-col>
          <v-btn color="primary" @click="form = !form"
            ><v-icon icon="mdi-plus"></v-icon>Add currency</v-btn
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-text-field
            :loading="state.loading"
            density="compact"
            variant="solo"
            label="Search..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            v-model="searchQuery"
            @input="handleSearchQueryChange"
          ></v-text-field> </v-col
      ></v-row>
      <v-table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.key" class="text-left">
              {{ header.title }}
            </th>
          </tr>
        </thead>
        <tbody v-if="currencies.length > 0">
          <tr
            v-for="currency in currencies"
            :key="currency.symbol"
            @click="
              selectedCurrency = currency;
              formEdit = true;
            "
            class="text-left row"
          >
            <td>{{ currency.name }}</td>
            <td>{{ currency.currency }}</td>
            <td>{{ currency.symbol }}</td>
            <td>
              <v-icon
                @click="deleteCurrency(currency)"
                icon="mdi-delete"
              ></v-icon>
            </td>
          </tr>
        </tbody>
        <div class="d-flex justify-center" v-else>
          There are no currencies added
        </div>
      </v-table>
    </v-col>
    <v-col v-if="form && !formEdit" v-model="form" class="border-left pa-3">
      <add-currency-form @close="form = !form" @save="addCurrency" />
    </v-col>
    <v-col v-if="formEdit" v-model="formEdit" class="border-left pa-3">
      <edit-currency-form
        :currency="selectedCurrency"
        @close="formEdit = !formEdit"
        @save="editCurrency"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { reactive, defineComponent, ref, computed } from 'vue';
import { mockData } from '../data/mockData';
import { HEADER_CONSTANTS } from '../constants/headerConstants';
import AddCurrencyForm from './AddCurrencyForm.vue';
import EditCurrencyForm from './EditCurrencyForm.vue';

export default defineComponent({
  name: 'CurrenciesList',
  components: {
    AddCurrencyForm,
    EditCurrencyForm,
  },
  setup() {
    const form = ref(false);
    const formEdit = ref(false);
    const selectedCurrency = ref(null);
    const currencies = ref(mockData);
    const headers = ref(HEADER_CONSTANTS);
    const state = reactive({
      loading: false,
    });

    const addCurrency = (currencyValue: any) => {
      currencies.value.push(currencyValue);
    };

    const editCurrency = (updatedCurrency: any) => {
      const index = currencies.value.findIndex(
        (currency) => currency.symbol === updatedCurrency.symbol
      );
      if (index !== -1) {
        currencies.value.splice(index, 1, updatedCurrency);
      }
    };
    const deleteCurrency = (currency: any) => {
      const index = currencies.value.indexOf(currency);
      if (index !== -1) {
        currencies.value.splice(index, 1);
      }
    };

    return {
      state,
      currencies,
      selectedCurrency,
      headers,
      form,
      formEdit,
      addCurrency,
      editCurrency,
      deleteCurrency,
    };
  },
});
</script>
<style scoped>
.border-left {
  border-left: 1px solid #999999;
}

.row {
  cursor: pointer;
}
.row:hover {
  background: #f2f2f2;
}
</style>
