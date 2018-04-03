<template>
  <svg :class="svgClass" aria-hidden="true" :style="svgStyle">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>

const config = {
  'small': {
    height: '.1rem',
    width: '.1rem'
  },
  'middle': {
    height: '.2rem',
    width: '.2rem'
  },
  'large': {
    height: '.3rem',
    width: '.3rem'
  }
}

export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    size: {
      type: [ String, Object ],
      validator( value ) {
        if ( typeof value === 'string' ) {
          return [ 'small', 'middle', 'large' ].indexOf( value ) > -1
        }
        return true
      }
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    svgStyle() {
      if ( !this.size ) {
        return config['middle']
      } else if ( typeof this.size === 'string' ) {
        return config[this.size]
      } else {
        return {
          width: +this.size.width / 100 + 'rem',
          height: +this.size.height / 100 + 'rem'
        }
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
