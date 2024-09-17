import React from 'react';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
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
            <div className="friends-list">
                    {this.state.friends.map(friend => {
                    return  <Friend friend={friend}/>
                    })}
                    <AddFriend state={this.state.friends} setState={this.setState} />
            </div>
        )
    }
}

export default FriendsList;