<template lang="pug">
.description
        .description__info
            .description__img(@click="test")
            .description__infor
                    .description__info-title {{nextInfo.volumeInfo.title}}
                    .desctiption__info-author Авторов: 
                        span wdawddaw
                    .description__info-year Год: 
                        span 2020
                    .description__info-rating
                        .description__info-stars
                            ul.description__info-list
                                li.description__info-item
                                li.description__info-item
                                li.description__info-item
                                li.description__info-item
                                li.description__info-item
                        .description__info-number Рейтинг: 
                            span 2,5
                    .description__info-tools
                        .description__info-favorites В избранное
                        .description__info-share Поделиться
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
  flex: 0 0 auto;
}
</style>
<script>
export default {
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
        }
    },
    methods:{
        test(){
            console.log(this.searchResults)
            console.log("ok")
        },
    }
}
</script>