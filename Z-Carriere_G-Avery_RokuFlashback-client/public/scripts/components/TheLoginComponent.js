export default {
    name: "TheLoginComponent",
    template: `
        <div class="container">
            <div>
                <h1 class="welcome">Welcome to Flashback</h1>
                <p class="opener">Log in below to get transported back in time to all your old favourite movies, tv shows, and albums!</p>
                <form>
                    <div class="namebar form-row">
                        <div class=" bars">
                            <label class="hidden" for="InputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control" id="InputName" placeholder="username" required>
                        </div>

                        <div class=" bars">
                            <label class="hidden" for="FormPassword">Name</label>
                            <input v-model="input.password" type="password" class="form-control" id="FormPassword" placeholder="password" required>
                        </div>

                        <div class="col-auto my-1">
                            <button v-on:click.prevent="login()" type="submit" class="btn btn-primary go">Go!</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,
 
     data() {
         return {
             input: {
                 username: "",
                 password: ""
             },

         }
     },
 
     methods: {
         login() {
            if(this.input.username !="" && this.input.password !=""){
                let loginData = JSON.stringify({username: this.input.username, password: this.input.password});

                let url = `/ums/admin/login`;

                fetch(url, {
                    method: 'POST',
                    body: loginData,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.message){
                        console.warn("user doesnt exist or something else broke");
                    }else{
                        data.user_name = this.input.username;
                        this.$router.replace({name: "users"});
                    }
                })
                .catch((err) => console.error(err));
            } else{
                //dont do the login stuff for reasons
                console.log("A username and password need to be entered");
            }
         }            
    }
 }