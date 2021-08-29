import React, { useState } from 'react';
import Layout from './Layout';
import Editor from './Editor';
import { FirebaseInitialisation } from '../functions/FirebaseFunctions';
import FirebaseAuthPageBuilder from './FirebaseAuthPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css';
import 'firebase/firestore';
import 'firebase/auth';


export function FirebaseEditor({ FirebaseConfig,RegisterationAllowed }) {

    const fire = FirebaseInitialisation(FirebaseConfig);

    const [PageInfo, setPageInfo] = useState(
        {
            title: "",
            excerpt: "",
            tags: "",
            feautredImage: "",
        }
    )


    const [ElementArray, setElementArray] = useState([{
        tag: "h1",
        content: "",
        classes: "",
        typography: {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
        },
        textColor: "dark",
        alignment: "left",
        alignSelf: "center",
        bgColor: "transparent",
        col: 12,
        colMd: 12,
        colLg: 12,
    }])

    const [LoginStatus, setLoginStatus] = useState("");
    const [Notification, setNotification] = useState("");
    const [LiveBlogId, setLiveBlogId] = useState("");


    //Auth Check
    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoginStatus(true);
            }
            else {
                setLoginStatus("failure");
            }
        })

    //Publish
    const handlePublish = (event) => {
        if (PageInfo.title) {
            fire.firestore()
                .collection('blog')
                .add({
                    elementArray: ElementArray,
                    pageInfo: PageInfo
                }).then((docRef) => {
                    setNotification("Blog live at");
                    setLiveBlogId(docRef.id)
                })
                .catch(function (error) {
                    setNotification("Error: " + error);
                });
        }
        else {
            setNotification("Title not added. Open settings and add Page Attributes!")
            setTimeout(() => {
                setNotification("")
            }, 7000)
        }
    }

    return (
        <Layout loginStatus={LoginStatus} visible={LoginStatus === true || LoginStatus === "failure"}
            FirebaseConfig={FirebaseConfig}
        >
            {/* Check LOGIN STATUS */}
            {
                LoginStatus === true ? (
                    // LOGGED IN AND LOADED
                    <div>
                        <Editor elementArray={ElementArray} LoginStatus={LoginStatus} updateelementArray={setElementArray} pageInfo={PageInfo} updatepageInfo={setPageInfo} Notification={Notification} LiveBlogId={LiveBlogId} handlePublish={handlePublish} />
                    </div>
                ) : (
                    LoginStatus !== "failure" ? (
                        // LOADING
                        <div className="container d-flex align-items-center justify-content-center text-center" style={{ height: '100vh', width: '100vw' }}>
                            <div className=""><i className="display-4 bi bi-hourglass-split"></i>
                                <h4>L O A D I N G</h4>
                                <small className="d-block d-sm-none">Tip: Use Desktop for better experience!</small>
                            </div>
                        </div>) : (
                        //NOT LOGGED IN
                        <FirebaseAuthPageBuilder
                            FirebaseConfig={FirebaseConfig}
                            RegisterationAllowed={RegisterationAllowed} />)
                )
            }
        </Layout >
    )
}