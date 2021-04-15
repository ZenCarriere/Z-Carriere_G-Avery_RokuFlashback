export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="kidshome">
        <nav class="kidmenu">
		    <ul>           
            <li @click="GoKidsHome()"><p>Home</p></li>
                <li @click="GoKidsMovie()"><p>Movies</p></li>
                <li @click="GoKidsTv()"><p>Television</p></li>
                <li><p>Music</p></li>			
			</ul>
	    </nav>
        <div class="audioplayer">
            <div class="audiodetails">
                <h3 class="audiotitle">{{currentMediaDetails.kidsmusic_title}}</h3>
                <h4 class="audioartist">{{currentMediaDetails.kidsmusic_artist}}</h4>
                <h4 class="audioyear">{{currentMediaDetails.kidsmusic_year}}</h4>
                <p class="audiodesc" v-html="currentMediaDetails.kidsmusic_desc"></p>
            </div>
            <img :src="'../images/' + currentMediaDetails.kidsmusic_cover" alt="media thumb" class="audiothumb">
            <audio autoplay muted controls :src="'audio/' + currentMediaDetails.kidsmusic_audio" class=""></audio>
        </div>
    
        <div class="genres">
        <div class="square kidgreen">
                <h3>Pop</h3>
            </div>

            <div class="square kidyellow hidden">
                <h3>Rock</h3>
            </div>

            <div class="square kidmagenta">
                <h3>Jazz</h3>
            </div>

            <div class="square kidred hidden">
                <h3>Country</h3>
            </div>

            <div class="square kidblue">
                <h3>Blues</h3>
            </div>

            <div class="square kidorange hidden">
                <h3>Funk</h3>
            </div>
        </div>

        <div class="audiocovercontainer">
            <img v-for="media in retrievedMedia" :src="'../images/' + media.kidsmusic_cover" alt="media thumb" class="audiothumb" @click="switchCurrentMedia(media)">
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

    data() {
        return {
            currentMediaDetails: {},
            retrievedMedia: [],
        }
    },

    created: function() {
        this.loadMedia(null, 'kidsmusic');
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

                this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
            })
        .catch((err) => console.error(err));
        },

        switchCurrentMedia(media){
            this.currentMediaDetails = media;
        },

        GoKidsHome() {

            this.$router.push({ name: "kidshome"});
        },
    
        GoKidsMovie() {
    
            this.$router.push({ name: "kidsmovies"});
        },
    
        GoKidsTv() {
    
            this.$router.push({ name: "kidstv"});
        }
    }
}