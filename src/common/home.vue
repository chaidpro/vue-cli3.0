<template>
  <div class="home-container clearfix">
    <head-container class="head-container fl"></head-container>
    <siderBar class="sider-bar fl"></siderBar>
    <mainBody class="mainBay-container fl"></mainBody>
    <foot-container class="foot-container fl"></foot-container>
  </div>
</template>
<script>
import siderBar from '@/common/siderBar.vue';
import headContainer from '@/common/headContainer.vue';
import footContainer from '@/common/footContainer.vue';
import mainBody from '@/common/mainBody.vue';
export default {
  name: 'home',
  components: {
    siderBar,
    headContainer,
    footContainer,
    mainBody
  }
};
</script>
<style lang="scss" scoped>
$px-20: 20px;
$px-50: 50px;
$px-80: 80px;
$px-100: 100px;
$px-150: 150px;
$px-200: 200px;
$percent-100: 100%;

.home-container {
  height: 100%;
}
.head-container {
  width: $percent-100;
  height: $px-80;
//   background-color: rosybrown;
}
.sider-bar {
  width: $px-150;
  height: calc(100% - 80px);
//   background-color: rebeccapurple;
}
.mainBay-container {
  width: calc(100% - 150px);
  height: calc(100% - 160px);
//   background-color: rgb(196, 118, 206);
}
.foot-container {
    width: calc(100% - 150px);
    height: 80px;
    // background-color: rgb(206, 183, 118);
}
</style>
