import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '73b3be0d-8f26-43e0-876e-e49135ca1076'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const subscribeAPI = {
    followUser: async (userId) => {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
   
    getUserProfile (userId) {
        return instance.get(`profile/`+ userId)
            .then(response => response.data)
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData)
    },
    saveProfile (profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})   
    },
    logout () {
        return instance.delete('/auth/login')   
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    },
   
}

