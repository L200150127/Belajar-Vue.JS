Vue.component('daftar', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

let app = new Vue({
    el: '#app',
    data: {
        daftarSiswa: [
            {
                id: 0, text: 'Lyon'
            },
            {
                id: 1, text: 'Fendy'
            },
            {
                id: 2, text: 'Razi'
            },
            {
                id: 3, text: 'Doni'
            }
        ]
    }
});
