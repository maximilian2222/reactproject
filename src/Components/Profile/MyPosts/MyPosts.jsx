import React from "react";
import s from './MyPosts.module.module.css'
import Post from "./Post/Post";


const Posts = (props) => {

    /*let posts = [
        {id:1, message:'Hi', likesCount: 22},
        {id:2, message:'Hello', likesCount: 21},
        {id:3, message:'Yo', likesCount: 12},
        {id:3, message:'Yo', likesCount: 12},
        {id:3, message:'Yo', likesCount: 12},]*/


    let PostsElements = props.posts.map( posts => <Post message ={posts.message} likesCount ={posts.likesCount}/>)




    return (
        <div className={s.PostsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>

                { PostsElements }
               {/* <Post message ={postData[0].message} LikesCount={postData[0].likesCount}/>
                <Post message ={postData[1].message} LikesCount={postData[1].likesCount}/>*/}
            </div>
        </div>
    )
}



export default Posts;
