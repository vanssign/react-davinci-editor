import React, { useState } from 'react';
import { FirebaseInitialisation } from '../functions/FirebaseFunctions';
import 'firebase/auth';
export default function FirebaseLoginPageBuilder({ FirebaseConfig }) {

    const fire = FirebaseInitialisation(FirebaseConfig);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotification] = useState('');
    const [LoginStatus, setLoginStatus] = useState(false);

    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoginStatus(true)
            }
            else {
                setLoginStatus(false)
            }
        })
    //ON LOGIN
    const handleLogin = (e) => {
        e.preventDefault();
        setNotification("Logging In...");
        fire.auth()
            .signInWithEmailAndPassword(username, password)
            .catch((err) => {
                setNotification(err.message)
                setTimeout(() => {
                    setNotification('')
                }, 7000)
                setPassword('');
                // PasswordInput.current.focus();
                if (err.code == "auth/invalid-email") {
                    setUsername('');
                    // UsernameInput.current.focus();
                }
            })
    }
    return (
        <div>
            {!LoginStatus ? (
                <>
                    <i className="display-4 bi bi-person-badge"></i>
                    <h1>Login</h1>
                    <small>{notify}</small>
                    {/* LOGIN FORM */}
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" autoFocus value={username} className="form-control"
                                onChange={({ target }) => setUsername(target.value)} placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={password} className="form-control"
                                onChange={({ target }) => setPassword(target.value)} />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Login</button>
                    </form>
                </>
            ) : (
                <div className=""><i className="display-4 bi bi-person-check-fill"></i>
                    <h4>ALREADY LOGGED IN</h4>
                    <h5 className="text-info"><i className="bi bi-info-circle"></i> If you are trying to login from a different account first Logout</h5>
                </div>
            )}
        </div>
    )
}