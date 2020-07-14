<template>
    <tr>
        <td>
            <span>vova saenko</span>
            <span>Нетішин</span>
            <span>Хмельницька</span>
            <span>Україна</span>
        </td>
        <td>
            <div class="d-flex td-right">
                <router-link :to="'/'" class="btn info-btn">Редагувати</router-link>
                <button class="btn btn-danger">Видалити</button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {

}
</script>

<style scoped>
    td {
        padding: 8px;
        border: 1px solid #ddd;
    }
    tr:hover {
        background: #eee;
    }
    span {
        display: block;
    }
    .td-right {
        justify-content: flex-end;
    }
    .info-btn {
        background: #5bc0de;
        border-color: #46b8da;
        color: #ffffff;
        padding: 6px 12px;
    }
    .btn-danger {
        background: #BA1010;
        color: #ffffff;
    }
</style>