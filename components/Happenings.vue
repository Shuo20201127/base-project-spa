<template>
    <div class="happenings">
        <div class="happenings_page" v-for="(page, index) of pages" :key="index" :class="{happenings_page__reverse: page.isReverse}">
            <div>
                <div class="happenings_title" v-html="page.title"></div>
                <div class="happenings_content" v-html="page.content"></div>
                <a :href="bookNow" class="happenings_btn" target="_blank">BOOK NOW</a>
            </div>
            <div>   
                <Carousel
                    v-model="page.imageValue1"
                    loop
                    arrow="never"
                    dots="outside"
                    >
                        <CarouselItem
                            v-for="(pic,idx) of page.imgList"
                            :key="idx"
                        >
                            <img :src="pic" style="width: 100%">
                        </CarouselItem>
                    </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['bookNow'],
    data: () => {
        return {
            pages: [{
                title: "WEEKEND SAKE FREE FLOW",
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                imgList: [
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg')
                ],
                imageValue1: 0,
                isReverse: false
            }, {
                title: "WEEKEND SAKE FREE FLOW",
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                imgList: [
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg'),
                    require('~/assets/images/A_0619.jpg')
                ],
                imageValue1: 0,
                isReverse: true
            }] 
        }
    }
}
</script>
<style scoped>
.happenings_page {
    display: flex;
    height: 100vh;
}
.happenings_page__reverse {
    flex-direction: row-reverse;
}
.happenings_page > div {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.happenings_title {
    color: #FFFFFF;
    font-size: 40px;
    font-family: 'MontereyMediumFLF';
    letter-spacing: 2px;
    line-height: 37px;
    margin-bottom: 76px;
}
.happenings_content {
    color: #FFFFFF;
    font-size: 18px;
    font-family: 'Avenir';
    line-height: 28px;
    margin-bottom: 28px;
}
.happenings_btn {
    width: 140px;
    height: 50px;
    background: #999999;
    color: #ffffff;
    font-size: 15px;
    font-family: 'Avenir';
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 600px) {
    .happenings_page {
        height: 100vh;
        flex-direction: column;
    }
    .happenings_page > div {
        width: 100%;
        padding: 16px;
    }
    .happenings_title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .happenings_content {
        font-size: 14px;
        line-height: 20px;
    }
    .happenings_btn {
        width: 100px;
        height: 32px;
        font-size: 12px;
    }
}
</style>