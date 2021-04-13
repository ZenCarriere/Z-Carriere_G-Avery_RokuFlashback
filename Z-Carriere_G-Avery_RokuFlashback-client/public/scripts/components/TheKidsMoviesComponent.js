export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="kidshome">
        <nav class="kidmenu">
		    <ul>           
                <li @click="GoKidsHome()"><p>Home</p></li>
                <li><p>Movies</p></li>
                <li @click="GoKidsTv()"><p>Television</p></li>
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
                <h3>Shorts</h3>
            </div>
        </div>

        <img src="images/roku.svg" alt="Roku logo" class="footerroku" @click="logout()">
        <hr>
        <nav class="socials">
		    <ul>           
                <li></li>
                <li></li>
                <li></li>
                <li></li>			
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
    
        GoKidsHome() {
    
            this.$router.push({ name: "kidshome"});
        },
    
        GoKidsTv() {
    
            this.$router.push({ name: "kidstv"});
        }
    }
}