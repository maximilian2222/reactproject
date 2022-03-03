import React from "react";
import s from './Profile.module.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {

        /* let posts = [
          {id:1, message:'Hi', likesCount: 22},
          {id:2, message:'Hello', likesCount: 21},
          {id:3, message:'Yo', likesCount: 12},
          {id:3, message:'Yo', likesCount: 12},
          {id:3, message:'Yo', likesCount: 12},
         ]*/

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>
        </div>
    )
}



export default Profile;
