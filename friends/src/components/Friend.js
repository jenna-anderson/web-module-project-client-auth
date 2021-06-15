import React from 'react';

const Friend = (props) => {

    return (
        <div>
            <p>Name: {props.friend.name}</p>
            <p>Email: {props.friend.email}</p>
            <p>Age: {props.friend.age}</p>
        </div>
    )
}

export default Friend;