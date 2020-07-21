<template>
    <v-row>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">Всього замовлень</v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                </v-list-item>

            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">Online</v-list-item-title>
                    </v-list-item-content>

                    <div>
                        <h1>{{getUsersOnline}}</h1>
                    </div>
                </v-list-item>

            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">Користувачів</v-list-item-title>
                    </v-list-item-content>

                    <div>
                        <h1>{{usersQuantity}}</h1>
                    </div>
                </v-list-item>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>

export default {
    props: {
        'usersQuantity': {
            type: Number,
            required: true
        }
    },
    computed: {
        getUsersOnline () {
            return this.$store.getters.getUsersOnline
        }
    }
}
</script>

<style>

</style>