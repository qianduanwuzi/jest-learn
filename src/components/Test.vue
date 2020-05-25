<template>
  <div class="wrapper">
    <input type="checkbox" @change="changeHandler" name="a" value="1" :checked="aaa"> <label>a</label>
    <input type="checkbox" @change="changeHandler" name="b" value="2" :checked="aaa"> <label>b</label>
    <input type="checkbox" @change="changeHandler" name="c" value="3" :checked="aaa"> <label>c</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  components: {},
  props: {
    checked: {
      default: () => ([]),
      type: Array
    }
  },
  data () {
    return {
      aaa: null
    }
  },
  created () {},
  mounted () {
    this.aaa = this.checked
  },
  computed: {},
  methods: {
    changeHandler (e) {
      console.log(e.target.checked)
      this.$emit('change', e.target.checked ? [1] : [])
      // console.log(e.target.checked)
    }
  },
  watch: {}
}
</script>
<style lang="stylus" scoped>
</style>
