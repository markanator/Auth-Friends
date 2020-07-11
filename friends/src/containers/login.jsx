import React from "react";
import axios from "axios";

import {Form,Button} from 'semantic-ui-react';

class Login extends React.Component {
    state = {
        credentials: {
        username: "",
        password: ""
        }
    };

    handleChange = e => {
        this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
        });
    };

    login = e => {
        e.preventDefault();
        // make a post request to login endpoint on the server
        axios
        .post("http://localhost:5000/api/login", this.state.credentials)
        .then(res => {
            // console.log(res);
            localStorage.setItem("token", res.data.payload);
            // push user to app's main loggin page
            this.props.history.push("/friends");
        })
        .catch(err => console.error(err));
    };

    render() {
        return (
        <>
            <Form onSubmit={this.login} className='login_form'>
                <Form.Field>
                    <label htmlFor="username"> Username:</label>{" "}
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                </Form.Field>

                <Form.Field>
                    <label htmlFor="password"> Password:</label>{" "}
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            <Button color='blue' type="submit">Log in</Button>
            </Form>
        </>
        );
    }
}

export default Login;