
<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{$store.state.userInfo}}
    {{userInfo}}
    {{$store.getters.doneTodos}}
    <p @click="onCommit">点我</p>
    <p @click="onAction">ation</p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data () {
    return {};
  },
  computed: {
    ...mapState(['userInfo'])

  },

  methods: {
    ...mapMutations({
      mutationsUserInfo: `SET_MUTATIONS_USERINFO`
    }),
    ...mapActions({
      actionUserInfo: 'actionUserInfo'
    }),
    onCommit () {
      this.$store.commit('SET_MUTATIONS_USERINFO', { userInfo: '第二登陆人' });
      // this.mutationsUserInfo({ userInfo: '第二登陆人' });
    },
    onAction () {
      this.actionUserInfo({ userInfo: '第三登陆人' });
      // this.$store.dispatch('actionUserInfo', { userInfo: '第三登陆人' });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
