<template lang="">
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha de reporte</th>
          <th scope="col">Fecha de notificacion</th>
          <th scope="col">Estado</th>
          <th scope="col">Departamento</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in persons[1]" :key="item.id_de_caso">
          <th scope="row">{{ item.id_de_caso }}</th>
          <td>{{ item.fecha_reporte_web }}</td>
          <td> 
            10/10/2021
          </td>
          <td>{{ item.departamento_nom }}</td>
          <td>{{ item.ciudad_municipio_nom }}</td>
          <td>
            <button class="btn btn-danger">
              Eliminar
            </button>
          </td>
        
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {

  mounted() {
    console.log(this.persons[1])
  },

  computed: {
    ...mapState(["persons"]),
  },
};
</script>
<style lang=""></style>
