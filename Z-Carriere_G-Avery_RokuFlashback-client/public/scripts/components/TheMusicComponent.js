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
            })
        .catch((err) => console.error(err));
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