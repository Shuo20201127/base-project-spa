<template>
    <div class="about">
        <div>
            <div class="about_title">
                YAKITORI BAR <br/> FOR SAKE LOVERS
            </div>
            <div class="about_content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
            </div>
        </div>
        <div>
            <Carousel
                v-model="imageValue"
                loop
                arrow="never"
                dots="outside"
                >
                    <CarouselItem
                        v-for="(pic,idx) of imgList"
                        :key="idx"
                    >
                        <img :src="pic" style="width: 100%">
                    </CarouselItem>
                </Carousel>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            imageValue: 0,
            imgList: [
                require('~/assets/images/A_0517.jpg'),
                require('~/assets/images/A_0517.jpg'),
                require('~/assets/images/A_0517.jpg'),
                require('~/assets/images/A_0517.jpg')
            ]
        }
    }
    
}
</script>
<style scoped>
.about {
    display: flex;
    height: 100vh;
}
.about > div {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.about_title {
    color: #FFFFFF;
    font-size: 62px;
    font-family: 'MontereyMediumFLF';
    letter-spacing: 3.1px;
    line-height: 74px;
    margin-bottom: 76px;
}
.about_content {
    color: #FFFFFF;
    font-size: 18px;
    font-family: 'Avenir';
    line-height: 28px;
}

@media screen and (max-width: 600px) {
    .about {
        height: 100vh;
        flex-direction: column;
    }
    .about > div {
        width: 100%;
        padding: 16px;
    }
    .about_title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 30px;
    }
    .about_content {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>