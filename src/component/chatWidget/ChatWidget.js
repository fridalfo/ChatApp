import React from 'react'

import chaticon from '../../chat.svg';
import './chatWidget.css'

function ChatWidget(){
    return (
        <div className="chatWidget">
            <img src={chaticon} alt="" />
            Chat
        </div>
    );
}

export default ChatWidget;