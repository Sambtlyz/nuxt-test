<template>
    <!-- Hero Area Starts -->
    <div class="hero-area">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="hero-content">
                        <div class="hero-content-inner">							
                            <h2 class="title">POS | Order | Stock Manager V 2.0-UX</h2>
                            <p class="caption-text">มันคือระบบจัดการร้านค้าออนไลน์ แบบครบวงจร มีทั้ง ระบบขาย ระบบจัดส่ง ระบบบริการหลังการขาย  ระบบสั่งซื้อ ระบบคลังสินค้า ระบบสาขา ระบบตัวแทนจำหน่าย ระบบบัญชี สรุปรายงาน และ API E-Commerce ใช้งานแบบ (Real-Time) เหมาะสำหรับธุรกิจที่ต้องการกระจายสินค้า ครอบคลุมถึงพ่อค้าแม่ค้าออนไลน์ ทางเลือกใหม่ของคนยุคใหม่.</p>
                            <a href="https://www.pos-agent.com/" target="_blank" class="btn btn-default btn-default-fill-sqr">สมัคร ใช้งานฟรี 10 วัน</a>
                            <a href="https://youtu.be/V9A26rdO6QE" target="_blank" class="btn btn-default btn-primary-fill-sqr" data-lity >แนะนำโปรแกรม</a>
                        </div>
                    </div>
                </div>
                <div>
                 <sliderhero/>
                 </div>
            </div>
        </div>
      
    </div>
    
    <!-- Hero Area Ends -->
</template>


<script>
import sliderhero from '~/components/layout/sliderhero.vue'
export default {
    components:{
        sliderhero
    },
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



