const app = new Vue({
    el: '#app',
    data: {
        database: [],
        genreValue: ""
    },
    created() {
        // axios.get("http://localhost/php/php-ajax-dischi/backend.php")
        // .then((response) => {
        //     this.database = response.data;
        // });
        this.apiCall();
    },
    methods: {
        apiCall() {
            axios.get("http://localhost/php/php-ajax-dischi/backend.php", {
                params: {
                    genre: this.genreValue
                }
            })
            .then((response) => {
                this.database = response.data;
            });
        }
    }
});