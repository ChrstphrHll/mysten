<template>
  <div>
    <b-container>
      <h2 class="big-center-title script">Student and Staff Directory</h2>
      <hr varient="myst"/>
      <b-row class="d-flex justify-content-center" >
        
          <b-button-toolbar aria-label="Toolbar with button groups and input groups">
            <b-dropdown class="mr-2" @click="toggle_direction()" split variant="outline-myst">
              <template #button-content v-if="is_forward">Sort: {{current_sort.name}}<b-icon-arrow-up /></template>
              <template #button-content v-else>Sort: {{current_sort.name}}<b-icon-arrow-down /></template>
              <b-dropdown-item v-for="(element, index) in sort_options" :key="index" 
                                @click="sort_students(element)">{{element.name}}</b-dropdown-item>
            </b-dropdown>
            
            <b-button class="mr-2" variant="outline-myst" @click="open_filter()">Filter</b-button>
            
            <b-input-group size="md">
              <b-form-input placeholder="Search" class="text-right"></b-form-input>
            </b-input-group>
          </b-button-toolbar>
        
      </b-row>
      <b-row>
        <b-col  sm="12" lg="4" md="6" v-for="(student, index) in students_to_display" :key="index">
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
    <Tags :all_options="filter_options" v-on:filter="filter_students" />
  </div>
</template>

<script>
import IDCard from './IDCard.vue'
import StudentPopup from './StudentPopup.vue'

import {test_data} from '../data/students.js'
import Tags from './Tags.vue'

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
        {name: "Year", value: "year", options: this.years},
        {name: "Race", value: "race"},
        {name: "Random", value: "random"}
      ],
      current_sort: {name: "First Name", value: "name"},
      filter_tags: [],
      years: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"],
      tracks: ["Assualt", "Protection", "Diplomacy", "Exploration"],
      specifications: ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rouge","Sorcerer","Wizard"],
      races: ["Dwarf","Elf","Gnome","Half-Elf","Halfling","Human","Dragonborn","Half-Orc","Tiefling","Firbolg","Tabaxi","Aarakocra","Triton","Kenku","Aasimar","Genasi","Goliath","Warforged"],
    }
  },
  components: {
    IDCard,
    StudentPopup,
    Tags
  },
  methods: {
    open_filter(){
      this.$bvModal.show("filter_modal");
    },

    filter_students(tags){
      console.log(tags)
    },

    sort_students(criteria){
      if(criteria.value === "random"){
        this.shuffle_students()
        return
      }
      if(criteria.value === "last_name"){
        this.roster.sort((a,b) => (a["name"].split(" ")[1] > b["name"].split(" ")[1]) ? this.forward : this.reverse)
      } else if (criteria.value === "year"){
        this.roster.sort((a,b) => this.years.indexOf(a.year) > this.years.indexOf(b.year) ? this.forward : this.reverse)
      } else {
        this.roster.sort((a,b) => (a[criteria.value] > b[criteria.value]) ? this.forward : this.reverse)
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
    students_to_display(){
      return this.roster
    },
    is_forward(){
      if (this.forward === 1) return true
      return false
    },
    filter_options(){
      return [
        {group: "Years", values: this.years},
        {group: "Tracks", values: this.tracks},
        {group: "Specifications", values: this.specifications},
        {group: "Races", values: this.races}
      ]
    } 
  },
  mounted () {
    this.roster.sort((a,b) => (a.name > b.name) ? 1 : -1);
  },
}
</script>

<style scoped>
</style>
