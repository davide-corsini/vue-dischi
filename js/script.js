

var pippo = new Vue({
    el: '#app',
    data: {
        salvaResponse: []
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((result) => {
            this.salvaResponse = result.data.response;
            console.log(this.salvaResponse);

            
        })
    }
})