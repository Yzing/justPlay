<template lang="html">
  <div class="tabbar-item"
    :style="{ width: width }"
    :class="{ 'tabbar-item-selected' : isSelected }">
    <router-link
      :to="link">
      <p class="tabbar-item-icon"
        :class="{ 'tabbar-item-icon-selected' : isSelected }">
        <slot name="icon"></slot>
      </p>
      <p class="tabbar-item-label"
        :class="{ 'tabbar-item-label-selected' : isSelected }">
        <slot name="label"></slot>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: [ Object, String ]
    },
    isSelected: {
      type: [ Boolean, Function ]
    }
  },
  computed: {
    width() {
      let len = this.$parent.$slots.default.length
      return 100 / len + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar-item{
  display: inline-block;
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: $fontColor;
  }
  &-icon{
    padding-top: 5px;
    text-align: center;
    &-selected{
      color: $selected;
    }
  }
  &-label{
    text-align: center;
    font-size: .1rem;
    &-selected{
      color: $selected;
    }
  }
  &-selected{
    background: #9069a4;
    transition: background .3s;
  }
}
</style>
