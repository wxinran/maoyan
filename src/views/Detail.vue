<template>
    <div class="detail_page">
        <Header :title="detailMovie.nm">
            <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <div class="detail_content">
            <div class="detail_list">
				<div class="detail_list_bg" :style="{ 'background-image' : 'url('+ img +')' }"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="img" alt="">
					</div>
					<div class="detail_list_info">
						<h2>{{ detailMovie.nm }}</h2>
						<p>{{ detailMovie.enm }}</p>
						<p>{{ detailMovie.sc }}</p>
						<p>{{ detailMovie.cat }}</p>
						<p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
						<p>{{ detailMovie.pubDesc }}</p>
					</div>
				</div>
			</div>
            <div class="detail_intro">
				<p>
                    {{ detailMovie.dra }}
                </p>
			</div>
            <div class="detail_player swiper-container" ref="detail_player">
				<ul class="swiper-wrapper">
					<li v-for="(item,index) in detailMovie.photos" :key="index" class="swiper-slide">
						<div>
							<img :src="item | setWH('420.279')" alt="">
						</div>
					</li>
				</ul>
			</div>
        </div>
    </div>
</template>

<style lang="scss">
.detail_page {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: white;
    .detail_content {
        display: block;
        margin-bottom: 0;
        .detail_list {
            height: 200px;
            width: 100%;
            position: relative;
            overflow: hidden;
            .detail_list_bg {
                width: 100%;
                height: 100%;
                background: 0 40%;
                filter: blur(20px);
                background-size: cover;
                position: absolute;
                left: 0;
                top: 0;
            }
            .detail_list_filter {
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: #40454d;
                opacity: .55;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
            }
            .detail_list_content {
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                .detail_list_img {
                    width: 108px;
                    height: 150px;
                    border: solid 1px #f0f2f3;
                    margin: 20px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .detail_list_info {
                    margin-top: 20px;
                    h2 {
                        font-size: 20px;
                        color: white;
                        font-weight: normal;
                        line-height: 40px;
                    }
                    p {
                        color: white;
                        line-height: 20px;
                        font-size: 14px;
                        color: #ccc;
                    }
                }
            }
        }
        .detail_intro {
            padding: 10px;
        }
        .detail_player {
            margin: 20px;
            .swiper-slide {
                width: 140px;
                height: 93px;
                margin-right: 20px;
                text-align: center;
                font-size: 14px;
                img {
                    width: 140px;
                    height: 93px;
                    margin-bottom: 5px;
                }
                p:nth-of-type(2) {
                    color:#999;
                }
            }
        }
    }
    
}
</style>

<script>
// 引入组件
import Header from '@/components/Header';
// 定义接口
export default {
    data() {
        return {
            detailMovie: {},
            img: ''
        }
    },
    // 注册组件
    components: { Header },
    // 方法
    methods: {
        handleToBack(){
            this.$router.back();
        }
    },
    activated() {
        // 发送请求
        this.$http
            .get('/ajax/detailmovie?movieId=' + this.$route.params.id)
            // 返回数据
            .then((res) => {
                if (res.statusText === 'OK') {
                    // 存储数据
                    this.detailMovie = res.data.detailMovie;
                    this.img = this.detailMovie.img.replace(/w\.h/,'148.208');
                    this.$nextTick(()=>{
                        new Swiper(this.$refs.detail_player , {
                            slidesPerView : 'auto',
                            freeMode : true,
                            freeModeSticky: true
                        });
                    });
                }
            })
    },
}
</script>