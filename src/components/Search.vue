<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>					
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item in moviesList" :key="item.id">
                    <div class="img"><img :src=" item.img | setWH('128.180') "></div>
                    <div class="info">
                        <h4 class="mt"><span>{{ item.nm }}</span><span>{{ item.sc }}</span></h4>
                        <p v-show="item.enm">{{ item.enm }}</p>
                        <p>{{ item.cat }}</p>
                        <p>{{ item.rt }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
.search_body {
    flex: 1;
    overflow: auto;
    .search_input {
        padding: 8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
        .search_input_wrapper {
            padding: 0 10px;
            border: 1px solid #e6e6e6;
            border-radius: 5px;
            background-color: #fff;
            display: flex;
            line-height: 20px;
            i {
                font-size: 16px;
                padding: 4px 0;
            }
            input {
                border: none;
                font-size: 13px;
                color: #333;
                padding: 4px 0;
                outline: none;
                margin-left: 5px;
                width: 100%;
            }
        }
    }
    .search_result {
        h3 {
            font-size: 15px;
            color: #999;
            padding: 9px 15px;
            border-bottom: 1px solid #e6e6e6;
        }
        ul li {
            border-bottom: 1px #c9c9c9 dashed;
            padding: 10px 15px;
            box-sizing: border-box;
            display: flex;
            .img {
                width: 60px;
                float: left;
                img {
                    width: 100%;
                }
            }
            .info {
                float: left;
                margin-left: 15px;
                flex: 1;
                .mt {
                    height: 22px;
                    display: flex;
                    line-height: 22px;
                    font-size: 12px;
                    span:nth-of-type(1) {
                        font-size: 18px;
                        flex: 1;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    span:nth-of-type(2) {
                        font-size: 16px;
                        color: #fc7103;
                    }
                }
                p {
                    height: 22px;
                    line-height: 22px;
                    font-size: 12px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>
<script>
export default {
    // 数据
    data() {
        return {
            message: '',
            moviesList: []
        }
    },
    // 方法
    methods: {
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
    },
    // 监听
    watch: {
        message(newVal) {
            let me = this
            this.cancelRequest();
            // 获取当前的城市id
            let cityId = this.$store.state.city.id;
            this.$http
                .get('/ajax/search?kw=' + newVal + '&cityId=' + cityId + '&stype=-1', {
                    cancelToken: new this.$http.CancelToken( function(c) {
                        me.source = c;
                    })
                })
                // 返回数据
                .then((res) => {
                    let movies = res.data.movies;
                    if (movies) {
                        this.moviesList = res.data.movies.list;
                    }
                })
                .catch((err) => {
                    if (this.$http.isCancel(err)) {
                        console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                    } else {
                        console.log(err);
                    }
                })
        }
    }

}
</script>