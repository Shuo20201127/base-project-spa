<template>
  <div>
    <Layout id='layout'>
      <div class="" ref="barrier"></div>
      <Content class="content">
        <Nuxt />
      </Content>
      
    </Layout>
    <footer class="footer" ref="footer">
        <a href="#about">ABOUT</a>
        <a href="#menu">MENU</a>
        <a href="#happenings">HAPPENINGS</a>
        <a href="#contact">CONTACT</a>
        <a :href="booking" target="_blank">BOOK NOW</a>
      </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      booking: null
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.$refs.barrier.classList.add("barrier")
    // }, 2000)
    setTimeout(() => {
      
      // document.getElementById("layout").classList.add("ivu-layout__bg")
      // this.$refs.barrier.classList.add("barrier__hide")
      this.$refs.footer.classList.add("footer__anim")
    }, 2500)
  },
  created() {
    this.$nuxt.$on('getBooking', (data) => {
      this.booking = data;
    })
  },
  methods: {
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
body {
  height: 100vh;
}
#__nuxt {
  height: 100vh;
}
#__layout {
  overflow: hidden;
  height: 100%;
}
#__layout > div {
  overflow: hidden;
  height: 100%;
}
body::-webkit-scrollbar {
  display:none
}
.ivu-layout {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('~/assets/images/Layer 1.jpg');
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  height: 100%;
  transform: scale(1.2);
  animation: 2s anim-layout ease; 
  transform: scale(1);
}
.ivu-layout__bg {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('~/assets/images/Layer 1.jpg');
}
.barrier {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* z-index: 5; */
  background: rgba(0, 0, 0, 0);
  animation: 0.1s anim-barrier ease; 
  background: rgba(0, 0, 0, 0.6);
}
.barrier__hide {
  display: none;
}

@keyframes anim-barrier {
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.6);
  }
}

@keyframes anim-layout {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
<style  scoped>
.content {
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  /* margin-top: 64px; */
  /* display: flex;
  max-width: 960px; */
  /* display: flex;
  flex-direction: column;
  max-width: 1400px;
  align-self: center; */
}
.content::-webkit-scrollbar {
  display:none
}
.footer{
  position: fixed;
  display: flex;
  width: 100%;
  display: flex;
  height: 72px;
  bottom: -72px;
  background: #1F1F1F;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
}
.footer__anim {
  animation: 0.5s anim-footer linear; 
  bottom: 0;
}
.footer > a {
  padding: 24px 48px;
  color: #FFFFFF;
}
@keyframes anim-footer {
  from {
    bottom: -72px;
  }
  to {
    bottom: 0px;
  }
}
@media screen and (max-width: 600px) {
  .content {
    width: 100%;
    padding: 12px;
  }

  .footer {
    height: 48px;
  }
  .footer > a {
    padding: 0;
    color: #FFFFFF;
    font-size: 12px;
  }
}
</style>
