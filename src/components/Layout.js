import { Nav, Navbar } from 'react-bootstrap'
import { FirebaseInitialisation } from '../functions/FirebaseFunctions';
import React from 'react';
export default function Layout({ children, loginStatus, visible, FirebaseConfig }) {
    
    const fire = FirebaseInitialisation(FirebaseConfig);
    const handleLogout = () => {
        console.log("logout");
        fire.auth()
            .signOut()
    }
    if (visible) {
        return (
            <>
                <Navbar bg="light" expand className="py-0" variant="light">
                    <Navbar.Brand>Davinci</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Navbar.Text className="py-0">
                            {loginStatus === true ? (
                                <button className="btn btn-danger btn-sm" onClick={() => handleLogout()}>

                                    <i className="bi bi-person-x-fill"></i>{" "}Logout

                                </button>) : (
                                <>
                                </>

                            )}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <main>{children}</main>
            </>
        )
    }
    else return (<main>{children}</main>)
}