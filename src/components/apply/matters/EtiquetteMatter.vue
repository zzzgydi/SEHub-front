<template>
  <div class="matter-container">
    <div class="matter-title">注意事项</div>
    <div v-for="(matter,idx) in matters" :key="idx" class="matter-each">
      <span>{{idx+1}}.&emsp;{{matter}}</span>
    </div>
  </div>
</template>
<script>
import { matterEtiquette } from './matters.js'

export default {
  data () {
    return {
      matters: matterEtiquette
    }
  }
}
</script>
<style lang="stylus" scoped src="../../../assets/css/apply/matter.styl"></style>
