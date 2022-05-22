<template>
  <div id="page">
    <Title id="title"></Title>

    <div class="page_content" ref="page_content">
      <About id="about"></About>
      <Menus id="menu"></Menus>
      <Happenings id="happenings" :bookNow="companyInfo.booking"></Happenings>
      <Contact  id="contact" 
        :address="companyInfo.address" 
        :phone="companyInfo.phnoe" 
        :daily="companyInfo.daily" 
        :email="companyInfo.email"
      ></Contact>
      <BookNow id="bookNow"></BookNow>
    </div>
  </div>
</template>

<script>
import { companyInfo } from '@/api/index.js'

export default {
  name: 'IndexPage',
  data: () => {
      return {
          companyInfo: {},
      }
  },
  methods: {
      async handleCompanyInfo () {
          const res = await companyInfo.getCompanyInfo()
          this.companyInfo = res.data.data
          this.$nuxt.$emit('getBooking', this.companyInfo.booking)
      }
  },
  mounted() {
    this.handleCompanyInfo();
    setTimeout(() => {
      this.$refs.page_content.classList.add("anim_page_content")
    }, 2000)
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.page_content {
  margin-top: 100vh;
  max-width: 1440px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

@font-face {
    font-family: Avenir;
    src: url("~/assets/fonts/Avenir.ttf") format("truetype");
}
@font-face {
    font-family: GenWanMin;
    src: url("~/assets/fonts/GenWanMin-R.ttf") format("truetype");
}
@font-face {
    font-family: MontereyMediumFLF;
    src: url("~/assets/fonts/MontereyMediumFLF.ttf") format("truetype");
}

.links {
  padding-top: 15px;

}
.anim_page_content {
  animation: 1s anim-content linear;
  transition: top 1s;
  margin-top: 0px;
}
@keyframes anim-content {
  0% {
    margin-top: 100vh;
  }
  100% {
    margin-top: 0px;
  }
}

@media (max-width: 1264px) {
  .page_content {
      max-width: 1024px;
  }
}


@media (max-width: 960px) {
  .page_content {
      max-width: 900px;
  }
}


@media screen and (max-width: 600px) {
  #page {
    width: 100%;
  }
  .page_content {
    width: 100%;
  }

  .anim_page_content {
    margin-top: 60px;
  }
  @keyframes anim-content {
    0% {
      margin-top: 100vh;
    }
    100% {
      margin-top: 60px;
    }
  }
}
</style>
