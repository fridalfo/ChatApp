import React, { useState } from 'react'
import './chatBox.css';
import ChatList from './chatList/ChatList';
import ChatRoom from './chatRoom/ChatRoom';

function ChatBox(){

    return (
        <div className="chatBox">
            <ChatList></ChatList>
            <ChatRoom></ChatRoom>
        </div>
    );

}

export default ChatBox;