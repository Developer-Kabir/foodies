import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (loading || sending) {
        return  <Spinner animation="border" variant="warning" />
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        
    }


    const navigateSignUp = event => {
        navigate('/signup')
    }

    if(user){
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


    return (
        <div className='signup'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>If you are new here please<Link onClick={navigateSignUp} className='linkstyle text-dark' to="/signup">Signup</Link> </p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>{error}</p>
            </Form>

            <p>Forget Password?<button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;