import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, updateProfile, signOut
} from "firebase/auth";
import swal from "sweetalert";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // create user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("");
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name, "POST");
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => { })
                    .catch((error) => { });

                history.replace("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //   login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location.state?.from || "/";
                history.replace(destination);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //   google sign in
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user?.email, user?.displayName, "PUT");
                swal("Good job!", "Account has been created!", "Success");
                setError("");
                const destination = location?.state?.from || "/";
                history.replace(destination);
            })
            .catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error");
            })
            .finally(() => setIsLoading(false));
    };


    //   observer user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    // sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                swal("Logout Successful!", "You are logged out!", "Success");
            })
            .catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error");
            })
            .finally(() => setIsLoading(false));
    };

    // save User to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        }).then();
    };



    return {
        user,
        isLoading,
        error,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut
    };

}

export default useFirebase;