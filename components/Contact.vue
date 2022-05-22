<template>
    <div class="contact">
        <div>
            <div>
                <div class="contact_title">LOCATION</div>
                <div class="contact_content">{{address}}</div>
            </div>
            <div class="contact_HOURS">
                <div class="contact_title">HOURS</div>
                <div class="contact_content" v-for="(daily, index) of daily" :key="index">
                    {{daily.start_day}} - {{daily.end_day}}: {{daily.start_time}}-{{daily.end_time}}{{daily.meridiem}}
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="contact_title">CONTACT US</div>
                <div class="contact_content" v-if="email">{{email.toUpperCase()}}</div>
                <div class="contact_content">{{phone}}</div>
            </div>
            <div class="contact_content contact_content__more">
                VIP ROOMS RESERVATIONS AVAILABLE FOR PARTIES OF FOUR GUESTS OR MORE.
            </div>
            <div class="contact_form">
                <Form ref="formValidate" :model="formValidate">
                    <FormItem label="" prop="email" >
                        <Input v-model="formValidate.email" placeholder="     EMAIL ADDRESS"/>
                    </FormItem>
                </Form>
                <Button class="contact_btn">
                    SIGN UP
                </Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['daily', 'email', 'phone', 'address'],
    data: () => {
        return {
            imageValue: 0,
            imgList: [],
            formValidate: {
              email: null
            }
        }
    }
}
</script>
<style scoped>
.contact {
    display: flex;
    margin-bottom: 100px;
}
.contact > div {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
}
.contact_title {
    color: #FFFFFF;
    font-size: 31px;
    font-family: 'MontereyMediumFLF';
    letter-spacing: 1.55px;
    line-height: 37px;
    margin-bottom: 36px;
}
.contact_content {
    color: #FFFFFF;
    font-size: 18px;
    font-family: 'Avenir';
    line-height: 28px;
}
.contact_content__more {
    margin-top: 40px;
    margin-bottom: 40px;
}
.contact_HOURS {
    margin-top: 80px;
}
.contact_form {
    display: flex;
}
.contact_btn {
    height: 60px;
    border-radius: 0;
    font-family: 'MontereyMediumFLF';
    font-size: 31px;
    margin-left: 30px;
    color: #191919;
}

@media (max-width: 1264px) {
  .contact_btn {
    height: 48px;
    font-size: 14px;
  }
}

@media (max-width: 960px) {
  .contact_btn {
    height: 40px;
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
    .contact {
        flex-direction: column;
        margin-bottom: 60px;
    }
    .contact > div {
        width: 100%;
        padding: 16px;
    }
    .contact_title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .contact_content {
        font-size: 14px;
        line-height: 20px;
    }
    .contact_HOURS {
        margin-top: 40px;
    }
    .contact_btn {
        height: 32px;
        border-radius: 0;
        font-family: 'MontereyMediumFLF';
        font-size: 16px;
        margin-left: 16px;
        color: #191919;
    }
}
</style>
<style>
.contact .ivu-input {
    height: 60px;
    width: 300px;
    border-radius: 0;
    background: #191919;
    border: 0.25px solid #E1DCCE;
    font-size: 18px;
    color: #FFFFFF;
    padding-left: 20px;
    font-family: 'Avenir';
}
@media (max-width: 1264px) {
    .contact .ivu-input  {
        height: 48px;
        font-size: 14px;
    }
}

@media (max-width: 960px) {
    .contact .ivu-input  {
        height: 40px;
        font-size: 14px;
    }
}
@media screen and (max-width: 600px) {
    .contact .ivu-input {
        height: 32px;
        width: 180px;
        font-size: 14px;
    }
}
</style>