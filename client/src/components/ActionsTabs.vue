<template>
  <div>
      <ul class="actions">
          <router-link v-for="item in actionsList" :key="item.title" :to="item.path">
              <li class="actions-item">{{item.title}}</li>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    data: () => ({
        actionsList: [
            {
                icon: '',
                title: 'Вхід',
                path: '/signin'
            },
            {
                icon: '',
                title: 'Реєстрація',
                path: '/signup'
            },
            {
                icon: '',
                title: 'Забули пароль',
                path: ''
            },
            {
                icon: '',
                title: 'Моя інформація',
                path: ''
            },
            {
                icon: '',
                title: 'Список контактів',
                path: ''
            },
            {
                icon: '',
                title: 'Закладки',
                path: ''
            },
            {
                icon: '',
                title: 'Історія замовлень',
                path: ''
            },
            {
                icon: '',
                title: 'Файли для завантаження',
                path: ''
            },
            {
                icon: '',
                title: 'Бонусні бали',
                path: ''
            },
            {
                icon: '',
                title: 'Повернення',
                path: ''
            },
            {
                icon: '',
                title: 'Платежі',
                path: ''
            },
            {
                icon: '',
                title: 'E-Mail розсилка',
                path: ''
            },
            {
                icon: '',
                title: 'Регулярні платежі',
                path: ''
            },
        ]
    })
}
</script>

<style scoped>
    .actions {
        padding: 0;
        border: 1px solid #eee;
        border-radius: 3px;
    }
    .actions-item {
        padding: 10px 15px;
        color: #555;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
    }
    .actions-item:hover {
        background: #eee;
    }
</style>