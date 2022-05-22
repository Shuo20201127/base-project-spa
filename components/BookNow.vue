<template>
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
                <img :src="pic">
            </CarouselItem>
        </Carousel>
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