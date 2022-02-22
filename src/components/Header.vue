<template>
    <div>
        <v-app-bar
                app
                color="green"
                dark
        >
            <v-col class="font-weight-bold white--text d-flex " >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-app-bar-title class="d-flex align-items-center pa-2">iFood</v-app-bar-title>

            </v-col>

        </v-app-bar>
        <v-navigation-drawer v-model="drawer"
                             absolute
                             left
                             temporary
                          >
            <v-list
                    nav
                    dense
            >
            <v-list-item-group
                    v-model="group"
                    active-class="text--accent-4"
            >
                <v-list-item>
                    <v-list-item-title>
                        <router-link to="/">List of cafes</router-link>

                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <router-link to="/shop">Shop</router-link>

                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item>

            </v-list-item-group>
            </v-list>

        </v-navigation-drawer>
    </div>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                drawer: false,
                group: null
            }
        }
    }
</script>

<style scoped>
    a{
        list-style: none;
    }

</style>