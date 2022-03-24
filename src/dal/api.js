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
    }
}

export const headerAPI = {
    setUserAuthData () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
