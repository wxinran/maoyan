<template>
    <div class="movie_body">
        <ul>
            <router-link tag="li" :to="'/detail/' + item.id " v-for="item in comingList" :key="item.id">
                <div class="pic" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')"></div>
                <div class="info_list">
                    <h2 @tap="handleToDetail(item.id)">{{ item.nm }} <img v-if="item.version" src="@/assets/maxs.png" alt=""></h2>
                    <p><span class="person">{{ item.wish }}</span> 人想看</p>
                    <p>主演: {{ item.star }}</p>
                    <p>{{ item.rt }}上映</p>
                </div>
                <div class="btn_pre">
                    想看
                </div>
            </router-link>
        </ul>
    </div>
</template>
<style lang="scss">
.movie_body {
    flex: 1;
    overflow: auto;
    ul {
        margin:0 12px;
        overflow: hidden;
        li {
            margin-top: 12px;
            display: flex;
            align-items: center;
            border-bottom: 1px #e6e6e6 solid;
            padding-bottom: 10px;
            .pic {
                width: 64px;
                height: 90px;
                img {
                    width: 100%;
                }
            }
            .info_list {
                margin-left: 10px;
                flex: 1;
                position: relative;
                h2 {
                    font-size: 17px;
                    line-height: 24px;
                    width: 150px;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    img {
                        padding-left: 5px;
                        width: 50px;
                    }
                }
                p {
                    font-size: 13px;
                    color: #666;
                    line-height: 22px;
                    width: 200px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    span {
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }
                }
            }
            .btn_pre {
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                background-color: #FAAF00;
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
}
</style>
<script>
//暴露接口
export default {
    // 数据
    data() {
        return {
            comingList: [],
            prevCityId: -1
        }
    },
    activated() {
        // 获取state中的城市id
        let cityId = this.$store.state.city.id;
        // 判断城市是否修改
        if (this.prevCityId === cityId) {
            return;
        }
        // 城市修改请求数据
        this.$http
            .get('/ajax/comingList?ci=' + cityId + '&token=bLLOajfjB689MOBKztwUNmBLOvAAAAAA-AkAAIyAkolPug7UppDJKy20IP1bndglQKIG_BsNQ7T5eoHUXzKX7YfISv-z7zIkmY9qPA&limit=10&optimus_uuid=D0C18E00480A11EA966EF5530B3A8582F2325B0C1FFB4B7C91A3A734D777FCC0&optimus_risk_level=71&optimus_code=10')
            // 返回结果
            .then((res) => {
                if (res.statusText === 'OK') {
                    this.comingList = res.data.coming;
                    this.prevCityId = cityId;
                }
            })
    }
}
</script>