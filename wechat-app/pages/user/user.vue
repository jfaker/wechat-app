<template>
    <view class="content">
	 
			<view class="title" v-if="hasLogin">
				<view class="header">	<image  class="header" :src="userImg"></image></view>
				<view  class="nickName">{{userName}}</view>
			</view>
			<view class="title" v-if="!hasLogin">
				<view class="header">	<image  class="header" :src="img"></image></view>
				<view  class="nickName">{{msg}}</view>
			</view>

	 
		
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							个人资料
							<text class="uni-badge uni-navigate-badge uni-badge-inverted">去填写</text>
						</view>
					</view>
		
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							我的二维码
						</view>
					</view>
		
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							我的地址
						</view>
					</view>
					
		
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="clearStorage">
						<view class="uni-list-cell-navigate uni-navigate-right">
							清除缓存
						</view>
					</view>
					
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
			data(){
				return{
					img:'/static/img/nologin.png',
					msg:'未登录'
				}
				
			},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin','userImg','userName']) 
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
								console.log('------logout-------')
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        }
    }
</script>

<style>
	.header {
		  width: 100px;
		  height: 100px;
	}
	
	.title{
		height: 120px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		 border-top: 1px solid #dd9ecf;
		 border-bottom: 1px  solid #dd9ecf;
		
	}
	.header{
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
	.nickName{
		width: 20%;
		text-align:center;
		line-height: 80px;

	}
</style>
