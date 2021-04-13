export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
            <div>
                <div v-if="liveuser.user_access === 5" class="account" @click="navToHome()">
                    <img :src="'images/' + liveuser.user_avatar">
                    <h2>{{liveuser.user_name}}</h2>
                </div>
                <div v-else-if="liveuser.user_access === 1" class="account" @click="navToKids()">
                    <img :src="'images/' + liveuser.user_avatar">
                    <h2>{{liveuser.user_name}}</h2>
                </div>
            </div>
                `,

    created: function() {

        if (this.liveuser.user_avatar == null) {
            this.liveuser.user_avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToHome() {
            this.$router.push({ name: "home", params: { currentuser: this.liveuser}});

            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        },

        navToKids(){
            this.$router.push({ name: "kidshome", params: { currentuser: this.liveuser}});

            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
		}
    }
}