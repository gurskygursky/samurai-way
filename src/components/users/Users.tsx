import React, {useState} from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import avatar_male_user from './../../assets/images/avatar_male_user.png'
import {instance} from './../../API/users-api';
import {Paginator} from './../../Paginator';

export class Users extends React.Component<UsersContainerPropsType, any>{

    // componentDidMount() {
    //     instance.get(`users`)
    //         .then(res => this.props.setUsers(res.data.items));
    // }

    componentDidMount() {
        instance.get(`users?page=2&count=10`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.usersTotalCount(res.data.totalCount)
                this.props.selectPage(res.data.currentPage)
            })
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
                <Paginator totalCount={this.props.totalCount}
                           selectPage={this.props.selectPage}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                />
            </div>
        );
    }
}
