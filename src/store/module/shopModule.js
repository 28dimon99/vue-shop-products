import firebase from 'firebase/app'
export const shopModule = {
    state: () =>({
        products: []
    }),
    mutations:{
        setProduct(state, products){
             state.products = products
        }
    },
    actions: {
        async productShop({commit}) {
            try {
                const data = await firebase.shopModule.firestore('https://console.firebase.google.com/project/vue-shop-products/database/vue-shop-products-default-rtdb/data//products')
                console.log(data)
                commit('setProduct', this.products.push(data))

            } catch (error) {
                console.log(error)
            }
        }
    },
    getters:{
        products(state){
            return state.products
        }
    },
    namespaced: true
};
