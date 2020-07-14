<template>
  <div>
      <h1 class="section-title">Список адрес доставки</h1>
        <div class="section-wrapper">
            <div>
                <table>
                    <tbody>
                        <address-list-item></address-list-item>
                    </tbody>
                </table>
            </div>
            <actions-tabs></actions-tabs>
        </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';
import AddressListItem from '../components/AddressListItem';

export default {
    components: {
        ActionsTabs,
        AddressListItem
    }
}
</script>

<style scoped>
    .section-wrapper {
        display: grid;
        grid-template-columns: 1fr 275px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
</style>