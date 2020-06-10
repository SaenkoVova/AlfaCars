<template>
    <header class="header">
        <div class="header-top">
            <div class="container-center d-flex justify-space-between">
                <ul class="d-flex">
                    <router-link v-for="(item, index) in leftPull" :key="index" :to="item.path">
                        <li class="left-pull-item btn">{{item.title}}</li>
                    </router-link>
                </ul>
                <ul class="d-flex">
                    <router-link :to="'/bookmarks'">
                        <li class="btn">
                            <span>Закладки </span>
                            <span class="badge">0</span>
                        </li>
                    </router-link>
                    <router-link :to="'/compare'">
                        <li class="btn">
                            <span>Порівняння товарів </span>
                            <span class="badge">0</span>
                        </li>
                    </router-link>
                    <div class="btn" @click="tabVisible = !tabVisible">
                        <span>Особистий кабінет</span>
                        <div v-if="tabVisible" class="action-tab">
                            <router-link :to="'/signin'">
                                <span class="action-tab-text">Авторизація</span>
                            </router-link>
                            <router-link :to="'/signup'">
                                <span class="action-tab-text">Реєстрація</span>
                            </router-link>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <div class="header-bottom container-center">
            <div class="logo">
                <router-link :to="'/'">
                    <img src="../assets/logo1.svg" alt="logo">
                </router-link>
            </div>
            <div class="contacts">
                <ul>
                    <li>
                        <img src="../assets/Vodafone18.svg" alt="">
                        <span>+38 (050) 536 15 06</span>
                    </li>
                    <li>
                        <img src="../assets/kyivstar18.svg" alt="">
                        <span>+38 (098) 187 01 04</span>
                    </li>
                    <li>
                        <img src="../assets/lifecell18.svg" alt="">
                        <span>+38 (063) 029 98 09</span>
                    </li>
                </ul>
                <span class="hint">Підбір і замовлення запчастин, з 9:00 до 18:00</span>
            </div>
            <menu class="menu">
                <ul class="d-flex">
                    <router-link :to="'/get-by-vin-code'">
                        <li class="menu-item">Запит по VIN-коду</li>
                    </router-link>
                    <router-link :to="'/blog'">
                        <li class="menu-item">Блог</li>
                    </router-link>
                    <router-link :to="'/responces'">
                        <li class="menu-item">Відгуки про магазин</li>
                    </router-link>
                </ul>
            </menu>
            <nav class="nav">
                <button>
                    <span>Категорії</span>
                    <div class="burger">
                        <span></span>
                    </div>
                </button>
            </nav>
            <div class="serch-panel">
                <form>
                    <button class="left-button">Везде</button>
                    <input class="search-input" type="text" placeholder="Введіть код запчастини">
                    <button class="right-button">Find</button>
                </form>
            </div>
            <button class="cart" @click="toggleCartVisible">
                <span>
                    {{getFullOrdered}} товарів, на {{fullSum}} грн
                </span>
            </button>
            <cars-categories-list v-if="bottomHeaderPartVisible" class="categories"></cars-categories-list>
            <slider v-if="bottomHeaderPartVisible" class="slider"></slider>  
        </div>
    </header>
</template>

<script>

import CarsCategoriesList from '../components/CarsCategoriesList';
import Slider from '../components/Slider';

export default {
    data: () => ({
        tabVisible: false,
        bottomHeaderPartVisible: true,
        leftPull: [
            {
                title: 'Гарантія',
                path: '/guarantee'
            },
            {
                title: 'Доставка і оплата',
                path: '/delivery'
            },
            {
                title: 'Контакти',
                path: '/contacts'
            }
        ]
    }),
    computed: {
        fullSum() {
            return this.$store.getters.getFullSum;
        },
        getFullOrdered() {
            return this.$store.getters.getCart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.ordered;
            }, 0);
        }
    },
    components: {
        CarsCategoriesList,
        Slider
    },
    watch: {
        $route() {
            if(this.$route.path === '/')
                this.bottomHeaderPartVisible = true
            else
                this.bottomHeaderPartVisible = false
        }
    },
    created() {
        if(this.$route.path === '/')
            this.bottomHeaderPartVisible = true
        else
            this.bottomHeaderPartVisible = false
    },
    methods: {
        toggleCartVisible() {
            this.$store.dispatch('CHANGE_CART_VISIBLE');
        }
    }
}
</script>

