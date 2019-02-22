Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('comment', {
    props:['word'],
    template:`<div>
        <hr>
        <h4>{{ word.name }}</h4>
        <p>{{ word.comment }}</p>
    </div>`
})
Vue.component('author-date', {
    props:['author'],
    template:`<div class="author_date col-sm-12 col-lg-11 col-12 mx-auto">
        <p>{{ author.name }}</p>
        <p>{{ author.date }}</p>
    </div>`
})
Vue.component('description', {
    props:['item'],
    template:`<div class="description row">
        <a :href="item.href" class="col-sm-12 col-lg-11 col-12 mx-auto link">
            <img :src="item.src[0]" class="news_img">
        </a>
        <p class="col-sm-12 col-lg-10 col-12 mx-auto">{{ item.description }}</p>
    </div>`
})
Vue.component('news', {
    props:['element'],
    template:`<div class="container">
        <div class="row">
            <author-date :author="element"></author-date>
        </div>
        <h3 class="news_header col-11 mx-auto"><a v-bind:href="element.href" class="header-link">{{ element.title }}</a></h3>
        <description :item="element"></description>
        <hr>
    </div>`
})
Vue.component('small-news', {
    props:['unit'],
    template:`<a class="row description header-link" :href="unit.href">
        <div class="col-lg-6 col-md-6 col-sm-6 col-6 img-link">
            <img :src="unit.src[0]" class="news_img">
        </div>
        <h3 class="news_header header-link col-lg-5 col-5 mr-auto p-0" style="text-align: left">{{ unit.title }}</h3>
    </a>`
})
var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { id:0, href:'../pages/news.html', text:'Новости', active:'active'},
            { id:4, href:'../pages/about.html', text:'О нас'}
        ]
    }
})
var footer = new Vue({
    el:'.footer',
    data:{
        footerStyle:{
            footer:'col-6 p-0'
        },
        inf:[
            { address:'Адрес: Тверская, 55а, Ижевск, Pеспублика Удмуртия, 426052', email:'Email: shurmin99@bk.ru' },
            { phone:'Телефон: +7 950 823 74 53', another:'Прочие ссылки: https://vk.com/i3838483' }
        ]
    }
})
var main = new Vue({
    el:'#main',
    data:{
        news:[
            { 
                id:0,
                name:'Жукова Елена Вячеславовна',
                date:'8 февраля 2018г.',
                title:'Мифы о корме для кошек',
                src:['../assets/news1.1.png','../assets/news1.2.jpg'],
                href:'news_1.html',
                description:`Существуют разные мифы о доступных кормах, как Whiskas. Принимая их за чистую монету, многие 
                владельцы питомцев решают отказаться от готового рациона в пользу еды со стола или более дорогого 
                корма. Но стоит ли верить тому, что говорят? Давайте разберемся.`
            },
            { 
                id:1,
                name:'Алексей Сулин',
                date:'11 мая 2018г.',
                title:'Почему в производстве кормов для домашних животных важен научный подход?',
                src:['../assets/news2.1.jpg','../assets/news2.2.jpg'],
                href:'news_2.html',
                description:`Кошки, как и люди, ежедневно нуждаются в получении определенного количества питательных веществ для поддержания 
                работы своего организма. Благодаря Центру питания домашних животных WALTHAM, существующему уже более 50 лет, 
                Whiskas создает сбалансированное и полноценное питание для питомцев разных возрастов. Мы контролируем более 
                40 параметров, для того чтобы полностью обеспечить потребности вашего питомца в питательных веществах!`
            },
            { 
                id:2,
                name:'Серёжина Людмила Абрамовна',
                date:'16 марта 2018г.',
                title:'Эволюция питания кошки',
                src:['../assets/news3.1.jpg'],
                href:'news_3.html',
                description:`Одомашнивание кошек связывают с началом развития земледелия более 9 тысяч лет назад. Стараясь защитить запасы 
                зерна от грызунов, люди приманивали диких степных кошек ближе к своим поселениям. Взаимовыгодный союз превратился в долгую 
                дружбу, которая, несмотря на смену образа жизни, не повлияла на природные инстинкты и пищевые потребности последних.`
            },
        ],
        name:'',
        comment:'',
        comments:[
        ],
        nextCommentId:0,
        list:false,
        full:true,
        search:''
    },
    methods: {
        addNewComment: function () {
          this.comments.push({
            id: this.nextCommentId++,
            name: this.name,
            comment: this.comment
          })
          this.name = '',
          this.comment = ''
        },
    },
    computed: {
        filterNews: function () {
            return this.news.filter(function (unit) {
            return unit.title.indexOf(this.search) !== -1
            }.bind(this))
        }
    }
})  