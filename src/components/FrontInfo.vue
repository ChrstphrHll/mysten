<template>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      controls
      img-width="1024"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="border border-myst rounded"
    >
      <b-carousel-slide
        caption="Mysten Prep"
        text="Where parties are made"
        img-src="../assets/party2.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/strixhaven-students.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/revendale.png"
      ></b-carousel-slide>

      <b-carousel-slide 
        caption="Revendale"
        text="Sunny day in our college town"
        img-src="../assets/dance.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide 
        caption="Revendale"
        text="Sunny day in our college town"
        img-src="../assets/students.jpg"
      ></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'FrontInfo',
  props: {
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
  mounted() {
    console.log("dingignignging8")
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
