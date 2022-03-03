import React from "react";
import s from '././Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  /*  let dialogs = [
        {id:1, name:'Ivan'},
        {id:2, name:'Max'},
        {id:3, name:'Olena'},
        {id:4, name:'Petro'},
        {id:5, name:'Ira'},
        {id:6, name:'Andrei'}
    ]
*/
    /*let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'Yo'},
        {id:3, message:'Yo'},
    ]*/

    let DialogsElement = props.dialogs.map( (dialog) => <DialogItem name={dialog.name} id = {dialog.id}/> )

        /*[
        <DialogItem name = {dialogsData[0].name}  id= {dialogsData[0].id}/>,
        <DialogItem name = {dialogsData[1].name}  id= {dialogsData[1].id}/>,
        <DialogItem name = {dialogsData[2].name}  id= {dialogsData[2].id}/>
    ];
*/
    let messagesElement = props.messages.map((message) => < Message message = {message.message} />)


  /*      [
        <Message message={messagesData[0].message}/>,
        <Message message={messagesData[1].message}/>,
        <Message message={messagesData[2].message}/>,
    ]

*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { DialogsElement }
                </div>
            <div className={s.massages}>

                {messagesElement}
              {/*  <Message message={messagesData[0].message}/>
                <Message message='Hello'/>
                <Message message='YA'/>*/}
            </div>
        </div>

    )
}


export default Dialogs;
