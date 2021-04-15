export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="tvpage">
        <nav class="menu">
		    <ul>           
                <li @click="GoHome()"><p>Home</p></li>
                <li @click="GoMovie()"><p>Movies</p></li>
                <li><p>Television</p></li>
                <li @click="GoMusic()"><p>Music</p></li>			
			</ul>
	    </nav>

        <div class="videoplayer">
            <div class="videodetails">
                <h3 class="videotitle">{{currentMediaDetails.tv_title}}</h3>
                <h4 class="videoyear">{{currentMediaDetails.tv_year}}</h4>
                <p class="videoplot" v-html="currentMediaDetails.tv_storyline"></p>
            </div>
            <video autoplay controls muted :src="'video/' + currentMediaDetails.tv_video" class=""></video>
        </div>
    
        <div class="genres">
            <div class="square green">
                <h3>Comedy</h3>
            </div>

            <div class="square yellow hidden">
                <h3>Drama</h3>
            </div>

            <div class="square magenta">
                <h3>Classics</h3>
            </div>

            <div class="square red hidden">
                <h3>Crime</h3>
            </div>

            <div class="square blue">
                <h3>Action</h3>
            </div>

            <div class="square orange hidden">
                <h3>Western</h3>
            </div>
        </div>

        <div class="videocovercontainer">
            <img v-for="media in retrievedMedia" :src="'../images/' + media.tv_cover" alt="media thumb" class="videothumb" @click="switchCurrentMedia(media)">
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
        this.loadMedia(null, 'tv');
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
    
        GoMusic() {
    
            this.$router.push({ name: "music"});
        }
    }
}