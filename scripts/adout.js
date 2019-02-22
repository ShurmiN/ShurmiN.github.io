
Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('about',{
    props: ["user"],
    template:`<div>
                <img class="avatar" :src='user.src'>
                <p><span>{{ user.name }}</span></p>
                <p>{{ user.position }}</p>
            </div>`
})
var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { id:0, href:'../pages/news.html', text:'Новости'},
            { id:4, href:'../pages/about.html', text:'О нас', active:'active'}
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
        creators:[
            { id:0, name:'Кот борис', src:'../assets/boris.jpg', position:'Исполнительный директор.' },
            { id:1, name:'Кот шеба', src:'../assets/sheba.jpg', position:'Креативный директор.' },
            { id:2, name:'Васильев Алексей', src:'../assets/vasilyev.jpg', position:'Главный программист.' },
            { id:3, name:'Кот матроскин', src:'../assets/matroskin.jpg', position:'Главный бухгалтер.' }
        ],
    }
})