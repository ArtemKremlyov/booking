<template lang="pug">
.description
        .description__info
            .description__control
                button.description__control-button(@click="returnBack")
            .description__head    
                img.description__img(:src="'http://books.google.com/books/content?id=' + nextInfo.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'")
                .description__infor
                        .description__info-title {{nextInfo.volumeInfo.title}}
                        .desctiption__info-author(v-if="nextInfo.volumeInfo.authors") Автор: 
                            span {{bookAuthors(nextInfo)}}
                        .description__info-year(v-if="nextInfo.volumeInfo.publishedDate") Год: 
                            span {{nextInfo.volumeInfo.publishedDate}}
                        .description__info-rating(v-if="nextInfo.volumeInfo.ratingsCounte")
                            .description__info-stars
                                ul.description__info-list
                                    li.description__info-item
                                    li.description__info-item
                                    li.description__info-item
                                    li.description__info-item
                                    li.description__info-item
                            .description__info-number Рейтинг: 
                                span {{nextInfo.volumeInfo.ratingsCount}}
                        .description__info-tools
                            button.description__info-favorites( @click="addFavorite") В избранное
                            button.description__info-share Поделиться
        .description__content
            .description__content-title Отрывок книги
            .description__content-text {{nextInfo.volumeInfo.description}} 
</template>
<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';
@import '../../styles/layout/base.pcss';
@import '../../styles/blocks/two.pcss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i,900,900i&display=swap');
.description__img{
  width: 177px;
  height: 242px;
  margin-right: 37px;
  background-image: url("../../images/content/rev-img.png");
  background-size: cover;
  box-shadow: 0px 14px 21px rgba(0, 0, 0, 0.397532);
  flex: 0 0 auto;

  @include phones{
      width: 100%;
      height: 444px;
      margin-bottom: 24px;
      margin-right: 0;
  }
}
</style>
<script>
import {mapMutations,mapState} from "vuex"
import { log } from 'util'
export default {
    data: () => {
        return{
            favoriteMode:false,
            isSelected:true,
            isInFavorite:false
        }
    },
    props: {
        searchResults: {
            type:Object,
            default:() => ({}),
            required:true
        },
        nextInfo: {
            type:Object,
            default:() => ({}),
            required:true
        },
    },
    computed:{
        ...mapState({
            newFavorites:state => state.favorites
        }),
    }, 
    methods:{
        ...mapMutations("favorites",["ADD_FAVORITES"]),
        addFavorite(){
            console.log("click")
            this.ADD_FAVORITES({...this.nextInfo})
            this.favoriteMode = true;
            this.isInFavorite = true;
        },
        bookAuthors(book) {
            let authors = book.volumeInfo.authors;
            if (authors.length < 3) {
                authors = authors.join(' , ')
            }
            else if (authors.length > 2) {
                let lastAuthor = ' and ' + authors.slice(-1);
                authors.pop()
                authors = authors.join(', ')
                authors += lastAuthor
            }
            else if (!book.volumeInfo.authors){
                console.log("blank")
            }
            return authors
        },
        returnBack(){
            this.favoriteMode=false;
            this.$emit("return")
        },
        toFavorite(){
            this.$emit("toFavorites")
        }
    }
}
</script>