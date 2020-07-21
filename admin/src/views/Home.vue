<template>
  <div class="home">
    <v-container>
      <dashboard-info-tabs :usersQuantity="usersQuantity"></dashboard-info-tabs>
    </v-container>
    <world-purchase-map></world-purchase-map>
  </div>
</template>

<script>

import WorldPurchaseMap from '../components/WorldPurchaseMap';
import DashboardInfoTabs from '../components/DashboardInfoTabs';
import config from '../proxy';
import Axios from 'axios';

export default {
  name: 'Home',
  data: () => ({
    usersQuantity: null
  }),
  components: {
    WorldPurchaseMap,
    DashboardInfoTabs
  },
  created() {
    Axios.get(`${config.path}/admin/getdata`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
      }
    })
      .then((res) => {
        this.usersQuantity = res.data.usersQuantity;
      })
  }
}
</script>
