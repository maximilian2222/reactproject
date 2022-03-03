import React from "react";
import s from './Post.module.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'/>
            { props.message }
            <div>
                <span>like</span>
                {props.LikesCount}
            </div>
        </div>
    )
}



export default Post;
