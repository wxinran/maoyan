<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul>
                    <li v-for="item in hotList" :key="item.id">{{ item.nm }}</li>
                </ul>
            </div>
            <div class="city_sort">
                <div v-for="item in cityList" :key="item.index">
                    <h2>{{ item.index }}</h2>
                    <ul>
                        <li v-for="itemList in item.list" :key="itemList.id" >{{ itemList.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="item in cityList" :key="item.index">{{ item.index }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.city_body {
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    .city_list {
        flex: 1;
        overflow: auto;
        background: #FFF5F0;
        .city_hot {
            margin-top: 20px;
            h2 {
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                background:#F0F0F0;
                font-weight: normal;
            }
            ul {
                &::after{ 
                    content:"";
                    display: block;
                    clear:both;
                }
                li {
                    float: left;
                    background: #fff;
                    width: 29%;
                    height: 33px;
                    margin-top: 15px;
                    margin-left: 3%;
                    padding: 0 4px;
                    border: 1px solid #e6e6e6;
                    border-radius: 3px;
                    line-height: 33px;
                    text-align: center;
                    box-sizing: border-box;
                } 
            } 
        }
        .city_sort {
            div {
                margin-top: 20px;
                h2 {
                    padding-left: 15px;
                    line-height: 30px;
                    font-size: 14px;
                    background:#F0F0F0;
                    font-weight: normal;
                }
                ul {
                    padding-left: 10px;
                    margin-top: 10px;
                    li {
                        line-height: 30px;
                    }
                }
            }
        }
    }
    .city_index {
        width:20px;
        display: flex;
        background-color: white;
        flex-direction:column;
        justify-content:center;
        text-align: center;
        border-left:1px #e6e6e6 solid;
    }
}
</style>
<script>
export default {
    // 数据
    data() {
        return {
            cityList: [],
            hotList: []
        }
    },
    // 方法
    methods: {
        //城市分类
        formatCityList(cities) {
            // 创建数组，存放分类后的城市
            let cityList = [];
            let hotList = [];
            // 循环判断热门城市
            for(let i = 0; i < cities.length; i++) {
                if (cities[i].isHot === 1) {
                    hotList.push( cities[i] );
                }
            }
            // 循环进行城市分类
            for(let i = 0; i < cities.length; i++ ) {
                // 匹配城市的首字母
                let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                // 判断是否有分类
                if(toCom(firstLetter)) {
                    // 没有分类添加分类
                    cityList.push({ index: firstLetter, list: [{ nm: cities[i].nm, id: cities[i].id }]});
                // 有分类，直接push
                } else {
                    for(let j = 0; j < cityList.length; j++) {
                        if( cityList[j].index === firstLetter) {
                            cityList[j].list.push( { nm: cities[i].nm, id: cities[i].id });
                        }
                    }
                }
            }
            // 排序
            cityList.sort((n1, n2) => {
                if( n1.index > n2.index ) {
                    return 1;
                } else if ( n1.index < n2.index) {
                    return -1;
                } else {
                    return 0;
                }
            })
            // 判断是否存在改城市首字母的方法
            function toCom(firstLetter) {
                for(let i = 0; i < cityList.length; i++) {
                    if( cityList[i].index === firstLetter) {
                        return false;
                    }
                }
                return true;
            }
            // 返回数据
            return {
                cityList,
                hotList
            }

        }
    },
    // 组件创建完成时
    created () {
        // 发送请求
        this.$http
            .get('/api/cityList')
            // 返回
            .then((res) => {
                // console.log(res)
                // 数据返回
                if(res.data.msg === 'ok') {
                    let data = res.data.data.cities;
                    // 调用方法给城市分类
                    let { cityList, hotList } = this.formatCityList(data);
                    this.cityList = cityList;
                    this.hotList = hotList;
                }
            })
    }
}
</script>