<template>
  <div class="footer-box">
      <div>
          <div>
              <span>Контакти</span>
          </div>
          <ul>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
              <li>
                <span>></span>
                <img src="../assets/Vodafone18.svg" alt="">
                <span>+38 (050) 536 15 06 (Viber)</span>
              </li>
          </ul>
      </div>
      <div>
          <div>
              <span>Інформація</span>
          </div>
          <ul>
            <router-link :to="'/guarantee'">
                <li>
                    <span>></span>
                    <span>Гарантія</span>
                </li>
            </router-link>
            <router-link :to="'/delivery'">
                <li>
                    <span>></span>
                    <span>Доставка і оплата</span>
                </li>
            </router-link>
            <router-link :to="'/security-policy'">
                <li>
                    <span>></span>
                    <span>Політика безбеки</span>
                </li>
            </router-link>
          </ul>
      </div>
      <div>
          <div>
              <span>Служба підтримки</span>
          </div>
          <ul>
            <router-link :to="'/guarantee'">
                <li>
                    <span>></span>
                    <span>Зв'язатися з нами</span>
                </li>
            </router-link>
            <router-link :to="'/delivery'">
                <li>
                    <span>></span>
                    <span>Повернення товару</span>
                </li>
            </router-link>
            <router-link :to="'/security-policy'">
                <li>
                    <span>></span>
                    <span>Карта сайту</span>
                </li>
            </router-link>
          </ul>
      </div>
      <div>
          <div>
              <span>Особистий кабінет</span>
          </div>
          <ul>
            <router-link :to="'/guarantee'">
                <li>
                    <span>></span>
                    <span>Особистий кабінет</span>
                </li>
            </router-link>
            <router-link :to="'/delivery'">
                <li>
                    <span>></span>
                    <span>Історія замовлення</span>
                </li>
            </router-link>
            <router-link :to="'/security-policy'">
                <li>
                    <span>></span>
                    <span>Закладки</span>
                </li>
            </router-link>
            <router-link :to="'/security-policy'">
                <li>
                    <span>></span>
                    <span>Розсилка</span>
                </li>
            </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-box {
        border: 1px solid #ddd;
        border-radius: 6px;
        box-shadow: 0 3px 10px rgba(0,0,0,.1);
        padding: 30px 30px 20px 30px;
        margin: 20px 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>