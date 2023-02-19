import React from 'react';
import avatar_male_user from "./../../assets/images/avatar_male_user.png";
import {Paginator} from './../../Paginator';
import {UserResponseType} from "./../../API/users-api";


type PropsType = {
    users: UserResponseType[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    totalCount: number;
    currentPage: number;
    pageSize: number;
    selectPage: (pageNumber: number) => void;
}

export const Users: React.FC<PropsType> = ({users, follow, unfollow, ...props}: PropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <img style={{width: '64px', height: '64px'}}
                             src={user.photos.small !== null ? user.photos.small : avatar_male_user}
                             alt={'user_image_avatar'}/>
                        <div style={{color: 'black'}}>{user.name}</div>
                        <div>{user.status}</div>
                        {user.followed
                            ? <button onClick={() => unfollow(user.id)}>FOLLOW</button>
                            : <button onClick={() => follow(user.id)}>UNFOLLOW</button>
                        }
                    </div>
                )
            })}
            <Paginator pageSize={props.pageSize}
                       selectPage={props.selectPage}
                       currentPage={props.currentPage}
                       totalCount={props.totalCount}
            />
        </div>
    );
};
