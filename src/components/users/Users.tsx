import React from 'react';
import avatar_male_user from "./../../assets/images/avatar_male_user.png";
import {Paginator} from '../common/pagination/Paginator';
import {UsersContainerPropsType} from "./../users/UsersContainer";
import {NavLink} from "react-router-dom";

interface PropsType extends UsersContainerPropsType {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    selectedPageNumber: (pageNumber: number) => void;
}

// type PropsType = {
//     users: UserResponseType[];
//     follow: (userId: number) => void;
//     unfollow: (userId: number) => void;
//     totalCount: number;
//     currentPage: number;
//     pageSize: number;
//     selectPage: (pageNumber: number) => void;
// }

export const Users: React.FC<PropsType> = ({users, follow, unfollow, selectedPageNumber,  ...props}: PropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <NavLink to={'/profile/' + user.id}>
                            <img style={{width: '64px', height: '64px'}}
                                 src={user.photos.small !== null ? user.photos.small : avatar_male_user}
                                 alt={'user_image_avatar'}/>
                        </NavLink>
                        {/*<img style={{width: '64px', height: '64px'}}*/}
                        {/*     src={user.photos.small !== null ? user.photos.small : avatar_male_user}*/}
                        {/*     alt={'user_image_avatar'}/>*/}
                        <div style={{color: 'black'}}>{user.name}</div>
                        <div>{user.status}</div>
                        {user.followed
                            ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => unfollow(user.id)}>FOLLOW</button>
                            : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => follow(user.id)}>UNFOLLOW</button>
                        }
                    </div>
                )
            })}
            <Paginator pageSize={props.pageSize}
                       selectedPageNumber={selectedPageNumber}
                       currentPage={props.currentPage}
                       totalCount={props.totalCount}
            />
        </div>
    );
};
