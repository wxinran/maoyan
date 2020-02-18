<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{ item.nm }}</span>
                    <span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{ item.addr }}</span>
                    <span>{{ item.distance }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // 数据
    data() {
        return {
            // 影院列表数据
            cinemaList: []
        }
    },
    mounted() {
        //发送请求
        this.$http
            .get('/ajax/cinemaList?day=2020-02-18&offset=0&limit=20&optimus_code=10')
            // 返回数据
            .then((res) => {
                if (res.statusText === 'OK') {
                    // 存储影院数据
                    this.cinemaList = res.data.cinemas;
                }
            })
    }
}
</script>