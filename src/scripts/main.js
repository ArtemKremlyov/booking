import Vue from "vue"
import axios from "axios"
import lodash from "lodash"

new Vue({
    el:"#app",
    data() {
        return {
          searchTerm: '',
          searchResults: [],
          isSelected:false,
          perPage:4,
          pagination:{}
          
        }
      },  
    methods:{
        search() {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
            .then(response => {
              this.searchResults = response.data
              console.log(this.collection)
              return this.paginate(this.searchResults)
            })
            .catch(e => {
              console.log(e)
            })
        },
        selectTarget(index){
            this.isSelected = index
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
})

