import React from 'react'
import "./chatList.css"
import ListRow from './ListRow'


function ChatList(){
    var users = [
        "Herbalife","Herbau", "Cuk","Nanang","Herbalife Sehat Sejahtera Abadi","Herbalife Sehat Sejahtera Abadi","Herbalife Sehat Sejahtera Abadi","Herbau","Herbau","Herbau","Herbau"
    ]
    return (
        <div className="chatList">
            <div className="chatHeader">
                <h1>Chat List</h1>
            </div>
            <div className="list">
            {
                users.map((value)=>(
                    <ListRow name={value}></ListRow>
                ))
            }
            </div>
        </div>
    )

}

export default ChatList;