Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')"
      class="btn btn-primary">
        Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
    `
});
Vue.component('task-list', {
    template: '<div><task :key="task.id" v-for="task in tasks">{{ task.task }}</task></div>',
    data() {
        return {
            tasks: [
                {id:0, task: 'Mengerjakan PR', complete: false},
                {id:1, task: 'Makan Siang', complete: true},
                {id:2, task: 'Makan Malam', complete: true},
                {id:3, task: 'Bekerja Bagai Quda', complete: false},
                {id:4, task: 'Tidur Siang', complete: true},
                {id:5, task: 'Mengerjakan KP', complete: true},
            ]
        };
    }
});
Vue.component('task', {
    template: '<li><slot></slot></li>'
});
Vue.component('card', {
    props: ['title', 'subtitle', 'body'],
    data() {
        return {
            isVisible:true
        };
    },
    template: `
        <div class="card" v-show="isVisible">
            <div class="card-body">
                <h5 class="card-title">
                    {{ title }}
                    <button type="button" @click="hide"
                    class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
                <p class="card-text">{{ body }}</p>
            </div>
        </div>
    `,
    methods: {
        hide() {
            this.isVisible = false;
        }
    }
});
Vue.component('modal', {
    props: ['title', 'close','save', 'idc'],
    template: `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">{{ title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ close }}</button>
                    <button type="button" class="btn" :class="{'btn-primary':'tombol'}">{{ save }}</button>
                </div> 
            </div>
        </div>
    </div>`
})
Vue.component('tabs', {
    template: `
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="tab in tabs">
                <a class="nav-link" :class="{'active':tab.isActive}" 
                :href="tab.href" @click="selectTab(tab)">
                {{ tab.name }}</a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
    `,
    data(){
        return { tabs:[] };
    },
    created(){
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});
Vue.component('tab', {
    template: `
    <div class="tab-pane container" :class="{'active':isActive}" role="tab">
        <slot></slot>
    </div>`,
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
})

// Untuk Index
const app = new Vue({
    el: '#app',
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
        postFontSize: 1,
        showModal: false,
        tombol: true
    }
    
});

// Untuk Menu
const root = new Vue({
    el: '#root' 
});