<template lang="pug">
.main
            .main__left
              .main__main(v-if="!isSelected")
                .main__left-pic
                .main__left-title Библиотека
              .main__main(v-else)
                fullDesc(
                  :searchResults.items="searchResults"
                  :nextInfo="nextInfo"
                )  
            .main__right
                form(id="book-search" @submit.prevent="search").toolbar
                    button.toolbar__favorites
                        .toolbar__favorites-icon
                    .toolbar__search
                        input(type="text" placeholder="Поиск" v-model="searchTerm").toolbar__search-input
                        button(type="submit").toolbar__search-button
                            .toolbar__search-icon
                ul.main__list
                  li.main__item(v-for="(book,index) in searchResults.items" :key="index" @click="selectTarget(index,searchResults.items[index])" :class="{selected: isSelected===index}")
                    .main__item-content
                      .main__item-img
                        img(:src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'")
                      .main__item-info
                        .description__info-rating
                          .description__info-stars
                              ul.description__info-list
                                  li.description__info-item
                                  li.description__info-item
                                  li.description__info-item
                                  li.description__info-item
                                  li.description__info-item   
                        .main__item-title {{book.volumeInfo.title}}
                        .main__item-desc {{book.volumeInfo.description}}
                  hr.main__item-devider
                  .pagination  
                    ul.pagination__list
                      li.pagination__item.prev «
                      li.pagination__item(v-for="p in pagination.pages" @click.prevent="setPage(p)")
                      li.pagination__item.next »              
</template>
<script>
import axios from "axios"
import lodash from "lodash"
import { log } from 'util'
export default {
  data() {
        return {
          searchTerm: '',
          searchResults: [],
          isSelected:false,
          perPage:4,
          pagination:{},
          nextInfo:{}
        }
      },

      components: {
          fullDesc: () => import("./full-desc"),
      },

    methods:{
        search() {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
            .then(response => {
              this.searchResults = response.data
              console.log(this.searchResults)
              return this.paginate(this.searchResults)
            })
            .catch(e => {
              console.log(e)
            })
        },
        selectTarget(index,gettingInfo){
            this.isSelected = index
            this.isSelected = true
            this.nextInfo = gettingInfo
            console.log(this.nextInfo)
        },
        setPage(p){
            this.pagination = this.paginator(this.searchResults.length,p)
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
    computed:{
        collection() {
            return this.paginate(this.searchResults)
        }
    },


}
</script>
<style lang="postcss">
@import '../../styles/mixins.pcss';
@import '../../styles/layout/base.pcss';
@import '../../styles/blocks/one.pcss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i,900,900i&display=swap');
.main__left-pic{
  background-image: url("../../images/content/Bitmap.png");
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>