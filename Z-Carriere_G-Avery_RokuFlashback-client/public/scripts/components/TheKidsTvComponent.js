export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="kidshome">
        <nav class="kidmenu">
		    <ul>           
                <li @click="GoKidsHome()"><p>Home</p></li>
                <li @click="GoKidsMovie()"><p>Movies</p></li>
                <li><p>Television</p></li>
                <li @click="GoKidsMusic()"><p>Music</p></li>			
			</ul>
	    </nav>

        <div class="videoplayer">
            <div class="videodetails">
                <h3 class="videotitle">{{currentMediaDetails.kidstv_title}}</h3>
                <h4 class="videoyear">{{currentMediaDetails.kidstv_year}}</h4>
                <p class="videoplot" v-html="currentMediaDetails.kidstv_storyline"></p>
            </div>
            <video autoplay controls muted :src="'video/' + currentMediaDetails.kidstv_video" class=""></video>
        </div>
    
        <div class="genres">
        <div class="square kidgreen">
                <h3>Classics</h3>
            </div>

            <div class="square kidyellow hidden">
                <h3>Animation</h3>
            </div>

            <div class="square kidmagenta">
                <h3>Comedy</h3>
            </div>

            <div class="square kidred hidden">
                <h3>Musical</h3>
            </div>

            <div class="square kidblue">
                <h3>Adventure</h3>
            </div>

            <div class="square kidorange hidden">
                <h3>Education</h3>
            </div>
        </div>

        <div class="videocovercontainer">
            <img v-for="media in retrievedMedia" :src="'../images/' + media.kidstv_cover" alt="media thumb" class="videothumb" @click="switchCurrentMedia(media)">
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
        this.loadMedia(null, 'kidstv');
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
        GoKidsMusic() {

            this.$router.push({ name: "kidsmusic"});
        },
    
        GoKidsMovie() {
    
            this.$router.push({ name: "kidsmovies"});
        },
    
        GoKidsHome() {
    
            this.$router.push({ name: "kidshome"});
        }
    }
}