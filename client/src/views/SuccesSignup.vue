<template>
  <div class="d-flex flex-column align-end">
    <article>
        <h1 class="section-title">Ваша учётная запись создана!</h1>
        <p>
            Поздравляем! Ваш Личный Кабинет был успешно создан.

            Теперь Вы можете воспользоваться дополнительными возможностями: просмотр истории заказов, печать счета, изменение своей контактной информации и адресов доставки, и др.

            Если у Вас есть какие-либо вопросы, напишите нам.

            Письмо с данными о регистрации было отправлено на Ваш E-mail. Если Вы не получили письмо, свяжитесь с нами.
        </p>
    </article>
    <router-link :to="'/profile'">
        <button class="btn btn-danger">Продовжити</button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn-danger {
    background: #BA1010;
    color: #fff;
    padding: 6px 12px;
  }
</style>