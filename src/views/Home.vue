<template>
  <div class="home">
    <InputPersons :persons="persons" />
  </div>
</template>

<script>
// @ is an alias to /src
import InputPersons from '@/components/InputPersons.vue'
import {mapActions} from 'vuex';
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      persons: []
    }
  },

  components: {
    InputPersons
  },

  mounted() {
    axios
      .get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
      .then(response => (
        this.persons = response.data,
        console.log(this.persons[1])
      ))
      .catch(error => console.log(error))

  },

  methods: {
    ...mapActions(['setResponse']),

    sendPersons() {
      console.log(this.persons)
      this.setResponse(this.persons)
    }
  }
}
</script>
