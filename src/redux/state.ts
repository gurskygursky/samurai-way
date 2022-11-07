export {};
// export type PostType = {
//     id: number;
//     postText: string;
//     likesCount: number;
// }
// export type UserType = {
//     id: number;
//     name: string;
// }
// export type MessageType = {
//     id: number;
//     message: string;
// }
// export type ProfilePageType = {
//     arrayPosts: Array<PostType>;
//     postText: string;
// }
// export type DialogsPageType = {
//     arrayUsers: Array<UserType>;
//     arrayMessages: Array<MessageType>;
// }
// export type RootStateType = {
//     profile: ProfilePageType;
//     dialogs: DialogsPageType;
// };
//
// export let state: RootStateType = {
//     profile: {
//         arrayPosts: [
//             {id: 1, postText: `It's my first post`, likesCount: 888},
//             {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
//             {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
//             {id: 4, postText: `YO!`, likesCount: 333},
//         ],
//         postText: 'react - kabzda!',
//     },
//     dialogs: {
//         arrayUsers: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Igor'},
//             {id: 3, name: 'Katya'},
//             {id: 4, name: 'Valera'},
//             {id: 5, name: 'Viktor'},
//         ],
//         arrayMessages: [
//             {id: 1, message: 'Hi!'},
//             {id: 2, message: 'Hello, IT-INC!'},
//             {id: 3, message: 'How are you?'},
//         ],
//     },
// };
//
// export const addPost = (postText: string) => {
//     state.profile.arrayPosts.push({id: 5, postText: postText, likesCount: 0});
//     console.log(state.profile.arrayPosts);
//     rerenderEntireThree(state);
// }
// export const updatePostHandler = (newPostText: string) => {
//     state.profile.postText = newPostText;
//     console.log(state.profile.postText);
//     rerenderEntireThree(state);
// }
// let rerenderEntireThree = (state: RootStateType) => {
//
// }
// export const subscriber = (observer: (state: RootStateType) => void ) => {
//     rerenderEntireThree = observer;
// }