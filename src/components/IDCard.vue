<template>
  <b-card class="mt-3 pointer card-class"
          v-b-hover="handleHover"
          :class="isHovered ? 'shadow' : ''"
          :bg-variant="background_class" 
          :border-variant="border_class" 
          @click="click_handler">
    <b-row>
      <b-col cols="4"><b-img fluid class="framed" src="../assets/default_pfp.png" /></b-col>
      <b-col cols="8">
          <h4>{{name}}</h4>
          <p><b>Track:</b> {{track}}</p>
          <p><b>Spec:</b> {{specification}}</p>
          <p><b>Year:</b> {{year}}</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {get_track_bg, get_track_border} from "../utility/utility.js";

export default {
  name: 'IDCard',
  props: {
    name: String,
    track: String,
    specification: String,
    year: String
  },
  data: function () {
    return {
      isHovered: false
    }
  },
  computed: {
    border_class () {
      return get_track_border(this.track);
    },

    background_class () {
      return get_track_bg(this.track);
    }
  },
  methods: {
    click_handler() {
      console.log("clicked " + this.name);
      this.$bvModal.show(this.name);
    },
    handleHover(hover_state) {
      this.isHovered = hover_state;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gimme-space {
  margin-top: 30px;
}
.card-class {
  height: 90%;
  flex: 1;

}
</style>
