import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import avatar_male_user from './../../assets/images/avatar_male_user.png'
import {instance, UserResponseType, UsersResponseType} from './../../API/users-api';
import axios from 'axios';

export class Users extends React.Component<UsersContainerPropsType, any>{

    componentDidMount() {
        instance.get(`users`)
            .then(res => this.props.setUsers(res.data.items));
    }

    render() {
        return (
            <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
                {this.props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <img style={{width: '64px', height: '64px'}} src={user.photos.small !== null ? user.photos.small : avatar_male_user} alt={'user_image_avatar'}/>
                            <div style={{color: 'black'}}>{user.name}</div>
                            <div>{user.status}</div>
                            {user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>FOLLOW</button>
                                : <button onClick={() => this.props.follow(user.id)}>UNFOLLOW</button>
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}
// export const Users = (props: UsersContainerPropsType) => {

    // let getUsers = () => {
    //     if (props.users.length === 0) {
    //         instance.get(`users`)
    //             .then(res => props.setUsers(res.data.items));
    //     }
    // }
    // props.setUsers([
    //     {
    //         id: 1, photos: avatar_male_user, fullName: 'Dimych', isFollow: false,
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         }
    //     },
    //     {
    //         id: 2, photos: avatar_male_user, fullName: 'Meow', isFollow: false,
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         }
    //     },
    //     {
    //         id: 3, photos: avatar_male_user, fullName: 'MeowMeow', isFollow: false,
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         },
    //     },
    //     {
    //         id: 4, photos: avatar_male_user, fullName: 'Petya', isFollow: false,
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk',
    //         },
    //     },
    // ]
    // );
    // }

//     return (
//         <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
//             <button onClick={getUsers}>Get Users</button>
//             {props.users.map((user) => {
//                 return (
//                     <div key={user.id}>
//                         <img style={{width: '64px', height: '64px'}} src={user.photos.small !== null ? user.photos.small : avatar_male_user} alt={'user_image_avatar'}/>
//                         <div style={{color: 'black'}}>{user.name}</div>
//                         <div>{user.status}</div>
//                         {user.followed
//                             ? <button onClick={() => props.unfollow(user.id)}>FOLLOW</button>
//                             : <button onClick={() => props.follow(user.id)}>UNFOLLOW</button>
//                         }
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
