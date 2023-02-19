import React from "react";
import {instance} from "./../../API/users-api";
import {Profile} from "./Profile";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {Preloader} from "./../../components/preloader/Preloader";

export class ProfileContainerWithRequest extends React.Component<ProfileContainerPropsType, any> {

    componentDidMount() {
        this.props.requestIsFetching(true);
        instance.get(`profile/18933`)
            .then(res => {
                this.props.setUserProfile(res.data);
                this.props.requestIsFetching(false);
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Profile profile={this.props.profile}/>
                }
            </>
        )
    }
}
