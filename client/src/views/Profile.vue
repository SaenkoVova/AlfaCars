<template>
  <div>
      <div class="section-wrapper" v-if="getUser">
          <div>
              <h1 class="section-title font-color">{{getUser.name}} {{getUser.secondName}}</h1>
              <div class="panel-group">
                  <div class="panel">
                      <p>Внутрішній рахунок</p>
                      <span>
                        <router-link :to="'/'">0 грн</router-link>
                      </span>
                  </div>
                  <div class="panel">
                      <p>Всього замовлень</p>
                      <span>
                          <router-link :to="'/'">0</router-link>
                      </span>
                  </div>
                  <div class="panel">
                      <p>Закладинок</p>
                      <span>
                          <router-link :to="'/wishlist'">{{getUser.bookmarks.length}}</router-link>
                      </span>
                  </div>
              </div>
                <div class="list-group">
                    <div>
                        <ul class="account-list">
                            <li class="account-list-header">Мій обліковий запис</li>
                            <router-link v-for="(item, index) in profileConfigList" :key="index" :to="item.path">
                                <li class="account-list-item">{{item.title}}</li>
                            </router-link>
                            <button class="account-list-item" @click="logOut">Вийти</button>
                        </ul>
                    </div>
                    <div>
                        <ul class="account-list">
                            <li class="account-list-header">Мої замовлення</li>
                            <router-link v-for="(item, index) in ordersConfig" :key="index" :to="item.path">
                                <li class="account-list-item">{{item.title}}</li>
                            </router-link>
                        </ul>
                    </div>
                </div>
          </div>
          <actions-tabs></actions-tabs>
      </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';

export default {
    components: {
        ActionsTabs
    },
    data: () => ({
        profileConfigList: [
            {
                title: 'Змінити контактну інформацію',
                path: '/profile/simpleedit'
            },
            {
                title: 'Змінити свій пароль',
                path: '/profile/editpassword'
            },
            {
                title: 'Змінити мої адреса',
                path: '/profile/editaddress'
            },
            {
                title: 'Змінити закладки',
                path: '/wishlist'
            },
            {
                title: 'Підписатися чи відмовитися від розсилки новини',
                path: '/newsletter'
            }
        ],
        ordersConfig: [
            {
                title: 'Історія замовлень',
                path: '/order'
            },
            {
                title: 'Файли для завантаження',
                path: '/download'
            },
            {
                title: 'Запити на повернення',
                path: '/return'
            },
            {
                title: 'Історія фінансових операцій',
                path: '/transaction'
            },
            {
                title: 'Регулярні платежі',
                path: '/recurring'
            }
        ]
    }),
    methods: {
        logOut() {
            this.$store.dispatch('LOG_OUT');
            this.$router.push('/');
        }
    },
    computed: {
        getToken() {
            return this.$store.getters.getToken;
        },
        getUser() {
            return this.$store.getters.getUser;
        }
    },
    created() {
        this.$store.dispatch('GET_BASIC_USER_DATA', this.getToken);
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
    .panel-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .panel {
        margin: 10px 30px 10px 0;
        padding: 19px;
        background: #f5f5f5;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        text-align: center;
    }
    .panel > p {
        font-size: 17px;
        margin: 0 0 2px 0;
    }
    .panel > span {
        font-size: 20px;
    }
    .account-list {
        border: 1px solid #ddd;
        border-radius: 3px;
        background: #f5f5f5;
        padding: 0 0 20px 0;
        margin: 10px;
    }
    .account-list-header {
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
    .account-list-item {
        padding: 10px 15px;
        color: #555;
        background: #fff;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        width: 100%;
        text-align: left;
    }
    .list-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>