<template>
  <div class="users">
    <h1>Users</h1>
    <form @submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name">
      <br>
      <input type="email" v-model="newUser.email" placeholder="Email Address">
      <br>
      <input type="submit" value="Add">
    </form>
    <ul>
      <li :key="user.id" v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <p :class="{contacted:user.contacted}">
          {{ user.name }} <span>{{ user.email }}</span>
          <button @click="deleteUser(user)">&times;</button>
        </p>
      </li>
    </ul>
  </div>
    
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
      newUser: {},
      users: []
    }
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function(index){ 
      this.users.splice(this.users.indexOf(index), 1);
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      this.users = response.data;
    });
  }
  
}
</script>

<style scoped>
  li {
    list-style-type: none;
  }
  span {
    font-size: 0.8rem;
    color:lightslategray;
    text-transform: lowercase;
  }
  p {
    display: inline;
  }
  p.contacted {
    -moz-text-blink: blink;
    text-decoration-line: line-through;
  }
</style>
