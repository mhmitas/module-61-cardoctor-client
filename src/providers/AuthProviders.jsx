import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import axios from 'axios';
import { ServerContext } from './ServerProvider';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const { serverLink } = useContext(ServerContext)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signOutUser() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }
    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email; // logout korar por to currentUser null hoye jabe tokhon ami user er kach theke email nobo.
            const loggedUser = { email: userEmail }
            console.log('currentUser=>', currentUser);
            setLoading(false)
            setUser(currentUser)
            // if user exist then issue a token
            if (currentUser) {
                axios.post(`${serverLink}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token response:', res.data);
                    })
            } else {
                console.log(loggedUser);
                axios.post(`${serverLink}/logout`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('after logout:', res.data);
                    })
            }
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        auth,
        setLoading,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        popUpSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;