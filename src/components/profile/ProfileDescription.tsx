import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import avatarImage from './../../assets/images/rocket-ship-png.png';
import {ProfileResponseType} from "./../../redux/types";
import {useDispatch} from "react-redux";
import { setUserStatusThunk } from './../../redux/reducers/profile-reducer';

type PropsType = {
    profile: ProfileResponseType;
    userId: number,
    status: string;
}
export const ProfileDescription: React.FC<PropsType> = ({profile, status, userId}) => {

    const [value, setValue] = useState<string>(status);
    const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setValue(status)
    // }, [status]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const activateEditMode = () => {
        setEdit(true);
    }
    const deactivateEditMode = () => {
        dispatch(setUserStatusThunk(value));
        setEdit(false);
    }


    return (
        <div> {
            profile.photos
                ? <img style={{width: '64px', height: '64px'}}
                       src={profile.photos.large}
                       alt={'avatar logo'}
                />
                : <img style={{width: '64px', height: '64px'}}
                       src={avatarImage}
                       alt={'avatar logo'}
                />
        }
            <div>
                {
                    profile.userId
                }
            </div>
            <div>
                {
                    !edit
                        ? <span onClick={activateEditMode}>{status ? status : "status text"}</span>
                        : <input onChange={onChangeHandler}
                                 value={value}
                                 autoFocus
                                 onBlur={deactivateEditMode}
                        />
                }
            </div>
        </div>
    );
};
