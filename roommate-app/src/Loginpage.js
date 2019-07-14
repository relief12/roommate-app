import React from 'react';
import './App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Loginpage extends React.Component {

    render() {
        return (

            <Form className="login-form ">
                <h1>
                    <span className="font-weight-bold">Roommate App</span>
                </h1>
                <h2 className="text-center">Welcome</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                       
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                
              
                <Form.Group className="login-links">
                <Form.Label><a href="/">Sign up</a></Form.Label>   
                   <Form.Label ><a href="/">Forgot Password</a></Form.Label>
   
                   </Form.Group>
 
                
                <Button className="btn-lg btn-dark btn-block" type="submit">
                    Login
                </Button>
            </Form>


        );
    }


}

export default Loginpage;