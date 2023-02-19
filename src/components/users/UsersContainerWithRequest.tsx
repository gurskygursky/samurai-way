import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import {instance} from './../../API/users-api';
import {Users} from "./Users";

export class UsersContainerWithRequest extends React.Component<UsersContainerPropsType, any> {

    componentDidMount() {
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.usersTotalCount(res.data.totalCount)
                this.props.selectPage(res.data.currentPage)
            })
    }

    selectPage = (pageNumber: number) => {
        this.props.selectPage(pageNumber);
        instance.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users {...this.props}/>
    }
}
