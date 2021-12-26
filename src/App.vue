<template>
  <div>
  <b-navbar fluid variant="myst" type="dark" class="script">
    <b-navbar-brand @click="test(3)" href="#">Mysten Prep</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="is_home" href="#" @click="change_page('home')">Home</b-nav-item>
          <b-nav-item :active="is_dir" href="#" @click="change_page('dir')">Directory</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

  </b-navbar>
  <landing v-if="is_home" />
  <directory v-if="is_dir" />
  </div>
</template>

<script>
import Directory from './components/Directory.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  data: function () {
    return {
      current_page: 'home'
    }
  },
  components: {
    Directory,
    Landing
  },
  methods: {
    test(par) {
      console.log(par)
    },

    change_page(page) {
      this.current_page = page
    }
  },
  computed: {
    is_home () {
      if (this.current_page === 'home'){
        return true
      }
      return false
    },
    is_dir () {
      if (this.current_page === 'dir'){
        return true
      }
      return false
    }
  },
  mounted () {
  },
}
</script>

<style>
@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
   url(./fonts/Merienda/Merienda-Regular.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1{
  font-family: Merienda, Helvetica, Arial, sans-serif;
  background: var(--myst);
  color: #fff;
  padding: 3%;
  text-align: center;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.big-center-title{
  text-align: center;
  font-size: 3rem;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  color: var(--myst)
}
.script{
  font-family: Merienda, Helvetica, Arial, sans-serif;
}
.pointer {
  cursor: pointer;
}
.nav {
  background: var(--myst-l);
  align-content: center;
}
.framed {
  border-style: solid;
  border-width: 5px;
  box-shadow: 2px 2px 4px rgba(0,0,0,.6);
}
</style>
