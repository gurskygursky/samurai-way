import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import {instance} from './../../API/users-api';
import {Users} from "./Users";
import {Preloader} from './../../components/preloader/Preloader';

export class UsersContainerWithRequest extends React.Component<UsersContainerPropsType, any> {

    componentDidMount() {
        this.props.requestIsFetching(true);
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.usersTotalCount(res.data.totalCount)
                this.props.selectPage(res.data.currentPage)
                this.props.requestIsFetching(false)
            })
    }

    selectPage = (pageNumber: number) => {
        this.props.requestIsFetching(true);
        this.props.selectPage(pageNumber);
        instance.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.requestIsFetching(false);
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : <Users {...this.props}/>
                }
            </>
        )
    }

}
