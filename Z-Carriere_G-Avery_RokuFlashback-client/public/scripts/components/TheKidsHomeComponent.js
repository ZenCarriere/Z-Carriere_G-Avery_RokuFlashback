export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="kidshome">
        <nav class="kidmenu">
		    <ul>           
                <li><p>Home</p></li>
                <li @click="GoKidsMovie()"><p>Movies</p></li>
                <li @click="GoKidsTv()"><p>Television</p></li>
                <li @click="GoKidsMusic()"><p>Music</p></li>			
			</ul>
	    </nav>
        <h2 class="new">Just Added</h2>

        <div class="ja">
            <div class="videobanners">
                <img src="images/looneyTunesLogo.png" alt="tunes banner" class="videobanner" @click="GoKidsTv()">
                <img src="images/starWars_aNewHopeLogo.png" alt="starwars banner" class="videobanner" @click="GoKidsMovie()">
            </div>
            <div class="audiobanners">
                <img src="images/theJacksonFive_iWantYouBackLogo.png" alt="abbey road banner" class="audiobanner" @click="GoKidsMusic()">
                <img src="images/buddyHolly_buddyHollyLogo.png" alt="abbey road banner" class="audiobanner" @click="GoKidsMusic()">
                <img src="images/daftPunk_homeworkLogo.png" alt="abbey road banner" class="audiobanner" @click="GoKidsMusic()">
            </div>
        </div>

        <img src="images/roku.svg" alt="Roku logo" class="footerroku" @click="logout()">
        <hr>
        <nav class="socials">
		    <ul>           
                <li><a href="https://www.facebook.com/"><img src="images/facebook.svg" alt="Facebook logo" class="ficon"></a></li>
                <li><a href="https://twitter.com/"><img src="images/twitter.svg" alt="Twitter logo" class="ticon"></a></li>
                <li><a href="https://www.youtube.com/"><img src="images/youtube.svg" alt="YouTube logo" class="yicon"></a></li>
                <li><a href="https://www.instagram.com/"><img src="images/instagram.svg" alt="Instagram logo" class="iicon"></a></li>			
			</ul>
	    </nav>
        <hr class="last">
</div>
    `,

    created: function() {
        this.loadMedia(null, 'movies');
        this.$emit('setuser', this.currentuser);
        document.getElementById('bg').style.backgroundImage = 'url("../images/kidsbackground.jpg")';
    },

    methods: {
        loadMedia(filter, mediaType) {
            let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.retrievedMedia = data;
            })
        .catch((err) => console.error(err));
        },

        GoKidsMusic() {

            this.$router.push({ name: "kidsmusic"});
        },
    
        GoKidsMovie() {
    
            this.$router.push({ name: "kidsmovies"});
        },
    
        GoKidsTv() {
    
            this.$router.push({ name: "kidstv"});
        }
    }
}