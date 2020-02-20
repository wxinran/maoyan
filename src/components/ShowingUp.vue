<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic">
                    <img :src="item.img | setWH('128.180')">
                </div>
                <div class="info_list">
                    <h2>{{item.nm}} <img v-if="item.version" src="@/assets/maxs.png" alt=""></h2>
                    <p><span>{{ item.wish}}</span> 人想看</p>
                    <p v-show="item.star">主演：{{ item.star }}</p>
                    <p>{{ item.showInfo }}</p>
                </div>
                <div :class="item.preShow ? 'btn_advance' : 'btn_mall'">
                    {{ item.preShow ? '预售' : '购买'}}
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
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
            .btn_mall {
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                cursor: pointer;
            }
            .btn_advance {
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                background-color: #3C9FE6;
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
export default {
    data() {
        return {
            movieList: [],
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
            .get('/api/movieOnInfoList?cityId=' + cityId)
            .then((res) => {
                let msg = res.data.msg;
                if( msg === 'ok' ) {
                    this.movieList = res.data.data.movieList;
                    this.prevCityId = cityId;
                }
            })
    }
}
</script>