<style scoped>
    .header-top {
        border-bottom: 1px solid #ddd;
        box-shadow: 0 1px 5px rgba(0,0,0,.1);
        padding: 6px 5px;
    }
    
    .badge {
        border-radius: 4px;
        background: #ddd;
        color: #333;
        font-size: 12px;
        font-weight: bold;
        padding: 3px 7px;
    }
    .action-tab {
        position: absolute;
        left: 0;
        right: 0;
        top: 110%;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,0.15);
        box-shadow: 0 6px 12px rgba(0,0,0,0.175);
        border-radius: 4px;
        padding: 4px 0;
    }
    .action-tab-text {
        padding: 5px 14px;
        display: block;
        color: #333;
    }
    .action-tab-text:hover {
        background: #ddd;
    }
    .header-bottom {
        padding: 50px 0;
        display: grid;
        grid-template-columns: 270px 1fr 1fr auto;
        grid-template-rows: auto 30px auto auto;
        grid-column-gap: 20px;
        grid-template-areas: "logo contacts menus menus"
                                ". . . ."
                                "nav searchpanel searchpanel cart"
                                "categories-list slider slider slider";
    }
    .slider {
        grid-area: slider;
        padding: 40px 0;
    }
    .categories {
        grid-area: categories-list;
        z-index: 100;
    }
    .logo {
        grid-area: logo;
        padding: 0 10px;
    }
    .contacts {
        grid-area: contacts;
    }
    .contacts > ul {
        padding: 0;
    }
    .contacts > ul > li > span {
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        margin: 3px 5px;
    }
    .menu {
        grid-area: menus;
        justify-self: end;
        align-self: center;
    }
    .menu-item {
        margin: 0 20px;
        text-decoration: underline;
        color: #333;
    }
    .nav {
        grid-area: nav;
        z-index: 100;
    }
    .nav > button {
        width: 100%;
        color: #ffffff;
        font-weight: bold;
        text-shadow: -1px -1px 0px rgba(0,0,0,.1);
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #ba1010;
        text-align: left;
        padding: 10px 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.175);
        display: flex;
        justify-content: space-between;
    }
    .burger {
        width: 25px;
        height: 25px;
        position: relative;
    }
    .burger > span {
        display: block;
        width: 100%;
        height: 2px;
        background: #fff;
        position: absolute;
        top: 50%;
        margin-top: -1px;
    }
    .burger > span::before, .burger > span::after {
        content: '';
        display: block;
        background: #fff;
        position: absolute;
        width: 100%;
        height: 2px;
    }
    .burger > span::before {
        top: 10px;
    }
    .burger > span::after {
        bottom: 10px;
    }
    .serch-panel {
        grid-area: searchpanel;
    }
    .serch-panel > form {
        height: 100%;
        display: flex;
    }
    .cart {
        grid-area: cart;
        background: #333333 url('../assets/cart.png') left center no-repeat;
        color: #ddd;
        display: flex;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }
    .cart > span {
        margin-left: 50px;
        margin-right: 10px;
    }
    .hint {
        font-size: 12px;
        line-height: 12px;
        color: #aaa;
    }
    .left-button, .right-button {
        background: #eee;
        border: 1px solid #ddd;
        height: 100%;
        padding: 0 12px;
    }
    .left-button {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .right-button {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .search-input {
        flex: 1 1 auto;
        padding: 0 10px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
</style>