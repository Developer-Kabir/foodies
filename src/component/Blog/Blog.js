import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Accordion className='blog'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                       <div>
                           <h2>Authorization</h2>
                           <p>Authorization determines what resources a user can access.</p>
                           <p>Authorization works through settings that are implemented and maintained by the organization.</p>
                           <p>Authorization always takes place after authentication.</p>                       
                           </div>
                       <div>
                           <h2>Authentication</h2>
                           <p>Authentication verifies who the user is.</p>
                           <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                           <p>Authentication is the first step of a good identity and access management process.</p>
                       </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why I use firebase </Accordion.Header>
                    <Accordion.Body>
                   <p> Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.,</p>

                    <h2>
                    What other options I have to implement authentication
                    </h2>
                    <p>
                    Prove MFA, DUO Access, HID Global IAM,  ESET Secure Authenticationetc
                    </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        Firebase provide also Authentication Hosting, Cloud Storage, Google Analytics, Predictions ,Cloud Messaging, Dynamic Links, Remote Config
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;