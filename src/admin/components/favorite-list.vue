<template lang="pug">
li.main__item
    .main__item-content
        .main__item-img
            img(:src="'http://books.google.com/books/content?id=' + favorite.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'")
        .main__item-info
            .description__info-rating
                .description__info-stars
                    ul.description__info-list
                        li.description__info-item 
                        li.description__info-item 
                        li.description__info-item
                        li.description__info-item
                        li.description__info-item   
            .main__item-title {{favorite.volumeInfo.title}}
            .main__item-desc {{favorite.volumeInfo.description}}
    hr.main__item-devider
    .pagination 

</template>
<script>
export default {
        props: {
            favorite: {
                type:Object,
                default:() => ({}),
                required:true
            },
        }
}
</script>>