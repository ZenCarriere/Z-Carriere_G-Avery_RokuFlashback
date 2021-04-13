import LoginComponent from './components/TheLoginComponent.js';
import AllUsersComponent from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';
import KidsHomeComponent from './components/TheKidsHomeComponent.js';
import MoviesComponent from './components/TheMoviesComponent.js';
import KidsMoviesComponent from './components/TheKidsMoviesComponent.js';
import MusicComponent from './components/TheMusicComponent.js';
import KidsMusicComponent from './components/TheKidsMusicComponent.js';
import TvComponent from './components/TheTvComponent.js';
import KidsTvComponent from './components/TheKidsTvComponent.js';

const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: LoginComponent, beforeEnter: (to, from, next) => {
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {currentuser: user}});
            } else {
                next();
            }
        }},
        { path: '/users', name: 'users', component: AllUsersComponent},
        { path: '/home', name: 'home', component: HomeComponent, props: true},
        { path: '/kidshome', name: 'kidshome', component: KidsHomeComponent, props: true},
        { path: '/movies', name: 'movies', component: MoviesComponent, props: true},
        { path: '/kidsmovies', name: 'kidsmovies', component: KidsMoviesComponent, props: true},
        { path: '/music', name: 'music', component: MusicComponent, props: true},
        { path: '/kidsmusic', name: 'kidsmusic', component: KidsMusicComponent, props: true},
        { path: '/tv', name: 'tv', component: TvComponent, props: true},
        { path: '/kidstv', name: 'kidstv', component: KidsTvComponent, props: true}

    ]
});

(() => {
    const vm = new Vue({
        data: {
            authenticated: false,
            isAdmin: false,
            currentUser: undefined
        },

        created: function() {
            
        },

        methods: {
            logout() {
                if(localStorage.getItem('cacheduser')){
                    localStorage.removeItem('cacheduser');
                }
                this.$router.push({name: "root" });
                this.currentUser = undefined;
            },

            authenticateuser(user) {
                this.currentUser = user;
            }
        },

        components: {

        },

        router

    }).$mount("#app");
})();