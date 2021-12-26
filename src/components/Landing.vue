<template>
  <b-container class="mb-5">
    <h2 class="big-center-title script">Mysten Preperatory School for Aspiring Adventurers</h2>
    <hr varient="myst"/>
    <b-row>
      <b-col sm="12" lg="8">
        <front-info class="mb-4" />

        <b-card class="mb-4" border-variant="myst" header="Mysten's Mission">
          <p>At Mysten, we work hard to ensure the next generation of adventurers are better prepared for work in the field than the last. </p>
        </b-card>
      </b-col>
      <b-col sm="12" lg="4"><b-card border-variant="myst" header="Mysten News">
        <b-list-group class="mb-4">
          <b-list-group-item>Commencement and selection challenges are to be held on Sunsday, Pelent the 6th</b-list-group-item>
          <b-list-group-item variant="aslt">Assault Orientation to be held in the Ring on Tensday the 8th</b-list-group-item>
          <b-list-group-item variant="prot">Protection Orientation to be held in the Ampitheater on Tensday the 8th</b-list-group-item>
          <b-list-group-item variant="dipl">Diplomacy Orientation to be held in Alderden's main hall on Tensday the 8th</b-list-group-item>
          <b-list-group-item variant="expl">Exploration Orientation to be held in the within the Forge on Tensday the 8th</b-list-group-item>
        </b-list-group>
      </b-card></b-col>
    </b-row>
  </b-container>
</template>

<script>
import FrontInfo from './FrontInfo.vue'
export default {
  components: { FrontInfo },
  name: 'Landing',
  props: {
  }
}
</script>

<style scoped>
</style>
