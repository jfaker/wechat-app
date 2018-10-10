<template>
    <view class="content">
		 
		 <view class="uni-list">
		 	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
		 		<view class="uni-media-list">
		 			<view class="uni-media-list-logo">
		 				<image v-if="showImg" :src="value.img"></image>
		 			</view>
		 			<view class="uni-media-list-body">
		 				<view class="uni-media-list-text-top">{{value.title}}</view>
		 				<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
		 			</view>
		 		</view>
		 	</view>  
		 </view>
		 <ul>
			 <li v-for="device in devices">
				 {{device.name}}
				 
			 </li>
		 </ul>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				devices:[],
				showImg: true,
				img:'/static/img/device.png',
				list: [{
						title: "星火原",
						content: "想要这样一间小木屋 ",
						img: "/static/img/device.png"
					},
					{
						title: "星火原1",
						content: "想要这样一间小木屋 ",
						img: "/static/img/device.png"
					},
					{
						title: "星火原2",
						content: "烤炉模式的城，到黄昏 ",
						img: "/static/img/device.png"
					}
				]
			}
			},
			
			methods:{
				 getData(e) {
				 	uni.request({
				 		url: 'http://172.18.44.194:8762/getdevices',
				 		success: (ret) => {
				 			 console.log(ret.data.data);
							 this.devices = ret.data.data;
				 		}
				 	});
				 },
			},
		  
			 onPullDownRefresh() {
								console.log('-------------onPullDownRefresh--------------');
								var socketOpen = false;
							  var socketMsgQueue = ['1','2','3','4','5','6','7','8'];
								uni.connectSocket({
									url: 'ws://172.18.44.194:8763/websocket'
								});
				
								uni.onSocketMessage(function (res) {
									console.log('收到服务器内容：' + res.data);
								});
				
								uni.onSocketOpen(function (res) {
									socketOpen = true;
									for (var i = 0; i < socketMsgQueue.length; i++) {
										sendSocketMessage(socketMsgQueue[i]);
									}
									socketMsgQueue = [];
								});
				
								function sendSocketMessage(msg) {
									if (socketOpen) {
										uni.sendSocketMessage({
											data: msg
										});
									} else {
										socketMsgQueue.push(msg);
									}
								}
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 500);
			 },
			
			mounted(){
				// this.getData()
				var socketOpen = false;
				var socketMsgQueue = ['1','2','3','4','5','6','7','8'];
				uni.connectSocket({
					url: 'ws://172.18.44.194:8763/websocket'
				});

				uni.onSocketMessage(function (res) {
					console.log('收到服务器内容：' + res.data);
				});

				uni.onSocketOpen(function (res) {
					socketOpen = true;
					for (var i = 0; i < socketMsgQueue.length; i++) {
						sendSocketMessage(socketMsgQueue[i]);
					}
					socketMsgQueue = [];
				});

				function sendSocketMessage(msg) {
					if (socketOpen) {
						uni.sendSocketMessage({
							data: msg
						});
					} else {
						socketMsgQueue.push(msg);
					}
				}

			}
	}
</script  >
<style>
	 @import "../../common/uni.css";
     .action-row {
         display: flex;
         flex-direction: row;
         justify-content: center;
     }
 
     .action-row h2 {
         color: #007aff;
         padding: 0 20px;
     }
</style>
