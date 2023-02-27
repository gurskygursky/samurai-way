import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import avatarImage from './../../assets/images/rocket-ship-png.png';
import {ProfileResponseType} from "./../../redux/types";
import {getUserStatusThunk, setUserStatusThunk} from "./../../redux/reducers/profile-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    profile: ProfileResponseType;
    userId: number,
    status: string;
}
export const ProfileDescription: React.FC<PropsType> = ({profile, status, userId}) => {

    const [value, setValue] = useState<string>('');
    const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch();

    console.log(status);

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
            {
                profile.userId
                    ? <span>Nickname: {profile.userId}</span>
                    : <span>{status}</span>
            }
            <div>
                {
                    !status &&
                    <input value={value} onChange={onChangeHandler} autoFocus={true}
                           onBlur={deactivateEditMode}/>
                }
            </div>
            <div>
                {
                    status && <span onDoubleClick={activateEditMode}>{status}</span>
                }
            </div>
        </div>
    );
};
