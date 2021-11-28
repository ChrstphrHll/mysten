<template>
  <b-card class="mt-3">
  </b-card>
</template>

<script>
export default {
  name: 'Msg',
  props: {
    msg: String,
    sender: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.framed {
  border-style: solid;
  border-width: 5px;
  box-shadow: 2px 2px 4px rgba(0,0,0,.6);
}
.gimme-space {
  margin-top: 30px;
}
</style>
