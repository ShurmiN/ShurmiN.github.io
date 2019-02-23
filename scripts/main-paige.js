
Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link"> {{ todo.text }} </a>'
})

var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { id:0, href:'pages/news.html', text:'Новости'},
            { id:1, href:'pages/about.html', text:'О нас'}
        ]
    }
})

var main = new Vue({
    el:'#main',
    data:{
        headlines:[
            'О компании:','Преимущества:','Особенности нашего сайта:'
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