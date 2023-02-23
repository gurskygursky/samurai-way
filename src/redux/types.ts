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
    profile: ProfileResponseType;
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

export type PhotosResponseType = {
    small: string;
    large: string;
}
export type ContactsResponseType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}


export type ProfileResponseType= {
    aboutMe: string | null;
    contacts: ContactsResponseType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosResponseType;
}

export type AuthUserDataResponseType = {
    id: number | null;
    login: string | null;
    email: string | null;
}
export type AuthDataResponseType = {
    data: AuthUserDataResponseType;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    resultCode: number;

}

export type UserResponseType = {
    followed: boolean;
    id: number;
    name: string;
    photos: PhotosResponseType;
    status: string | null;
    uniqueUrlName: string | null;
}
export type GetUsersResponseType = {
    error: string | null;
    totalCount: number | null;
    items: Array<UserResponseType>;
}