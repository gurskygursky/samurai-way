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
