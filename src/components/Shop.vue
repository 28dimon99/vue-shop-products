<template>
    <v-row>
        <v-col class="shop__component">
            <h1 class="py-4">Shops</h1>
            <v-row class="cafe__list mx-2 mb-3">
                <v-col
                        v-for="product in products"
                        :key="product.id"
                        :products="products"
                        md="4"
                >
                    <v-card class="cafe__card">

                        <v-img
                                height="250"
                                width="450"
                                :src="product.image"

                        />
                        <v-card-title class="d-flex justify-center">
                            <router-link to="/cafe/view">{{product.model}}</router-link>
                        </v-card-title>
                        <v-card-text>
                            <p class="text-body-2">{{product.price}}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    //import firebase from "firebase/app";
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    export default {
        name: "Shop",
        data(){
          return{
              //shops : []
          }
        },
        methods:{
            ...mapMutations({
                setProduct: 'shopModule/setProduct'
            }),
            ...mapActions({
                productShop : 'shopModule/productShop'
            })
            /*async shopApi(){
                try{
                    const {data} = await firebase.get(`https://vue-shop-products-default-rtdb.europe-west1.firebasedatabase.app/products`)
                    console.log(this.shops.push(data))
                }catch (e) {
                   console.log(e)
                }
           }*/
        },
        computed: {
            ...mapState({
                products: state => state.products,
            }),
            ...mapGetters({
                products: 'shopModule/products'
            })
        },
        mounted() {
            this.productShop()
            /*this.shopApi()*/
        }
    }
</script>

<style scoped>

</style>