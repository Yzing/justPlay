<template lang="html">
  <div class="layout">
    <router-view class="view"></router-view>
    <tabbar>
      <tabbar-item
        v-for="( i, index ) of tabbar"
        :key="index"
        :link="{ name: i.router }"
        :isSelected="isSelected( i.router )">
        <svg-icon slot="icon" :icon-class="i.iconClass"></svg-icon>
        <span slot="label">{{ i.name }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import Tabbar from '@/components/Tabbar'
import TabbarItem from '@/components/TabbarItem'

export default {
  components: { SvgIcon, Tabbar, TabbarItem },
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
.tabbar {
  position: fixed;
  bottom: 0;
  height: .5rem;
}
</style>
