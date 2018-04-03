<template lang="html">
  <div class="layout">
    <router-view class="view"></router-view>

  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  components: { SvgIcon },
  data() {
    return {
      tabbar: [
        { iconClass: 'home', name: '首页', router: 'Home' },
        { iconClass: 'hot', name: '热门',  router: 'Hot' },
        { iconClass: 'explore', name: '发现', router: 'Explore' },
        { iconClass: 'mine', name: '我的', router: 'Mine' }
      ]
    }
  },
  methods: {
    isSelected( router ) {
      return this.$route.name === router
    }
  }
}
</script>

<style lang="scss" scoped>
  .view {
    height: 6.17rem;
  }
  .weui-tabbar {
    position: fixed;
    bottom: 0;
    height: .5rem;
  }
</style>
