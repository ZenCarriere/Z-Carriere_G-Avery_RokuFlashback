import UserComponent from './TheUserComponent.js';

export default {
    name: "TheAllUsersComponent",

	template: `
	<div class="accounts">

		<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>

	</div>
	`,

	created: function() {
        fetch(`/ums/admin/getusers`)
        .then(res => res.json())
        .then(data => this.userList = data)
        .catch(err => console.error(err));
	},

	data() {
	  return (
          {	message: `Who's Using Roku?`, userList: [] }
      )
	},

	components: {
		user: UserComponent
	}
}