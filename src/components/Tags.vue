<template>
  <b-modal id="filter_modal" hide-footer title="Select Filters" title-class="">
    <b-form-group :label="option.group" v-for="(option, index) in all_options" :key="index" visible :id="option.group">
      <b-form-checkbox-group
        :id="option.group"
        v-model="value"
        :options="option.values"
        :name="option.group"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-button block @click="apply()" variant="outline-myst">Apply Filter</b-button>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        value: []
      }
    },
    name: 'Tags',
    props: {
      all_options: Array
    },
    computed: {
    },
    methods: {
      apply() {
        this.$emit("filter", this.value)
        this.value = []
        this.$bvModal.hide('filter_modal')
      }
    }
  }
</script>
