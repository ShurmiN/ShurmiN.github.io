Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('comment', {
    props: ['word'],
    template: `<div>
        <hr>
        <h4>{{ word.name }}</h4>
        <p>{{ word.comment }}</p>
    </div>`
})
Vue.component('author-date', {
    props: ['author'],
    template: `<div class="author_date col-sm-12 col-lg-11 col-12 mx-auto">
        <p>{{ author.name }}</p>
        <p>{{ author.date }}</p>
    </div>`
})
Vue.component('description', {
    props: ['item'],
    template: `<div class="description row">
        <a :href="item.href" class="col-sm-12 col-lg-11 col-12 mx-auto link">
            <img :src="item.src[0]" class="news_img">
        </a>
        <p class="col-sm-12 col-lg-10 col-12 mx-auto">{{ item.description }}</p>
    </div>`
})
Vue.component('news', {
    props: ['element'],
    template: `<div class="container">
        <div class="row">
            <author-date :author="element"></author-date>
        </div>
        <h3 class="news_header col-11 mx-auto"><a v-bind:href="element.href" class="header-link">{{ element.title }}</a></h3>
        <description :item="element"></description>
        <hr>
    </div>`
})
Vue.component('small-news', {
    props: ['unit'],
    template: `<a class="row description header-link" :href="unit.href">
        <div class="col-lg-6 col-md-6 col-sm-6 col-6 img-link">
            <img :src="unit.src[0]" class="news_img">
        </div>
        <h3 class="news_header header-link col-lg-5 col-5 mr-auto p-0" style="text-align: left">{{ unit.title }}</h3>
    </a>`
})
var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass: {
            mainNav: 'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu: 'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url: [
            { id: 0, href: '../pages/news.html', text: 'Новости', active: 'active' },
            { id: 1, href: '../pages/about.html', text: 'О нас' }
        ]
    }
})
var footer = new Vue({
    el: '.footer',
    data: {
        footerStyle: {
            footer: 'col-6 p-0'
        },
        inf: [
            { address: 'Адрес: Тверская, 55а, Ижевск, Pеспублика Удмуртия, 426052', email: 'Email: shurmin99@bk.ru' },
            { phone: 'Телефон: +7 950 823 74 53', another: 'Прочие ссылки: https://vk.com/i3838483' }
        ]
    }
})
var main = new Vue({
    el: '#main',
    data: {
        news: [
            {
                id: 0,
                name: 'Дмитрий Иванович Шольц',
                date: '15.02.2019',
                title: 'Портал RAWG нарисовал волны интереса для игр, вышедших в январе',
                src: ['../pictures\news1.1.jpg'],
                href: 'news1.html',
                description: `Сервис RAWG рассказал о январских игровых премьерах с помощью особых графиков: волн интереса. 
                В поле зрения портала попали три главные премьеры начала года: Kingdom Hearts III, Resident Evil 2 Remake и Ace Combat 7: 
                Skies Unknown. Для этого использованы данные тысяч профилей PSN, Xbox и Steam, подключенных к RAWG.`
            },
            {
                id: 1,
                name: 'Андрей Галадей',
                date: '15.02.2019',
                title: 'ехнология NVIDIA DLSS «замыливает» картинку в Metro: Exodus',
                src: ['../pictures\news2.1.jpg'],
                href: 'news2.html',
                description: `4A Games выпустила патч первого дня для Metro: Exodus, который, как ожидалось, 
                должен был улучшить работу интеллектуального сглаживания DLSS. 
                Однако этого не произошло, а сглаживание всё также «замыливает» картинку.`
            },
            {
                id: 2,
                name: 'Михаил Шевкун',
                date: '19.02.2019.',
                title: 'Xbox Live: на прошлой неделе Crackdown 3 была популярнее Metro: Exodus и Far Cry New Dawn',
                src: ['../pictures\news3.1.jpg'],
                href: 'news3.html',
                description: `Портал True Achievements опубликовал еженедельные чарты самых популярных игр в сервисе Xbox Live.`
            },
        ],
        name: '',
        comment: '',
        comments: [
        ],
        nextCommentId: 0,
        list: false,
        full: true,
        search: ''
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