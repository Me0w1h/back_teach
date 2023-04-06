<template>

    <div id="building"></div>
</template>

<script>
axios.defaults.withCredentials = true;
const ip ="124.222.86.127";
const port_back =":54321";
import axios from 'axios'
export default {
    name: 'home',
    data() {
        return {
            userImg: require('../../src/assets/images/userImg.jpg')
        }
    },
    mounted() {

        this.testlogin();
    },
    methods: {
        sleep(n) {
            var start = new Date().getTime();
            while (true) {
                if (new Date().getTime() - start > n) {
                    break;
                }
            }

        },

        testlogin() {

            axios.get("http://" + ip +port_back+ "/admin").then(res => {

                if (res.data.code == 20001) {



                } else if (res.data.code == 20000) {

                    this.$message.error("请先登录!!!");

                    this.sleep(1000);
                    location.href = "http://"+ip+":8888/#/login"


                   
                }

            })
        },
    }
}
</script>