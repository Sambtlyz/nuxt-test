<template>
  <div>
    <!-- Preloader start -->
    <div></div>
    <!-- Preloader end -->
    
    <!-- Head area start -->
     <Head />
    <!-- Head area end -->

    <!-- Hero area start -->
    <Heroarea/>
    <!-- Hero area end -->


    <!-- Ourteam area strat -->
    <Ourteam/>
    <!-- Ourteam area End -->
 
  </div>
  
</template>

<script>
import Head from '~/components/layout/Head.vue'
import Logo from '~/components/Logo.vue'
import Heroarea from '~/components/layout/Heroarea.vue'
import Ourteam from '~/components/layout/Ourteam.vue'


export default {
  components: {
    Logo,Head,Heroarea,Ourteam
  },
  mounted() {
    this.renderCarousel()
  },
  methods: {
    renderCarousel(){
      $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    })
  },
    }

  }  

</script>


