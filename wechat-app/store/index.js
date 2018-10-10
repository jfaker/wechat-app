import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		userImg: ""
    },
    mutations: {
        login(state, userinfo) {
			console.log(userinfo);
            state.userName = userinfo.nickName || '新用户';
            state.hasLogin = true;
			state.userImg = userinfo.avatarUrl;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
			state.userImg='';
        }
    }
})

export default store
