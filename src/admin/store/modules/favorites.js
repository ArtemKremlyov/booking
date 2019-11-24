export default {
    namespaced:true,
    state: {
        favorites: [],
    },
    mutations:{
        SET_FAVORITES(state,favorites){
            state.favorites = favorites
        },
        ADD_FAVORITES(state,favorite){
            if(state.favorites.id === favorite.id){
                console.log("Уже есть в избранном!")
            }
            else{
            state.favorites.push(favorite)
            console.log(favorite)
            console.log(state.favorites)
            }
        }
    }
   
}