<template>
  <form @submit.prevent="SendPersons">
    <InputPersons :persons="persons" />
  </form>

  <ListPersons />
</template>

<script>
// @ is an alias to /src
import InputPersons from '@/components/InputPersons.vue'
import ListPersons from '@/components/ListPersons.vue'
import {mapActions} from 'vuex';
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      persons: null
    }
  },

  components: {
    InputPersons,
    ListPersons
  },

  mounted() {
    axios
      .get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
      .then(response => (
        this.persons = response.data,
        this.setResponse(this.persons)
      ))
      .catch(error => console.log(error))

  },

  methods: {
    ...mapActions(['setResponse']),
  }
}
</script>
