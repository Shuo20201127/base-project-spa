<template>
    <div ref="title" class="title">
      <div class='line' ref="line">
        <img :src="require('~/assets/images/s.svg')" class="span_S" />
        <img :src="require('~/assets/images/a.svg')" class="span_A" />
        <img :src="require('~/assets/images/k.svg')" class="span_K" />
        <img :src="require('~/assets/images/e.svg')" class="span_E" />
        <img :src="require('~/assets/images/h.svg')" class="span_H" />
      </div>
    </div>
</template>
<script>
export default {
  name: 'Title',
  mounted() {
    setTimeout(() => {
      this.$refs.title.classList.add("aline")
    }, 2000)
    setTimeout(() => {
    //   this.$refs.title.classList.remove("title")    
    //   this.$refs.title.classList.add("last_title")
      
    }, 3000)
  }
}
</script>
<style scoped>
.title {
    position: absolute; 
    left: 50%; 
    top:50%; 
    z-index: 3;
    height: 100vh;
}
/* crops animations that exceeds one line area */
.aline {
    position: relative;
    transform: scale(0.2);
    animation: 1s anim-popoutin linear;
    transition: top 1s;
    top: 64px;
    height: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  /* transform: scale(1); */
}
.line {
  position: absolute;
}

.line img {
  font-size: 16px;
  position: absolute;
}

.span_S {
  left: -200px;
  animation: 2s anim-span_S ease;
  transition: left 2s;
}
.span_A {
  left: -110px;
  animation: 2s anim-span_A ease;
  transition: left 2s;
}
.span_K {
left: 0px;
  animation: 2s anim-span_K ease;
  /* transition: right 2s; */
}
.span_E {
  left: 100px;
  animation: 2s anim-span_E ease;
  transition: left 2s;
}
.span_H {
  left: 200px;
  animation: 2s anim-span_H ease;
  transition: left 2s;
}
.last_title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    left: 0;
    height: 30px;
}

@keyframes anim-popoutin {
  0% {
    top: 50%;
    color: black;
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
    top: 64px;
    height: 0;
    left: 0;
  }

}

@keyframes anim-span_S {
  0% {
    left: -300px;
    opacity: 0;
  }
  100% {
    left: -200px;
    opacity: 1;
  }
}
@keyframes anim-span_A {
  0% {
    left: -200px;
    opacity: 0;
  }
  100% {
    left: -110px;
    opacity: 1;
  }
}
@keyframes anim-span_K {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes anim-span_E {
  0% {
    left: 200px;
    opacity: 0;
  }
  100% {
    left: 100px;
    opacity: 1;
  }
}
@keyframes anim-span_H {
  0% {
    left: 300px;
    opacity: 0;
  }
  100% {
    left: 200px;
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
    .line {
        transform: scale(0.3);
    }
    .aline {
        transform: scale(0.5);
        animation: 1s anim-popoutin linear;
        top: 24px;
    }
    @keyframes anim-popoutin {
        0% {
            top: calc(50% - 30px);
            color: black;
            transform: scale(1);
        }
        100% {
            transform: scale(0.5);
            top: 24px;
        }
    }
}
</style>