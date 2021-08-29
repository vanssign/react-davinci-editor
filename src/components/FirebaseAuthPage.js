import React, { useState } from 'react';
import FirebaseLoginPageBuilder from './FirebaseLoginPage';
import FirebaseRegisterPageBuilder from './FirebaseRegisterPage';
import 'firebase/auth';

export default function FirebaseAuthPageBuilder({ FirebaseConfig, RegisterationAllowed }) {
    const [PageType, setPageType] = useState("login");
    if (PageType === "login") {
        return (
            <div className="container d-flex align-items-center justify-content-center text-center" style={{ height: '90vh', width: '100vw' }}>
                <div>
                    <FirebaseLoginPageBuilder
                        FirebaseConfig={FirebaseConfig} />
                    {RegisterationAllowed ? (
                        <small>Don't have an account? <a className="btn p-0 btn-sm btn-link" onClick={() => setPageType('register')}>Register now !</a></small>
                    ) : (<></>)}
                </div>
            </div>
        )
    }
    else if (PageType === "register"&&RegisterationAllowed) {
        return (
            <div className="container d-flex align-items-center justify-content-center text-center" style={{ height: '90vh', width: '100vw' }}>
                <div>
                    <FirebaseRegisterPageBuilder
                        FirebaseConfig={FirebaseConfig}
                        setPageType={setPageType} />
                    <small>Already have an account? <a className="btn p-0 btn-sm btn-link" onClick={() => setPageType('login')}>Login now !</a></small>
                </div>
            </div>
        )
    }
}
