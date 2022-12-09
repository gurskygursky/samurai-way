export type PostType = {
    id: number;
    postText: string;
    likesCount: number;
}
export type UserType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}
export type ProfilePageType = {
    arrayPosts: Array<PostType>;
}
export type DialogsPageType = {
    arrayUsers: Array<UserType>;
    arrayMessages: Array<MessageType>;
}
export type UserPayloadType = {
    id: number;
    photos: string;
    fullName: string;
    isFollow: boolean;
    location: {
        country: string;
        city: string;
    }
}
