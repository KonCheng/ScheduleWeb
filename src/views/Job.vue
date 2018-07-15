<template>
  <div>
    {{group}}
    <br/>
    {{name}}
  </div>
</template>

<script>
  export default {
    name: "Job",
    data() {
      return {
        name: this.$route.params.name,
        group: this.$route.params.group
      }
    }
  }
</script>

<style scoped>

</style>
