<template>
  <div>
    <simple-header title="部门安排"></simple-header>
    <activity-table></activity-table>
  </div>
</template>
<script>
import ActTable from '../../components/home/table/Activity_table'
export default {
  components: {
    'activity-table': ActTable
  }
}
</script>
<style lang="stylus" scoped>
</style>
