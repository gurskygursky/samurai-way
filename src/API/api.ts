import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7933de6b-6016-40ed-bd74-54247c2003f2'
    },
});
export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    selectUserProfile(userId: string) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    followUser(userId: number) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    unfollowUser(userId: number) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    getUserStatus(userId: number) {
        return (
            instance.get(`/profile/status/${userId}`)
        )
    },
    setUserStatus(status: string) {
        return (
            instance.put(`/profile/status`, {status: status} )
        )
    }
}

export const AuthAPI = {
    auth() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}
