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
        <h2 class="new">Just Added</h2>

        <h2 class="feat">Featured</h2>
    
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
            })
        .catch((err) => console.error(err));
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