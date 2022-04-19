import './Signup.css'
import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if (loading || updating) {
        return  <Spinner animation="border" variant="warning" />
    }

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       navigate('/home');
    }

    const navigateLogin = event => {
        navigate('/login')
    }

    if(user){
        navigate('/home');
    }
    return (
        <div className='signup'>
            <Form onSubmit={handleSubmit}>
                <Form.Group ref={nameRef} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Allready have an account please<Link onClick={navigateLogin} className='linkstyle text-dark' to="/login">Login</Link> </p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Signup;