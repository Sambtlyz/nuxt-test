<template>
     <div class="col-xs-12 col-md-6">
                    <div class="hero-carousel-wrap">
                        <div class="owl-carousel owl-theme hero-carousel ">
                            <div class="owl-carousel ">
                                <a href="https://youtu.be/V9A26rdO6QE" data-lity><img src="img/slide-1.png"></a>
                            </div>
                            <div class="owl-carousel ">
                                <a href="https://youtu.be/V9A26rdO6QE" data-lity><img src="img/slide-2.png"></a>
                            </div>
                            <div class="owl-carousel ">
                                <img src="img/slide-3.png" alt="Slider">
                            </div>
                            <div class="owl-carousel ">
                                <img src="img/slide-4.png" alt="Slider">
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
 
  mounted() {
    this.renderCarousel()
  },
  methods: {
    renderCarousel(){
      $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    })
  }
    }

  }  

</script>