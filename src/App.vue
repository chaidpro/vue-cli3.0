<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/common/home';
export default {
  data () {
    return {};
  },
  components: {
    Home
  },
  mounted () {
    console.log(this.$route.path);
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '');
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
@import "@/assets/css/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.siderBar {
  width: 201px;
  float: left;
  height: 100%;
  ul {
    height: 100%;
  }
}
.app_container {
  width: calc(100% - 201px);
  height: 100%;
  float: left;
}
</style>
