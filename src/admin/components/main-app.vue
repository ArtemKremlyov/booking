<template lang="pug">
.main( :class="{searching: isSearch,selected: isSelected,favorite: favoriteMode}")
            .main__left
              .main__main(v-if="!isSelected")
                .main__right-search.mobile(v-if="!favoriteMode")
                  form(id="book-search" @submit.prevent="search('1')").toolbar
                      button.toolbar__favorites(@click.prevent="selectFavorit")
                          .toolbar__favorites-icon
                          .dropdown Избранное
                          
                      .toolbar__search
                          input(type="text" placeholder="Поиск" v-model="searchTerm").toolbar__search-input
                          button(type="submit").toolbar__search-button
                              .toolbar__search-icon


                .main__left-pic
                .main__left-title Библиотека
              .main__main(v-else)
                fullDesc(
                  :searchResults.items="searchResults"
                  :nextInfo="nextInfo"
                  @return="cancelledTarget()"
                  @toFavorites="selectFavorit()"
                )  
            .main__right
              .main__right-search(v-if="!favoriteMode")
                form(id="book-search" @submit.prevent="search(1)").toolbar
                    button.toolbar__favorites(@click.prevent="selectFavorit" type="button")
                        .toolbar__favorites-icon
                        .dropdown Избранное
                        
                    .toolbar__search
                        input(type="text" placeholder="Поиск" v-model="searchTerm" @input="switchButton('search')" autocomplete="yes").toolbar__search-input
                        button(type="submit" :class="{writing: isWriting}" v-if="!isWriting").toolbar__search-button
                              .toolbar__search-icon
                        button(type="button" v-else @click.prevent="switchButton('clear')").toolbar__search-button
                              .toolbar__search-icon.clear    
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
                  .pagination(:class="{disabled: paginationDisabled}")  
                    ul.pagination__list
                      button.pagination__item.prev(@click.prevent="search(currentIndex-=perPage)" :class="{disabled: disabled}") «
                      button.pagination__item.next(@click.prevent="search(currentIndex+=perPage)") »  
              .main__right-favorite(v-else) 
                favorite(
                  @cancelledMode="cancellFavorit()"
                )       
            
</template>
<script>
import axios from "axios"
import lodash from "lodash"
import Paginate from 'vuejs-paginate'
import { log } from 'util'
import {mapMutations} from "vuex"
export default {
  data() {
        return {
          searchTerm: '',
          searchResults: [],
          isSelected:false,
          perPage:4,
          pagination:{},
          nextInfo:{},
          favoriteMode:false,
          isSearch:false,
          currentIndex:0,
          totalPage:0,
          paginationDisabled:true,
          disabled:false,
          isWriting:false,
        }
      },


      components: {
          fullDesc: () => import("./full-desc"),
          favorite: () => import("./favorite-mode")
      },

    methods:{
      ...mapMutations["ADD_FAVORITES"],
        search(currentIndex) {
          if(currentIndex>0){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q= ` + this.searchTerm + `&printType=all` + `&projection=full` + `&maxResults=4` + `&startIndex=${currentIndex}`)
            .then(response => {
              this.searchResults = response.data
              this.totalPage = Math.ceil(this.searchResults.totalItems / this.perPage)
              this.disabled = false
              this.paginationDisabled = false;
              this.isSearch = true;
              this.isWriting = true;
            })
            .catch(e => {
              console.log(e)
            })
            }
            else{
              this.disabled = true
              this.currentIndex = 1
            }
        },
        selectTarget(index,gettingInfo){
            this.isSelected = index
            this.isSelected = true
            this.nextInfo = gettingInfo
          
        },
        selectFavorit() {
          this.favoriteMode = true
        },
        cancellFavorit(){
          this.favoriteMode = false
        },
        cancelledTarget(){
          this.isSelected = false;
        },
        switchButton(operation){
          if (operation === "clear"){
          this.searchTerm = ""
          this.isWriting = false
          }
          else if (operation === "search"){
            this.isWriting = false;
          }
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
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
}
.dropdown{
    display: none;
    position: absolute;
    background: #4B5959;
    font-size: .875rem;
    font-weight: 400;
    color: #fff;
    padding: 10px 18px;
    border-radius: 6px;
    top: -45px;
    right: -33px;
    &:before{
        position: absolute;
        left: 44%;
        top: 35px;
        transform: rotate(180deg);
        content: "";
        width: 0;
        height: 0;
        border-color: transparent transparent #4B5959;
        border-style: solid;
        border-width: 0 8.5px 8px;
    }
}
</style>