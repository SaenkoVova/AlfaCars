<template>
    <div class="modal-background">
        <div class="modal">
            <div class="modal-tab">
                <div class="close-button">
                    <button @click="closeDialog">x</button>
                </div>
                <div>
                    <div class="input-line">
                        <div>
                            <span>Email:</span>
                        </div>
                        <div>
                            <input type="text" v-model="email">
                        </div>
                    </div>
                    <div class="input-line">
                        <div>
                            <span>Пароль:</span>
                        </div>
                        <div>
                            <input type="password" v-model="password">
                        </div>
                    </div>
                    <div class="input-line">
                        <div></div>
                        <div>
                            <span>Забули пароль?</span>
                        </div>
                    </div>
                    <div class="input-line">
                        <div></div>
                        <div>
                            <button class="btn btn-danger" @click="signIn">Увійти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        email: null,
        password: null
    }),
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    watch: {
        isAuthenticated(val) {
            if(val) {
                this.$store.dispatch('GET_BASIC_USER_DATA', JSON.parse(window.localStorage.getItem('token')));
                this.closeDialog();
            }
        }
    },
    methods: {
        closeDialog() {
            this.$emit('closeDialog');
        },
        signIn() {
            this.$store.dispatch('SIGN_IN', {email: this.email, password: this.password})
        }
    }
}
</script>

<style scoped>
    .modal-background {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        padding: 5px;
        width: 300px;
        border: 1px solid #FFD9FF;
        border-radius: 7px;
        background: none repeat scroll 0 0 #FFFFFF;
    }
    .modal-tab {
        box-shadow: 0 3px 10px rgba(0,0,0,.1);
        padding: 5px;
        border-radius: 6px;
        margin-bottom: 15px;
    }
    .input-line {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin: 4px 0;
    }
    input {
        border: 1px solid #333;
        border-radius: 3px;
        padding: 2px 5px;
        width: 100%;
    }
    .btn-danger {
        background: #BA1010;
        color: #fff;
        border: none;
        padding: 6px 12px;
    }
    .close-button {
        text-align: right;
    }
</style>