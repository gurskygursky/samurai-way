import axios from 'axios';

type UserPhotosType = {
    small: string;
    large: string;
}
export type UserResponseType = {
    name: string;
    id: number;
    photos: UserPhotosType;
    status: string | null;
    followed: boolean;
}
export type UsersResponseType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
}

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
}

export const AuthAPI = {
    auth() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}

