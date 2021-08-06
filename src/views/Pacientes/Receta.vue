<template >
<card id="carta">
    <h1 class="mb-0">Medicamentos de la receta: </h1>
    <hr>
        <b-card id="tarjet" bg-variant="white"
             text-variant="black" 
             class="p-2 mb-4 bg-white rounded cardText"
             v-for="medicamento in medicamentos"
             v-bind:key="medicamento.id"
            >
                <b-card-title><h3> {{medicamento.nombre}}</h3></b-card-title>
                 <b-row align-v="left" class="card-item"> 
                  <b-col align="left" cols="6" md="8" lg="2" xl="2">
                  <span class="rounded-circle">
                  <b-img id="icono" src="https://e7.pngegg.com/pngimages/12/979/png-clipart-medical-prescription-computer-icons-pharmaceutical-drug-others-miscellaneous-text.png"></b-img>
                  </span>
                   </b-col>
                    <b-col cols="6" lg="3" xl="3">
                      <b-row>
                  <b-icon id="iconos" icon="calendar2-check-fill"  variant="primary" style="margin: 7px"
                  ></b-icon> Fecha de inicio: <br> {{medicamento.fechaInicio}}
                  </b-row>
                  <b-row>
                      <b-icon id="iconos" icon="calendar2-check-fill" variant="primary" style="margin: 7px"
                      ></b-icon>Fecha de termino: <br> {{medicamento.fechaFin}}
                      </b-row>
                </b-col>
                  <b-col cols="6" lg="3" xl="3">
                    <b-row>
                      <b-icon id="iconos" icon="file-text-fill" variant="primary" style="margin: 7px"
                      ></b-icon>  Cantidad de dosis al dia: <br>{{medicamento.dosis}} 
                      </b-row>
                      <b-row>
                        <b-icon id="iconos" icon="file-text-fill" variant="primary" style="margin: 7px"
                        ></b-icon> Tipo de consumo: <br>{{medicamento.tipo}}
                      </b-row>
                  </b-col>
                 <b-col  cols="6" lg="3" xl="3">
                   <b-row>
                      <b-icon id="iconos" icon="alarm-fill" variant="primary" style="margin: 7px"
                      ></b-icon>  Hora de aplicacion: <br>{{medicamento.horaAplicacion}} 
                      </b-row>
                      <b-row>
                        <b-icon id="iconos" icon="clock-fill" variant="primary" style="margin: 7px"
                        ></b-icon> intervalo: <br>{{medicamento.intervalo}}
                      </b-row>
              </b-col>
                 </b-row> 
         </b-card>
  </card>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
    import axios from "axios";
    Vue.use(VueClipboard);
export default {
  name: "verRecetas",
  data() {
    return {
      idR: this.$route.params.id,
      user: {
        idReceta: '4',
        fechaConsulta: '2021-08-05',
        recetaFechaInicio: '2021-08-10',
        recetaFechaFin: '2021-08-05',
        medico: 'Pedro Arturo Farias',
      },
      medicamentos: [],
    };
  },
  methods: {
     obtenerMedicamento(){
          const path = `https://sistema-medico-app.herokuapp.com/api/ssm/medicamentos/${this.idR}`;
          axios
          .get(path)
          .then((response) => {
            this.medicamentos =response.data;
            this.modificarMedicamentos();
            console.log(this.medicamentos);
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
  },
  created(){
      this.obtenerMedicamento();
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
.label{
  font-size: 20px;
}
</style>
