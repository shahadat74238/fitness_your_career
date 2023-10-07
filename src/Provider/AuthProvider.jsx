/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Authentication user.
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            console.log(currentUser);
        });
        return ()=>{
            unSubscribe();
        };
        
    }, []);

    // Create User.
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with email and password.
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // Logout.
    const logout = () => {
        return signOut(auth);
    };

    

    const authInfo = {
        user,
        createUser,
        loginWithEmailAndPassword,
        googleLogin,
        githubLogin,
        logout,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;