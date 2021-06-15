import axios from 'axios';
import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: "",
    age: 0,
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
        <div>
            <form onSubmit={submit}>
                <label>Name:</label>
                <input 
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}

                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                    />
                <label>Age:</label>
                <input 
                    type="number"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;