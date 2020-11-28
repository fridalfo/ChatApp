import { faAngleDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ChatBubble from './ChatBubble';
import './chatRoom.css'

function ChatRoom(){

    var chat_list = [
        [false, "Herbalife","Hallo Kak... Perkenalkan Nama Saya Haviansyah Dari Herbalife ada yang bisa saya bantu?"],
        [true, "Anda","Hallo kak Haviansyah, produk ini ready?"],
        [false, "Herbalife","Hallo Kak... Perkenalkan Nama Saya Haviansyah Dari Herbalife ada yang bisa saya bantu?"],
        [true, "Anda","Hallo kak Haviansyah, produk ini ready?"],
        [false, "Herbalife","Hallo Kak... Perkenalkan Nama Saya Haviansyah Dari Herbalife ada yang bisa saya bantu?"],
        [true, "Anda","Hallo kak Haviansyah, produk ini ready?"],
        [false, "Herbalife","Hallo Kak... Perkenalkan Nama Saya Haviansyah Dari Herbalife ada yang bisa saya bantu?"],
        [true, "Anda","Hallo kak Haviansyah, produk ini ready?"],
        [false, "Herbalife","Hallo Kak... Perkenalkan Nama Saya Haviansyah Dari Herbalife ada yang bisa saya bantu?"],
        [true, "Anda","Hallo kak Haviansyah, produk ini ready?"]
    ]

    return (
        <div className="chatRoom">
            <div className="chatRoomHeader">
                <h1>Herbalife</h1>
                <button className="minimizeButton"><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>

            <div className="chatBubbleList">
                {
                    chat_list.map((value)=> <ChatBubble self={value[0]} name={value[1]} text={value[2]}/>)
                }
            </div>

            <div className="inputArea">
                <div className="inputBox">
                    <input type="text"></input>
                </div>
                <button className="inputButton"><FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
        </div>
    );

}

export default ChatRoom;