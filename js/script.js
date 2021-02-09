

var pippo = new Vue({
    el: '#app',
    data: {
        salvaResponse: [],
        generi: ['All']
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((result) => {
            this.salvaResponse = result.data.response;
            console.log(this.salvaResponse);

            this.salvaResponse.forEach(element => {
                console.log(element.genre);
                if(!this.generi.includes(element.genre)){
                    this.generi.push(element.genre)
                }
                console.log(this.generi);
            });
        })
    },
    methods: {
        filtro(){
            
        }
    }
})