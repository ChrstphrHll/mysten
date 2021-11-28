<template>
  <div>
    <b-container>
      <h2 class="big-center-title script">Student and Staff Directory</h2>
      <hr varient="myst"/>
      <b-row class="d-flex justify-content-center" >
        
          <b-button-toolbar aria-label="Toolbar with button groups and input groups">
            <b-dropdown class="mr-2" @click="toggle_direction()" split variant="outline-myst">
              <template #button-content v-if="is_forward">Sort<b-icon-arrow-up /></template>
              <template #button-content v-else>Sort<b-icon-arrow-down /></template>
              <b-dropdown-item v-for="(element, index) in sort_options" :key="index" 
                                @click="sort_students(element.value)">{{element.name}}</b-dropdown-item>
            </b-dropdown>
            
            <b-dropdown class="mr-2" split variant="outline-myst" text="Filter">
              <b-dropdown-form>

              </b-dropdown-form>
              <b-dropdown-divider />
              <b-dropdown-item @click="apply_filter('random')">Apply</b-dropdown-item>
            </b-dropdown>
            
            <b-input-group size="md">
              <b-form-input placeholder="Search" class="text-right"></b-form-input>
            </b-input-group>
          </b-button-toolbar>
        
      </b-row>
      <b-row>
        <b-col  sm="12" lg="4" md="6" v-for="(student, index) in roster" :key="index">
          <IDCard :name="student.name"
                  :track="student.track"
                  :specification="student.specification"
                  :year="student.year"/>
        </b-col>
      </b-row>

    </b-container>
    <StudentPopup v-for="(student, index) in roster" :key="index"
                  :name="student.name"
                  :track="student.track"
                  :specification="student.specification"
                  :year="student.year"/>
  </div>
</template>

<script>
import IDCard from './IDCard.vue'
import StudentPopup from './StudentPopup.vue'

import {test_data} from '../data/students.js'

export default {
  name: 'Directory',
  data: function () {
    return {
      roster: test_data.roster,
      forward: 1,
      reverse: -1,
      sort_options: [
        {name: "First Name", value: "name"},
        {name: "Last Name", value: "last_name"},
        {name: "Track", value: "track"},
        {name: "Specification", value: "specification"},
        {name: "Year", value: "year"},
        {name: "Race", value: "race"},
        {name: "Random", value: "random"}
      ],
      current_sort: "name",
      years: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"]
    }
  },
  components: {
    IDCard,
    StudentPopup
  },
  methods: {
    sort_students(criteria){
      if(criteria === "random"){
        this.shuffle_students()
        return
      }
      if(criteria === "last_name"){
        this.roster.sort((a,b) => (a["name"].split(" ")[1] > b["name"].split(" ")[1]) ? this.forward : this.reverse)
      } else if (criteria === "year"){
        this.roster.sort((a,b) => this.years.indexOf(a.year) > this.years.indexOf(b.year) ? this.forward : this.reverse)
      } else {
        this.roster.sort((a,b) => (a[criteria] > b[criteria]) ? this.forward : this.reverse)
      }
      this.current_sort = criteria
    },

    shuffle_students(){
      let currentIndex = this.roster.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        let now = this.roster[currentIndex];
        let rand = this.roster[randomIndex];

        this.roster.splice(currentIndex, 1, rand);
        this.roster.splice(randomIndex, 1, now);
      }
      this.current_sort = 'random'
    },

    toggle_direction(){
      this.forward = this.forward * -1
      this.reverse = this.reverse * -1
      this.sort_students(this.current_sort)
    }
  },
  computed: {
    is_forward () {
      if (this.forward === 1) return true
      return false
    }
  },
  mounted () {
    this.roster.sort((a,b) => (a.name > b.name) ? 1 : -1);
  },
}
</script>

<style scoped>
</style>
