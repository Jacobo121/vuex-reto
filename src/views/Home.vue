<template>
  <div class="container">
    <form @submit.prevent="SendPersons">
      <InputPersons :persons="persons" />
    </form>
    
    <div class="mt-4">
      <ListPersons />
    </div>
  </div>
</template>

<script>

import InputPersons from '@/components/InputPersons.vue'
import ListPersons from '@/components/ListPersons.vue'
import axios from 'axios'
import {mapActions} from 'vuex';


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
        //guardo la respuesta en this.persons
        //this.persons = response.data,
        
        //mando la respuesta a la a la store
        this.setResponse(response.data)
      ))
      .catch(error => console.log(error))

  },

  methods: {
    ...mapActions(['setResponse']),
  }
}
</script>
