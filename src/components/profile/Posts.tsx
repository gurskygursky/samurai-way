import React, {ChangeEvent, createRef} from 'react';
import {Post} from './Post';
import {PostType} from './../../redux/state';

type PostsPropsType = {
    arrayPosts: Array<PostType>;
    // addPost: (postText: string | undefined) => void;
    addPost: (postText: string) => void;
    postText: string;
    updatePostHandler: (newPostText: string) => void;
}

export const Posts = (props: PostsPropsType) => {

    const posts = props.arrayPosts.map((post: PostType) => <Post postText={post.postText}
                                                                 likesCount={post.likesCount}/>);

    // const [textareaValue, setTextAreaValue] = useState<string>('');
    const textRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost(props.postText);
        props.updatePostHandler('');
    }
    // const addPost = () => {
    //     props.addPost(textareaValue);
    //     setTextAreaValue('');
    // }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostHandler(event.currentTarget.value);
        // setTextAreaValue(event.currentTarget.value);
        // console.log(event.currentTarget.value);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textRef} value={props.postText} onChange={onChangeHandler}/>
                {/*<textarea value={textareaValue} onChange={onChangeHandler}/>*/}
                <button onClick={addPost}>send</button>
            </div>
            {posts}
        </div>
    );
};
