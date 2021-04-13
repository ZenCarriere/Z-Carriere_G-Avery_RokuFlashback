export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="home">
        <nav class="menu">
		    <ul>           
                <li><p>Home</p></li>
                <li @click="GoMovie()"><p>Movies</p></li>
                <li @click="GoTv()"><p>Television</p></li>
                <li @click="GoMusic()"><p>Music</p></li>			
			</ul>
	    </nav>
        <h2 class="new">Just Added</h2>

        <h2 class="feat">Featured</h2>
    
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
        document.getElementById('bg').style.backgroundImage = 'url("../images/blue.png")';
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

        GoMusic() {

            this.$router.push({ name: "music"});
        },
    
        GoMovie() {
    
            this.$router.push({ name: "movies"});
        },
    
        GoTv() {
    
            this.$router.push({ name: "tv"});
        }
    }
}