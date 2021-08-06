<template >
<card id="carta">
    <b-row  align-v="center" slot="header" >
      <b-col  cols="8">
        <h3 class="mb-0">Medicamento</h3>
      </b-col>
    </b-row>

    <b-form>
   
      <h2 class="heading-small text-muted mb-4">Medicina wuuuu!!! </h2>
  
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="ID de la receta"
              placeholder="Escriba el ID"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Nombre del medicamento"
              placeholder="Medicamento"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="6">
             <base-input
              type="text"
              label="Fecha de inicio del medicamento"
              placeholder="Escriba cuando se debe iniciar el medicamento"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
           <base-input
              type="text"
              label="FEcha de termino"
              placeholder="Escriba la fecha de termino"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Dosis"
              placeholder="Escriba la dosis del medicamento"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Hora de aplicacion"
              placeholder="Hora"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
     <b-row aling="rigth">
              <b-col></b-col>
                <b-button class="m-1" 
                @click="onSubmit()" 
                type="submit" 
                variant="modificar"  
                > Guardar</b-button>
                <b-button class="m-1" href="#/productos" variant="eliminar"> 
                Cancelar</b-button>
              </b-row>

    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: ''
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
#carta {
  
  background-color: #c1f0f3;
}
</style>
