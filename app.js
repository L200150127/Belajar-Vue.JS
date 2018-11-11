Vue.component('daftar', {
    props: ['todo'],
    template: '<li><strong>{{ todo.text }}</strong></li>'
});

Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
  `
})



let app = new Vue({
    el: '#app',
    data: {
        daftarSiswa: [{
                id: 0,
                text: 'Lyon'
            },
            {
                id: 1,
                text: 'Fendy'
            },
            {
                id: 2,
                text: 'Razi'
            },
            {
                id: 3,
                text: 'Doni'
            }
        ]
    }
});

let app2 = new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {
                id: 0,
                title: 'Makan Minum',
                content: 'Kita sebagai manusia harus makan dan minum'
            },
            {
                id: 1,
                title: 'Cinta Sejati',
                content: 'Kita sebagai manusia harus mempunyai Cinta sejati'
            },
            {
                id: 2,
                title: 'Global Warming',
                content: 'Pemanasan global sungguh berefek buruk'
            },
        ],
        postFontSize: 1
    }
});