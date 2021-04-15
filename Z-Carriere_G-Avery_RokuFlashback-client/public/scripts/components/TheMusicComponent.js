export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="musicpage">
        <nav class="menu">
		    <ul>           
                <li @click="GoHome()"><p>Home</p></li>
                <li @click="GoMovie()"><p>Movies</p></li>
                <li @click="GoTv()"><p>Television</p></li>
                <li><p>Music</p></li>			
			</ul>
	    </nav>

        <div class="audioplayer">
            <div class="audiodetails">
                <h3 class="audiotitle">{{currentMediaDetails.music_title}}</h3>
                <h4 class="audioartist">{{currentMediaDetails.music_artist}}</h4>
                <h4 class="audioyear">{{currentMediaDetails.music_year}}</h4>
                <p class="audiodesc" v-html="currentMediaDetails.music_desc"></p>
            </div>
            <img :src="'../images/' + currentMediaDetails.music_cover" alt="media thumb" class="audiothumb">
            <audio autoplay muted controls :src="'audio/' + currentMediaDetails.music_audio" class=""></audio>
        </div>
    
        <div class="genres">
        <div class="square green">
                <h3>Rock</h3>
            </div>

            <div class="square yellow hidden">
                <h3>Jazz</h3>
            </div>

            <div class="square magenta">
                <h3>Classics</h3>
            </div>

            <div class="square red hidden">
                <h3>Pop</h3>
            </div>

            <div class="square blue">
                <h3>Blues</h3>
            </div>

            <div class="square orange hidden">
                <h3>Folk</h3>
            </div>
        </div>

        <div class="audiocovercontainer">
            <img v-for="media in retrievedMedia" :src="'../images/' + media.music_cover" alt="media thumb" class="audiothumb" @click="switchCurrentMedia(media)">
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
        this.loadMedia(null, 'music');
        this.$emit('setuser', this.currentuser);
        document.getElementById('bg').style.backgroundImage = 'url("../images/blue.png")';
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

        GoMovie() {

            this.$router.push({ name: "movies"});
        },
    
        GoHome() {
    
            this.$router.push({ name: "home"});
        },
    
        GoTv() {
    
            this.$router.push({ name: "tv"});
        }
    }
}