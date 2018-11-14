<template>
  <div class="test">
    <h1>{{title}}</h1>
    <p v-if="active">{{user.fname + ' ' + user.lname}}</p>
    <p v-else>Nobody</p>
    <div class="wrapper">
      <ul>
        <li :key="item.id" v-for="item in items" v-text="item.title"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: 'Halo Lyon',
      user: {
        fname: 'Lyon',
        lname: 'Etyo'
      },  
      active:true,
      items: [
        {id:0, title:'Item satu'},
        {id:1, title:'Item dua'},
        {id:2, title:'Item tiga'},
        {id:3, title:'Item empat'},
      ]
    }
  }
}
</script>

<style scoped>
  div.wrapper {
    max-width: 20rem;
    margin: auto;
  }
  li {
    padding: 0;
    margin: 0;
    text-align: left; 
  }
</style>
