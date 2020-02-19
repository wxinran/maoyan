<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{ item.nm }}</span>
                </div>
                <div class="address">
                    <span>{{ item.addr }}</span>
                    <span>{{ item.distance }}</span>
                </div>
                <div class="card">
                    <div v-for="(num, key) in item.tag" v-if="num === 1" :key="key" :class="key | classCard">{{ key | formatCard }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.cinema_body {
    flex: 1;
    overflow: auto;
    ul {
        padding: 20px;
        li {
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 20px;
            div {
                margin-bottom: 10px;
            }
            .address {
                font-size: 13px;
                color: #666;
                span:nth-of-type(1) {
                    display: inline-block;
                    width: 80%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                span:nth-of-type(2) {
                    float: right;
                }
            }
            .card {
                display: flex;
                div {
                    padding: 0 3px;
                    height: 15px;
                    line-height: 15px;
                    border-radius: 2px;
                    color: #f90;
                    border: 1px solid #f90;
                    font-size: 13px;
                    margin-right: 5px;
                    &.or {
                        color: #f90;
                        border: 1px solid #f90;
                    }
                    &.bl {
                        color: #589daf;
                        border: 1px solid #589daf;
                    }
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
    },
    // 过滤器
    filters: {
        formatCard(key) {
            let card = [
                { key: 'allowRefund', value: '改签'},
                { key: 'endorse', value: '退'},
                { key: 'sell', value: '折扣卡'},
                { key: 'snack', value: '小吃'}
            ];
            for (let i = 0; i < card.length; i++) {
                if(card[i].key === key) {
                    return card[i].value
                }
            }
            return '';
        },
        classCard(key) {
            let card = [
                { key: 'allowRefund', value: 'bl'},
                { key: 'endorse', value: 'bl'},
                { key: 'sell', value: 'or'},
                { key: 'snack', value: 'or'}
            ];
            for (let i = 0; i < card.length; i++) {
                if(card[i].key === key) {
                    return card[i].value
                }
            }
            return '';
        }
    }
}
</script>