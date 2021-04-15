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

        <div class="ja">
            <div class="videobanners">
                <img src="images/mashLogo.png" alt="mash banner" class="videobanner" @click="GoTv()">
                <img src="images/stalag17Logo.png" alt="stalag banner" class="videobanner" @click="GoMovie()">
            </div>
            <div class="audiobanners">
                <img src="images/abbeyRoadLogo.png" alt="abbey road banner" class="audiobanner" @click="GoMusic()">
                <img src="images/davidBowie_heroesLogo.png" alt="abbey road banner" class="audiobanner" @click="GoMusic()">
                <img src="images/nirvana_nevermindLogo.png" alt="abbey road banner" class="audiobanner" @click="GoMusic()">
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