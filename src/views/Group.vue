<template>
  <div>{{group}}</div>
</template>

<script>
  export default {
    name: "Group",
    data() {
      return {
        group: this.$route.params.group
      }
    }
  }
</script>

<style scoped>

</style>
