<template >
<card id="carta">
 <div >
   <br />
       <b-row>
 <h1 class="mb-3">Recetas del paciente</h1>
</b-row>
       

        <b-card id="tarjet" bg-variant="white"
             text-variant="black" 
             class="p-2 mb-4 bg-white rounded cardText"
             v-for="receta in recetass"
             v-bind:key="receta.idReceta"
            >
                <b-card-title><h3> RECETA MEDICA</h3></b-card-title>
                 <b-row align-v="center" class="card-item"> 
                  <b-col align="center" cols="10" md="10" lg="2" xl="3">
                  <span class="rounded-circle">
                  <b-img id="icono" src="https://e7.pngegg.com/pngimages/12/979/png-clipart-medical-prescription-computer-icons-pharmaceutical-drug-others-miscellaneous-text.png"></b-img>
                  </span>
                   </b-col>
                    <b-col cols="5" lg="3" xl="3">
                      <b-row>
                  <b-icon id="iconos" icon="calendar2-check-fill"  variant="primary" style="margin: 7px"
                  ></b-icon> Fecha de consulta: <br> {{receta.fechaConsulta}}
                  </b-row>
                  <b-row>
                      <b-icon id="iconos" icon="calendar2-check-fill" variant="primary" style="margin: 7px"
                      ></b-icon>Nombre del medico: <br> {{receta.nombreMedico}}
                      </b-row>
                </b-col>
                  <b-col cols="5" lg="3" xl="2">
                    <b-row>
                      <b-icon id="iconos" icon="file-text-fill" variant="primary" style="margin: 7px"
                      ></b-icon>  Fecha  de incio: <br>{{receta.recetaFechaInicio}} 
                      </b-row>
                      <b-row>
                        <b-icon id="iconos" icon="file-text-fill" variant="primary" style="margin: 7px"
                        ></b-icon> Fecha de fin: <br>{{receta.recetaFechaFin}}
                      </b-row>
                  </b-col>
                 <b-col  cols="5" lg="3" xl="2">
                   <b-row>
                      <b-icon id="iconos" icon="alarm-fill" variant="primary" style="margin: 7px"
                      ></b-icon>  Vigencia: <br>{{receta.vigencia}} 
                      </b-row>
              </b-col>
              <b-col  cols="7" lg="2" xl="2">
                <b-button
                  
                  href="#/receta" block
                   type="submit" 
                style="color: #7952b3;" 
                   >
                  <b-icon icon="pencil-fill"></b-icon> Detalles</b-button
                >
              </b-col>
                 </b-row> 
         </b-card>
  
  </div> 
</card>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
    import axios from "axios";
    Vue.use(VueClipboard);
export default {
  name: "viewRecetas",
  data() {
    return {
      recetass: [],
    };
  },
  props: ["id"],
  methods: {
     obtenerReceta(){
          const path = "https://sistema-medico-app.herokuapp.com/api/ssm/recetas/26";
          axios
          .get(path)
          .then((response) => {
            this.recetass =response.data;
            console.log(this.recetass);
          })
           .catch((error) => {
          console.log(error);
        });
        },

      modificarMedicamentos(){
        for(var i=0; i<=this.medicamentos.length-1; i++){
            var auxiliar;
            var auxiliar2;
            auxiliar = this.medicamentos[i].fechaInicio.toString();
            auxiliar2 = this.medicamentos[i].fechaFin.toString();
            this.medicamentos[i].fechaInicio = auxiliar.substring(0,10);
            this.medicamentos[i].fechaFin = auxiliar2.substring(0,10);
        }
      }
  }, created(){
      this.obtenerReceta()
  }
};
</script>

<style>
#carta {
  
  background-color: #4CC5EA;
}
#icono{
  width: 3.2cm ;
  height: 2cm;
}
#iconos{
  width: 0.5cm ;
  height: 0.5cm;
}
</style>