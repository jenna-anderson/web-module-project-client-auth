import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username:"Lambda",
            password:"School"
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login} className="login">
                    <div className="form-input">
                        <label>Username:</label>
                        <input 
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Login</button>
                </form>                
            </div>
        )
    }
}

export default Login;