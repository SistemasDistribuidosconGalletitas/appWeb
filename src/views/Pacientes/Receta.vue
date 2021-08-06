<template >
<card id="carta">
 
    <b-form>
        <b-row>
      <h1 class="mb-0">Receta Medica</h1>
      
        </b-row>
        <hr>
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="ID de la receta"
              placeholder="Escriba id"
              v-model="user.idReceta"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Nombre del medico"
              placeholder="medico"
              v-model="user.medico"
            ></base-input>
          </b-col>
           
             <b-col lg="4">
            <base-input
              type="text"
              label="Fecha de la consulta"
              placeholder="Consulta"
              v-model="user.fechaConsulta"
            >
            </base-input>
          </b-col>
        </b-row>
          
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Fecha de inicio del medicamento"
              placeholder="Escriba cuando empezar el medicamento"
              v-model="user.recetaFechaInicio"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Fecha de termino del medicamento"
              placeholder="Escriba cuando se debe acaber el medicamento"
              v-model="user.recetaFechaFin"
            >
            </base-input>
          </b-col>
        </b-row>
       <b-row >       
        </b-row>
      </div>
     <b-row aling="rigth">
              <b-col></b-col>
                <b-button class="m-1" 
                @click="obtenerMedicamento()" 
                type="submit" 
                style="color: #7952b3;" 
                > Ver medicamentos</b-button>
              </b-row>
    </b-form>
 


        <b-card id="tarjet" bg-variant="white"
             text-variant="black" 
             class="p-2 mb-4 bg-white rounded cardText"
             v-for="medicamento in medicamentos"
             v-bind:key="medicamento.id"
            >
                <b-card-title><h3> {{medicamento.nombre}}</h3></b-card-title>
                 <b-row align-v="center" class="card-item"> 
                  <b-col align="center" cols="10" md="10" lg="2" xl="2">
                  <span class="rounded-circle">
                  <b-img id="icono" src="https://e7.pngegg.com/pngimages/12/979/png-clipart-medical-prescription-computer-icons-pharmaceutical-drug-others-miscellaneous-text.png"></b-img>
                  </span>
                   </b-col>
                    <b-col cols="6" lg="3" xl="4">
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
      user: {
        idReceta: '1',
        fechaConsulta: '2021-08-05',
        recetaFechaInicio: '2021-08-10',
        recetaFechaFin: '2021-08-05',
        medico: 'Pedro Arturo Farias',
      },
      medicamentos: [],
    };
  },
  props: ["id"],
  methods: {
     obtenerMedicamento(){
          const path = "https://sistema-medico-app.herokuapp.com/api/ssm/medicamentos/receta/1";
          axios
          .get(path)
          .then((response) => {
            this.medicamentos =response.data;
            console.log(this.medicamentos);
          })
           .catch((error) => {
          console.log(error);
        });
        },
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
