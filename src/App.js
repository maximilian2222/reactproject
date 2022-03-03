import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Settings";
import Settings from "./Components/Settings/Settings";
import Dialogs from "./Components/Dialogs/Dialogs";
import dialogs from "./Components/Dialogs/Dialogs";
import message from "./Components/Dialogs/Message/Message";
import myPosts from "./Components/Profile/MyPosts/MyPosts";
import post from "./Components/Profile/MyPosts/Post/Post";


const App = (props) => {

   /* let posts = [
        {id:1, message:'Hi', likesCount: 22},
        {id:2, message:'Hello', likesCount: 21},
        {id:3, message:'Yo', likesCount: 12},
        {id:3, message:'Yo', likesCount: 12},
        {id:3, message:'Yo', likesCount: 12},
    ]
*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/Profile" element={<Profile posts={props.posts} />} />
                        <Route path='/news' element ={<News />} />
                        <Route path='/music' element ={<Music/>} />
                        <Route path='/setting' element={<Settings/>}/>
                        <Route path='/Dialogs' element={<Dialogs dialogs={props.dialogs} messages ={props.messages}/>}/>



                    </Routes>

                </div>
            </div>
        </BrowserRouter>

    );
}



export default App;








