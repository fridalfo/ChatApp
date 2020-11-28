import React from 'react'


function ChatBubble(props){
    const positionClass = props.self ? "cb-right" : "cb-left"
    return(
        <div className={`chatBubble ${positionClass}`}>
            <span className="cb-name">{props.name}</span>
            <div className="cb-text">{props.text}</div>
        </div>
    )   
}

export default ChatBubble;