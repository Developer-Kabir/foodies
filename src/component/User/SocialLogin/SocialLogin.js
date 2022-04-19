import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (error) {
       
        errorMessage = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
     
      }

      if (user) {
          navigate('/home')
      }
    return (
        <div>
            <div className='mb-3 d-flex align-items-center'>
                <div style={{height: "1px"}} className='bg-secondary w-50'></div>
                <div className='mx-2 mb-2'>or</div>
                <div style={{height: "1px"}} className='bg-secondary w-50'></div>
                
            </div>
            {errorMessage}

            <div>
            <Button onClick={()=>signInWithGoogle()} className='w-50 d-block mx-auto' variant="warning" type="submit">
            <i class="fa-brands fa-google"></i> Sign in with Google
                </Button>
            </div>

            
            
        </div>
    );
};

export default SocialLogin;