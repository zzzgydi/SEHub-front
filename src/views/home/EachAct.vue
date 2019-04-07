<template>
  <div>
    <simple-header title="活动详情"></simple-header>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  beforeMount () {
    let id = this.$route.params.id
    if (id) {
      console.log(id)
    } else {
      console.log('error')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/default';
</style>
