<template>
  <div class="loading">
    <span class="loading__indicator" :style="style" />
    <span class="loading__text" v-show="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    size: {
      type: Number,
      default: 26
    },
    indicatorColor: {
      type: String,
      default: '#1989FA'
    }
  },
  computed: {
    style () {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        borderColor: this.indicatorColor,
        borderBottomColor: 'transparent'
      }
    }
  }
}
</script>
