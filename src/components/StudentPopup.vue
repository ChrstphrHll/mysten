<template>
  <b-modal :id="name" 
          :title="name"
          hide-footer
          :body-bg-variant="background_class"
          :header-bg-variant="border_class"
          header-text-variant="light"
          :header-border-variant="border_class">
    <b-row>
      <b-col cols="4"><b-img fluid class="framed" src="../assets/default_pfp.png" /></b-col>
      <b-col cols="8">
        <!-- Put quote here -->
        <b-row class="ml-1 mr-3 d-flex justify-content-between">
          <b>Track</b><p>{{track}}</p>
        </b-row>
      </b-col>
    </b-row>
    <!-- Other content here -->
  </b-modal>
</template>

<script>
import {get_track_bg, get_track_border} from "../utility/utility.js";

export default {
  name: 'StudentPopup',
  props: {
    name: String,
    track: String,
    specification: String,
    year: String
  },
  computed: {
    border_class () {
      return get_track_border(this.track);
    },

    background_class () {
      return get_track_bg(this.track)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gimme-space {
  margin-top: 30px;
}
</style>
