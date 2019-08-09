<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo sider_container"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- <el-submenu index="/echarts">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Echarts</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/echarts/lineModule">折线图</el-menu-item>
        <el-menu-item index="/echarts/pieModule">饼图</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>-->
    <el-submenu :index="itemsSub.path" v-for="(itemsSub,indexSub) of menuData" :key="indexSub">
      <template slot="title">
        <i :class="itemsSub.icon"></i>
        <span>{{itemsSub.name}}</span>
      </template>
      <el-menu-item-group v-for="(item, index) of itemsSub.content" :key="indexSub+ '-' + index">
        <el-menu-item :index="item.path" @click.native="GoRouter(item.path)">{{item.name}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'sider-bar',
  data () {
    return {
    //   defaultActive: null,
      menuData: [
        {
          path: '/echarts',
          name: 'Echarts',
          icon: 'el-icon-location',
          content: [
            {
              path: '/echarts/lineModule',
              name: '折线图'
            },
            {
              path: '/echarts/pieModule',
              name: '饼图'
            }
          ]
        },
        {
          path: '/example',
          name: 'example',
          icon: 'el-icon-location',
          content: [
            {
              path: '/example/store',
              name: 'Vuex'
            }
          ]
        }
      ]
    };
  },
  computed: {
    defaultActive: function () {
      console.log(this.$route);
      return this.$route.fullPath;
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    GoRouter (path) {
      this.$router.push(path);
    }
  },
  watch: {
    'router' (val) {
      console.log(val);
    }
  }

};
</script>
<style lang="scss">
.sider_container {
  .el-submenu .el-menu-item {
    min-width: 10px;
  }
}
</style>
