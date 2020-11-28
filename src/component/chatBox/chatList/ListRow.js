import React from 'react'

function ListRow(props){

    return (
        <div className="listRow">
            <img className="avatar" src="https://www.w3schools.com/howto/img_avatar.png"></img>
            <span>{props.name}</span>
        </div>
    );
}

export default ListRow;