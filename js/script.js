

var pippo = new Vue({
    el: '#app',
    data: {
        title: '',
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((result) => {
            
        })
    }
})