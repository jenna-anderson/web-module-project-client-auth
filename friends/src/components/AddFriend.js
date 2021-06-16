import axios from 'axios';
import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: "",
    age: null,
    email: ""
}

const AddFriend = (props) => {
    const [friend, setFriend] = useState(initialValues);

    const handleChange = (e) => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

        axiosWithAuth().post('/api/friends', friend)
        .then(res => {
            // console.log(res.data)
            props.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="add-friend-container">
            <form onSubmit={submit} className="add-friend-form">
                <div className="add-friend-input">
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={friend.name}
                        onChange={handleChange}

                    />
                </div>
                <div className="add-friend-input">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={friend.email}
                        onChange={handleChange}
                        />
                </div>
                <div className="add-friend-input">
                    <label>Age:</label>
                    <input 
                        type="number"
                        name="age"
                        value={friend.age}
                        onChange={handleChange}
                    />
                </div>
                <button className="add-friend-button">Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;