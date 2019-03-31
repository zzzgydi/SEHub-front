<template>
  <div class="default-container">
    <simple-header title="其他"></simple-header>
    <div class="module-container">
      <div class="module-list-box">
        <div class="regsys-box" @click="handleClick('regsys')">
          <div class="regsys-animation-box">
            <div class="ra--book">
              <div class="ra-book-word"></div>
              <div class="ra-book-word2"></div>
            </div>
          </div>
          <div class="regsys-title">报名表设计</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick (item) {
      switch (item) {
        case 'regsys':
          this.$router.push('/others/regsys')
          break
      }
    }
  }
}
</script>
<style lang="stylus" scoped src="./others.styl">
</style>
