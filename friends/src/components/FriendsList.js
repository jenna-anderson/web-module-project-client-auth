import React from 'react';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './../utils/axiosWithAuth';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            this.setState({
                ...this.state,
                friends:res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                {this.state.friends.map(friend => {
                   return  <Friend friend={friend}/>
                })}
            </div>
        )
    }
}

export default FriendsList;