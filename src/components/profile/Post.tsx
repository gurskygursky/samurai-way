import React from 'react';
import avatarImage from './../../assets/images/rocket-ship-png.png';

type PropsType = {
    postText: string;
    likesCount: number;
}

export const Post = (props: PropsType) => {
    return (
        <div>
            <img style={{width: '48px', height: '48px'}}
                 src={avatarImage}
                 alt={'avatar logo'}
            />
            {props.postText} <b>{props.likesCount}</b>
        </div>
    );
};
