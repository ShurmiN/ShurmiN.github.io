
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
            { id:1, href:'../pages/about.html', text:'О нас', active:'active'}
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
            { address:'Адрес:', email:'Email: ' },
            { phone:'Телефон:', another:'Прочие ссылки: ' }
        ]
    }
})
var main = new Vue({
    el:'#main',
    data:{
        creators:[
            { id:2, name:'Шурмин Павел', src:'../', position:'Единственый программист.' },
        ],
    }
})