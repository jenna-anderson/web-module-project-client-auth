import React from 'react';

const Friend = (props) => {

    return (
        <div className="friend-card">
            <p>Name: {props.friend.name}</p>
            <p>Email: {props.friend.email}</p>
            <p>Age: {props.friend.age}</p>
        </div>
    )
}

export default Friend;