<template lang="pug">
.favorite
    .favorite__head
        button.favorite__head-button(@click="cancelledFavoriteMode")    
        .favorite__head-title Избранное
    .favorite__content
        ul.main__list
          favorite-list(
            :favorite="favorite"
            v-for="favorite in newFavorites.favorites"
            :key="newFavorites.id"
          )
        .pagination  
            ul.pagination__list
                li.pagination__item.prev «
                li.pagination__item(v-for="p in pagination.pages" @click.prevent="setPage(p)") {{p}}
                li.pagination__item.next »   
              


</template>

<style scoped>
@import '../../styles/mixins.pcss';
@import '../../styles/layout/base.pcss';
@import '../../styles/blocks/one.pcss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i,900,900i&display=swap');
</style>
<script>
import { mapActions, mapState } from 'vuex'
import lodash from "lodash"
export default {
    data:() =>{
      return{
        favoriteMode:false,
        perPage:4,
        pagination:{}
      }
    },
    components:{
      favoriteList: () => import("./favorite-list"),
    },
    computed:{
        ...mapState({
            newFavorites:state => state.favorites
        }),
        collection(){
          return this.paginate(this.newFavorites.favorites)
        }
    },
    methods:{
      cancelledFavoriteMode(){
        this.favoriteMode = true
        this.$emit("cancelledMode")
      },
      setPage(p){
            console.log(this.collection)
            this.pagination = this.paginator(this.newFavorites.length,p)
        },
        paginate(data) {
            return _.slice(data, this.pagination.startIndex,this.pagination.endIndex + 1)
        },
        paginator(totalItems,currentPage){
            var startIndex = (currentPage-1)*this.perPage,
            endIndex = Math.min(startIndex + this.perPage - 1,totalItems - 1);
            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: _.range(1,Math.ceil(totalItems/this.perPage)+ 1)
            };
        }  
    },
    created(){
        this.setPage(1)
    },
}
</script>
<style scoped lang="postcss">
@import '../../styles/mixins.pcss';
.favorite__head{
  display: flex;
  align-items: center;
  margin-bottom: 57px;

    @include phones{
      position: absolute;
      top: 0;
      height: 44px;
      width: 100%;
      background-color: #F3F3F3;
    }
}
.favorite__head-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
}
.favorite__head-button{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #F3F3F3;
  position: relative;
  margin-right: 13px;
    
    &:after{
      content: "";
      width: 24px;
      display: flex;
      height: 24px;
      background: svg-load('arrow-left.svg', fill=4B5959, width=100%, height=100%) no-repeat;
    }
}
</style>