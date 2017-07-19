// define navigation bar
module.exports = [

    {left: [
        {title: 'Home',      path: '/',          component: 'Home',      icon: 'fa fa-home', submenu: null},
        {title: 'Workshops', path: '/Workshops', component: 'Workshops', icon: null,         submenu: [
            {title: 'Actors',        path: '/Workshops/Actors',        component: null, icon: null},
            {title: 'Screenwriting', path: '/Workshops/Screenwriting', component: null, icon: null},
            {title: 'Production',    path: '/Workshops/Production',    component: null, icon: null}
        ]},
        {title: 'About',     path: '/About',     component: 'About',     icon: null,        submenu: null}
    ]},

    {right : [
        {title: 'Enter',      path: '#',       component: null, icon: null, submenu: [
            {title: 'Login',  path: '/LogIn',  component: null, icon: null},
            {title: 'SignUp', path: '/SignUp', component: null, icon: null}
        ]}
    ]}

]
