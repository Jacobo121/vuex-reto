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
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in persons.persons" :key="item.id_de_caso">
          <th scope="row">{{ item.id_de_caso }}</th>
          <td>{{ item.fecha_reporte_web }}</td>
          <td> 10/10/2021
            <!-- <span v-for="(cat, index) in item.categorias" :key="index">
              {{ item.categorias.length === index + 1 ? cat : cat + ", " }}
            </span> -->
          </td>
          <td>{{ item.departamento_nom }}</td>
          <td>{{ item.ciudad_municipio_nom }}</td>
          <!-- <td>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteTareas(item.id)"
            >
              Eliminar
            </button>

            <router-link
              class="btn btn-warning ml-2 btn-sm"
              :to="{ name: 'Editar', params: { id: item.id } }"
            >
              Editar
            </router-link>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  

  computed: {
    ...mapState(["persons"]),
  },
};
</script>
<style lang=""></style>
