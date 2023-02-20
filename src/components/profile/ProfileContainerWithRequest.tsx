import React from "react";
import {instance} from "./../../API/users-api";
import {Profile} from "./Profile";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {Preloader} from "./../../components/preloader/Preloader";

export class ProfileContainerWithRequest extends React.Component<ProfileContainerPropsType, any> {
    componentDidMount() {
        this.props.requestIsFetching(true);

        let userId = this.props.match.params.userId;
        if (!userId){
            userId = String(18933);
        }

        instance.get(`profile/` + userId)
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
