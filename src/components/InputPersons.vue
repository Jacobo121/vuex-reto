<template lang="">
  <div class="container">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Fecha de reporte</label>
          <input type="date" class="form-control" id="inputEmail4" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Fecha de notificacion</label>
          <input type="date" class="form-control" id="inputPassword4" />
        </div>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">Leve</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">Grave</label>
      </div>
      <div class="form-group">
        <label for="inputAddress">Departamento</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Ciudad</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Procesar</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: {
        persons: Object
    },

    
};
</script>

<style lang=""></style>
