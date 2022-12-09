import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import avatar_male_user from './../../assets/images/avatar_male_user.png'


export const Users = (props: UsersContainerPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photos: avatar_male_user, fullName: 'Dimych', isFollow: false,
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                }
            },
            {
                id: 2, photos: avatar_male_user, fullName: 'Meow', isFollow: false,
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                }
            },
            {
                id: 3, photos: avatar_male_user, fullName: 'MeowMeow', isFollow: false,
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                },
            },
            {
                id: 4, photos: avatar_male_user, fullName: 'Petya', isFollow: false,
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                },
            },
        ]);
    }

    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <img style={{width: '64px', height: '64px'}} src={user.photos} alt={'user_image_avatar'}/>
                        <div>{user.fullName}</div>
                        {user.isFollow
                            ? <button onClick={() => props.unfollow(user.id)}>FOLLOW</button>
                            : <button onClick={() => props.follow(user.id)}>UNFOLLOW</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}