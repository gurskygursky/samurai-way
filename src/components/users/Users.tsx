import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';

export const Users = (props: UsersContainerPropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            {props.users !== undefined && props.users.map(user => {
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