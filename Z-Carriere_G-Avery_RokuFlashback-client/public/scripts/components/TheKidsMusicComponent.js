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
        <h2 class="new">Just Added</h2>

        <h2 class="feat">Featured</h2>
    
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

        <img src="images/roku.svg" alt="Roku logo" class="footerroku" @click="logout()">
        <hr>
        <nav class="socials">
		    <ul>           
                <li><img src="images/facebook.svg" alt="Facebook logo" class="ficon"></li>
                <li><img src="images/twitter.svg" alt="Twitter logo" class="ticon"></li>
                <li><img src="images/youtube.svg" alt="YouTube logo" class="yicon"></li>
                <li><img src="images/instagram.svg" alt="Instagram logo" class="iicon"></li>			
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