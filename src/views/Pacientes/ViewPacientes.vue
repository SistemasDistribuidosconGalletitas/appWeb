<template >
 <div >
   <br />
    <b-container fluid>
     <div >
       </div>
       <div>
 <h1 class="mb-3">Pacientes</h1>
 <b-row>

 </b-row></div>
        <b-jumbotron  bg-variant="white" class="shadow-lg p-5 mb-5 bg-white rounded"
           >
        <b-card id="tarjet" bg-variant="white"
             text-variant="black" 
             class="p-3 mb-5 bg-white rounded cardText"
             
             :current-page="currentPage"
             :per-page="porPagina"
            >
            
                <b-card-title><h3> Nombre paciente: Cristhian Enrique Olivares Lara </h3></b-card-title>
                 <b-row align-v="center" class="card-item"> 
                  <b-col align="center" cols="12" md="12" lg="2" xl="2">
                  <span class="rounded-circle">
                  <b-img id="icono" src="https://i.pinimg.com/originals/09/71/69/097169292990d91ea46ea12790f2ca7a.png"></b-img>
                  </span>
                   </b-col>

                    <b-col cols="12" lg="3" xl="3">
                  <b-icon id="iconos" icon="cash-stack"
                  ></b-icon> Contacto de urgencia: Josué Idahir
                </b-col>
                  <b-col align-self="center" lg="4" xl="5">
                      <b-icon id="iconos" icon="card-text"></b-icon> Telefono de urgencia: 288-123-32-32
                  </b-col>
                 <b-col align-self="center" cols="12" lg="3" xl="2">
                <b-button
                 
                  href="#/verrecetas" block
                  squared variant="success"
                   @click="modificarReceta(receta.idReceta)">
                  <b-icon icon="pencil-fill"></b-icon> Receta</b-button
                >
                <b-popover  placement>
                  <template>
                    <b-button
                     
                      class="close"
                      aria-label="Close"
                    >
                      <span class="d-inline-block">&times;</span>
                    </b-button>
                    Eliminar Producto
                  </template>
                </b-popover>
              </b-col>
                 </b-row> 
               
         </b-card>

        </b-jumbotron>
  </b-container>
  </div> 
</template>

<script>

 export default { 
     name: "VistaPacientes",
      data(){
        return{
          productoss: [],
          dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      mainProps: { width: 75, height: 75, class: 'm1' }
    
        };
       
      },
props: ["id"],
methods: {
modificarReceta(id) {
          this.$router.push(`https://sistema-medico-app.herokuapp.com/api/ssm/recetas/25`);
        },
}
 }


</script>
<style scoped>
#icono{
  width: 2cm ;
  height: 2cm;
}
#iconos{
  width: 0.5cm ;
  height: 0.5cm;
}
#tarjet{
  box-shadow: 3px 5px 12px 3px gray;
  border-radius: 10px, 10px, 10px, 10px;
}
</style>