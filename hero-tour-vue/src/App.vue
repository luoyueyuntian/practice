<template>
  <div id="app" class="container">
    <h1>Hero tour</h1>
    <div class="main-nav-container">
      <nav class="nav-container">
        <router-link to="/hero" active-class="active">hero</router-link>
        <router-link to="/crisis-center" active-class="active">crisis</router-link>
        <router-link to="/admin" active-class="active">admin</router-link>
        <router-link to="/login" active-class="active">login</router-link>
        <a @click="showContactPanel">Contact</a>
      </nav>
    </div>
    <router-view/>
    <div v-if="contactPanel">
      <Compose />
    </div>
  </div>
</template>

<script>
import { SHOW_CONTACT_PANEL } from './vuex/constant'
import { mapMutations } from 'vuex'
import {Compose} from './page/index'
export default {
  name: 'App',
  computed: {
    contactPanel: function () {
      return this.$store.state.contactPanel
    }
  },
  methods: mapMutations({
    showContactPanel: SHOW_CONTACT_PANEL
  }),
  components: {
    Compose
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container {
    width: 1200px;
    margin: 0 auto;
}

.main-nav-container {
    border-bottom: 2px solid #eee;
}

.main-nav-container nav a {
    display: inline-block;
    padding: 5px 8px;
    font-size: 16px;
    text-decoration: none;
    color: #333;
}

.main-nav-container nav a.active {
    border-bottom: 3px solid #0099ff;
}

.main-nav-container nav a.popup {
    font-weight: bold;
    color: #095872;
}

.main {
    margin: 15px 0;
}

.popup-container {
    margin-top: 20px;
}

.nav-container{
  padding-left: 15px;
  border-bottom: 2px solid #eee;
}
.nav-container a{
  display: inline-block;
    padding: 5px 8px;
    font-size: 16px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
}

.nav-container a.active{
  border-bottom: 3px solid #0099ff;
}

.default-list-container{
  width: 400px;
}
</style>
