<template>
    <div class="menu">
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
        <div>
            <div class="menu_title">OUR MENU</div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            imageValue: 0,
            imgList: []
        }
    }
}
</script>
<style scoped>
.menu {
    display: flex;
    height: 100vh;
}
.menu > div {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.menu_title {
    color: #FFFFFF;
    font-size: 40px;
    font-family: 'MontereyMediumFLF';
    letter-spacing: 2px;
    margin-bottom: 76px;
}
.about_content {
    color: #FFFFFF;
    font-size: 18px;
    font-family: 'Avenir';
    line-height: 28px;
}

@media screen and (max-width: 600px) {
    .menu {
        height: 100vh;
        flex-direction: column;
    }
    .menu > div {
        width: 100%;
        padding: 16px;
    }
    .menu_title {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 30px;
    }
    .about_content {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>