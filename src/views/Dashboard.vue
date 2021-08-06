<template>
  <div>
    <base-header class="pb-6 pb-8  pt-md-4 bg-gradient-info">
      <!-- Card stats -->
     <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      id="picture"
        caption=""
        text=""
        img-src="https://media.istockphoto.com/photos/hand-in-medical-gloves-picture-id1214977678?k=6&m=1214977678&s=612x612&w=0&h=igAAQCz7PA1wgXP7_xcIVs2vzIAPZeJG5ovo1vwtySM="
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      id="picture"
      img-src="https://centromedicoabc.com/wp-content/uploads/2021/04/banner-medicina-preventiva.jpg">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
      id="picture"
      img-src="https://media.istockphoto.com/photos/doctor-with-medical-healthcare-icon-interface-picture-id949812138?k=6&m=949812138&s=612x612&w=0&h=281TIp-a9-bt4_XirFsC9cVv66jnx6eUZe9QpkWFogo="></b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
          id="picture"
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="data:image/webp;base64,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"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
    </base-header>

<b-container fluid class="mt--7">
<b-row>
  <b-col xl="12" class="mb-1 mb-xl-0">
         <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-card-body class="pt-2">
     <div>
        <h5 class="h3">
          El proyecto estará a cargo de los estudiantes de la Maestría en Computación Aplicada del LANIA generación 2020-2022. 
        </h5>
      
        <div class="h3 mt-3">
          <i class="ni business_briefcase-24 mr-1"></i>
          Este trabajo parte de esta idea para realizar una mejor gestión sobre la toma de medicamentos de las personas que cuentan con una receta medica y la cantidad de medicamentos que estos deben de consumir, así como la hora y el tiempo que deben de tomarlas. 
        
        </div>
        <div> <p></p>
          <i class="ni education_hat mr-2"></i>Laboratorio Nacional de Informatica Avanzada
        </div>

      </div>
    </b-card-body>
  </b-card>
        </b-col>
</b-row>
</b-container>
<br> <br>
<b-row></b-row><br> <br>
    <!--Charts-->
    <b-container fluid class="mt--4">
      <b-row>
        <b-col xl="3" class="mb-1 mb-xl-0">
         <b-card id="tarjet" border-variant="primary" no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="1" class="order-lg-1">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/liz.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>
    <b-card-header class="text-center border-0 pt-6 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
      </div>
    </b-card-header>
    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div></div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center">
        <h5 class="h4">
          L.I. Lizbeth Yesenia Contreras Rivas
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-1"></i>
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>
        </div>
        </div>
    </b-card-body>
  </b-card>
        </b-col>

      <b-col xl="3" class="mb-1 mb-xl-0">
         <b-card id="tarjet" border-variant="primary" no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="1" class="order-lg-1">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/erick.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>
    <b-card-header class="text-center border-0 pt-6 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
      </div>
    </b-card-header>
    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div></div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center">
        <h5 class="h4">
          I.S.C. Erick Ricardo García García
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-1"></i>
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>
        </div>
        </div>
    </b-card-body>
  </b-card>
        </b-col>

        <b-col xl="3" class="mb-1 mb-xl-0">
         <b-card id="tarjet" border-variant="primary" no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="1" class="order-lg-1">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/alan.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>
    <b-card-header class="text-center border-0 pt-6 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
      </div>
    </b-card-header>
    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div></div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center">
        <h5 class="h4">
          I.S.C.A. Alan Pérez Taylor Martínez
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-1"></i>
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>
        </div>
        </div>
    </b-card-body>
  </b-card>
        </b-col>

        <b-col xl="3" class="mb-1 mb-xl-0">
         <b-card id="tarjet" border-variant="primary" no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="1" class="order-lg-1">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/olivas.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>
    <b-card-header class="text-center border-0 pt-6 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
      </div>
    </b-card-header>
    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div></div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center">
        <h5 class="h4">
          I.S.C Christian Enrique Olivares Lara
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-1"></i>
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>
        </div>
        </div>
    </b-card-body>
  </b-card>
        </b-col>
      </b-row>
      <!-- End charts-->

    </b-container>
    <br>
    <p></p>
<p></p>
        
  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
         slide: 0,
        sliding: null, 
      };
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
     
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
#ig{
  width: 18cm ;
  height: 8cm;
}
#tarjet{
  box-shadow: 3px 5px 12px 3px #4CC5EA;
  border-radius: 10px, 10px, 10px, 10px;
}
#picture{
   width: 1024px;
  height: 300px;
}
</style>
